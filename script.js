const WHATSAPP_NUMBER = "523313016273";
const STORE_COUNTRIES = {
  MX: { label: "México", currency: "MXN", locale: "es-MX", shippingThreshold: 2000 },
  EC: { label: "Ecuador", currency: "USD", locale: "en-US", shippingThreshold: 150 }
};
// Ajusta este valor al tipo de cambio comercial que desees usar para Ecuador.
const MXN_TO_USD_RATE = 0.055;
const products = window.PE_PRODUCTS || [];
const areas = window.PE_AREAS || [];

let activeCategory = "Todos";
let searchTerm = "";
let visibleLimit = 24;
const selectedPresentations = new Map();
let cart = loadCart();
let selectedCountry = loadCountry();

const areasGrid = document.querySelector("#areasGrid");
const productsGrid = document.querySelector("#productsGrid");
const productCount = document.querySelector("#productCount");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#searchInput");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartWhatsapp = document.querySelector("#cartWhatsapp");
const stripeCheckout = document.querySelector("#stripeCheckout");
const checkoutStatus = document.querySelector("#checkoutStatus");
const loadMoreProducts = document.querySelector("#loadMoreProducts");
const cartSubtotal = document.querySelector("#cartSubtotal");
const shippingProgress = document.querySelector("#shippingProgress");
const researchGate = document.querySelector("#researchGate");
const researchConfirmation = document.querySelector("#researchConfirmation");
const researchGateContinue = document.querySelector("#researchGateContinue");
const countryGate = document.querySelector("#countryGate");
const menuToggle = document.querySelector(".menu-toggle");
const siteHeader = document.querySelector(".site-header");
const scrollProgress = document.querySelector(".scroll-progress");

function buildWhatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function loadCountry() {
  const storedCountry = localStorage.getItem("peptide-evolution-country");
  return STORE_COUNTRIES[storedCountry] ? storedCountry : null;
}

function currentStore() {
  return STORE_COUNTRIES[selectedCountry || "MX"];
}

function formatPrice(priceMxn) {
  if (!Number.isFinite(priceMxn)) return "Precio por confirmar";
  const store = currentStore();
  const price = selectedCountry === "EC" ? priceMxn * MXN_TO_USD_RATE : priceMxn;
  return new Intl.NumberFormat(store.locale, {
    style: "currency",
    currency: store.currency,
    maximumFractionDigits: selectedCountry === "EC" ? 2 : 0
  }).format(price);
}

function updateCountryMessaging() {
  const store = currentStore();
  document.querySelectorAll("[data-country-message]").forEach((element) => {
    element.textContent = `Envío gratis en ${store.label} desde ${new Intl.NumberFormat(store.locale, { style: "currency", currency: store.currency, maximumFractionDigits: 0 }).format(store.shippingThreshold)}.`;
  });
}

function selectCountry(country) {
  if (!STORE_COUNTRIES[country]) return;
  selectedCountry = country;
  localStorage.setItem("peptide-evolution-country", country);
  countryGate?.classList.add("is-hidden");
  document.body.classList.remove("has-country-gate");
  updateCountryMessaging();
  renderProducts();
  renderCart();
  initializeResearchGate();
}

function initializeCountryGate() {
  if (selectedCountry) {
    countryGate?.classList.add("is-hidden");
    updateCountryMessaging();
    return;
  }
  document.body.classList.add("has-country-gate");
}

function closeResearchGate() {
  researchGate?.classList.add("is-hidden");
  document.body.classList.remove("has-research-gate");
}

function initializeResearchGate() {
  // El selector de país es el único acceso inicial; la información de uso responsable
  // permanece visible dentro del sitio para no bloquear el catálogo con dos ventanas.
  closeResearchGate();
}

function normalizeText(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem("peptide-evolution-cart"));
    return Array.isArray(savedCart) ? savedCart.filter((item) => item && item.slug && item.quantity > 0) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("peptide-evolution-cart", JSON.stringify(cart));
}

function cartQuantity() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

function cartSubtotalMxn() {
  return cart.reduce((total, item) => {
    const product = products.find((entry) => entry.slug === item.slug);
    return total + (product?.priceMxn || 0) * item.quantity;
  }, 0);
}

function addToCart(slug) {
  const item = cart.find((product) => product.slug === slug);
  if (item) item.quantity += 1;
  else cart.push({ slug, quantity: 1 });
  saveCart();
  renderCart();
}

function changeCartQuantity(slug, change) {
  const item = cart.find((product) => product.slug === slug);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter((product) => product.slug !== slug);
  saveCart();
  renderCart();
}

function cartMessage() {
  const requestedItems = cart.map((item) => {
    const product = products.find((entry) => entry.slug === item.slug);
    return product ? `• ${product.name} × ${item.quantity}` : null;
  }).filter(Boolean).join("\n");
  return `Hola. Quiero solicitar una cotización de Peptide Evolution para:\n${requestedItems}\n\n¿Me confirmas disponibilidad, precio final, presentación y detalles de entrega?`;
}

function renderCart() {
  if (!cartItems || !cartCount || !cartWhatsapp) return;
  const quantity = cartQuantity();
  cartCount.textContent = quantity;
  cartCount.setAttribute("aria-label", `${quantity} producto${quantity === 1 ? "" : "s"} en cotización`);

  const items = cart.map((item) => ({ ...item, product: products.find((product) => product.slug === item.slug) }))
    .filter((item) => item.product);
  cartItems.innerHTML = items.length ? items.map(({ product, quantity: itemQuantity }) => `
    <article class="cart-item">
      <div><strong>${product.name}</strong><span>${product.sku ? `SKU ${product.sku}` : "Producto seleccionado"}</span></div>
      <div class="quantity-controls" aria-label="Cantidad de ${product.name}">
        <button type="button" data-cart-change="-1" data-slug="${product.slug}" aria-label="Quitar una unidad de ${product.name}">−</button>
        <b>${itemQuantity}</b>
        <button type="button" data-cart-change="1" data-slug="${product.slug}" aria-label="Agregar una unidad de ${product.name}">+</button>
      </div>
    </article>
  `).join("") : '<p class="empty-cart">Tu cotización está vacía. Agrega productos del catálogo para enviarlos juntos.</p>';

  if (items.length) {
    cartWhatsapp.href = buildWhatsappLink(cartMessage());
    cartWhatsapp.classList.remove("is-disabled");
    cartWhatsapp.removeAttribute("aria-disabled");
    stripeCheckout?.removeAttribute("disabled");
  } else {
    cartWhatsapp.href = "#catalogo";
    cartWhatsapp.classList.add("is-disabled");
    cartWhatsapp.setAttribute("aria-disabled", "true");
    stripeCheckout?.setAttribute("disabled", "");
  }

  const subtotalMxn = cartSubtotalMxn();
  if (cartSubtotal) cartSubtotal.textContent = formatPrice(subtotalMxn);
  if (shippingProgress) {
    const store = currentStore();
    const subtotal = selectedCountry === "EC" ? subtotalMxn * MXN_TO_USD_RATE : subtotalMxn;
    const remaining = Math.max(0, store.shippingThreshold - subtotal);
    shippingProgress.textContent = !items.length
      ? `Envío gratis en ${store.label} desde ${formatPrice(store.shippingThreshold / (selectedCountry === "EC" ? MXN_TO_USD_RATE : 1))}.`
      : remaining === 0
        ? "Tu pedido califica para envío gratis."
        : `Agrega ${formatPrice(remaining / (selectedCountry === "EC" ? MXN_TO_USD_RATE : 1))} para envío gratis.`;
  }
}

async function beginStripeCheckout() {
  if (!cart.length || !stripeCheckout) return;
  stripeCheckout.disabled = true;
  stripeCheckout.textContent = "Preparando pago…";
  if (checkoutStatus) checkoutStatus.textContent = "";

  try {
    const response = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart.map(({ slug, quantity }) => ({ slug, quantity })),
        country: selectedCountry
      })
    });
    const result = await response.json();
    if (!response.ok || !result.url) throw new Error(result.error || "No fue posible iniciar el pago.");
    window.location.assign(result.url);
  } catch (error) {
    if (checkoutStatus) checkoutStatus.textContent = error.message || "No fue posible iniciar el pago. Intenta de nuevo.";
    stripeCheckout.disabled = false;
    stripeCheckout.textContent = "Continuar al pago seguro";
  }
}

function productGroups() {
  return Object.values(products.reduce((groups, product) => {
    const groupKey = `${product.category}::${product.baseName || product.name.split(" · ")[0]}`;
    if (!groups[groupKey]) groups[groupKey] = { id: groupKey, category: product.category, name: product.baseName || product.name.split(" · ")[0], variants: [] };
    groups[groupKey].variants.push(product);
    return groups;
  }, {}));
}

function filteredProducts() {
  return productGroups().filter((group) => {
    const matchesCategory = activeCategory === "Todos" || group.category === activeCategory;
    const haystack = normalizeText(`${group.name} ${group.category} ${group.variants.map((item) => `${item.sku} ${item.concentration} ${item.summary}`).join(" ")}`);
    return matchesCategory && haystack.includes(normalizeText(searchTerm));
  });
}

function productVisual(product) {
  const visualImage = product.presentationImage || "assets/peptide-vial-cutout-v1.png";
  return `
    <div class="peptide-visual peptide-visual-${product.visual} has-custom-visual" aria-hidden="true">
      <img src="${visualImage}" alt="">
    </div>
  `;
}

function productPresentationImage(product) {
  const image = product.presentationImage || "assets/peptide-vial-cutout-v1.png";
  const baseName = product.baseName || product.name.split(" · ")[0];
  const concentration = product.concentration || product.name.split(" · ")[1] || "";
  return `<div class="branded-vial" aria-label="Presentación de ${product.name}"><img src="${image}" alt="${product.presentationAlt || `Presentación de ${product.name}`}"><span class="branded-vial-name">${baseName}</span><span class="branded-vial-dose">${concentration}</span></div>`;
}

function renderCategories() {
  if (!categoryFilters) return;
  const categories = ["Todos", ...new Set(products.map((product) => product.category))];
  categoryFilters.innerHTML = categories.map((category) => (
    `<button type="button" class="${category === activeCategory ? "is-active" : ""}" data-category="${category}">${category}</button>`
  )).join("");
}

function renderProducts() {
  if (!productsGrid) return;
  const visibleGroups = filteredProducts();
  const displayedGroups = visibleGroups.slice(0, visibleLimit);
  const totalPresentations = visibleGroups.reduce((count, group) => count + group.variants.length, 0);
  productCount.textContent = visibleGroups.length > displayedGroups.length
    ? `${displayedGroups.length} de ${visibleGroups.length} productos · ${totalPresentations} presentaciones`
    : `${visibleGroups.length} producto${visibleGroups.length === 1 ? "" : "s"} · ${totalPresentations} presentaciones`;

  productsGrid.innerHTML = displayedGroups.map((group) => {
    const selectedSlug = selectedPresentations.get(group.id) || group.variants[0].slug;
    const product = group.variants.find((item) => item.slug === selectedSlug) || group.variants[0];
    const includesWater = product.category !== "Reactivos funcionales";
    const pickerName = `presentation-${group.id.replace(/[^a-z0-9]/gi, "-")}`;
    return `
      <article class="product-card reveal-card">
        <div class="product-top">
          <a class="product-card-link" href="./producto.html?slug=${product.slug}" target="_blank" rel="noopener" aria-label="Abrir ficha de ${group.name}">
            <span>${product.category}</span>
            <h3>${group.name}</h3>
            ${productVisual(product)}
          </a>
        </div>
        <div class="product-body">
          <div class="product-kit-image ${product.presentationImage ? "has-custom-presentation" : ""}">
            ${productPresentationImage(product)}
          </div>
          <p class="product-summary">Selecciona una presentación para ver su precio por unidad.</p>
          <fieldset class="presentation-picker">
            <legend>Elige presentación</legend>
            <div class="presentation-options">
              ${group.variants.map((variant) => `
                <label class="presentation-option ${variant.slug === product.slug ? "is-selected" : ""}">
                  <input type="radio" name="${pickerName}" value="${variant.slug}" data-variant-group="${group.id}" ${variant.slug === product.slug ? "checked" : ""}>
                  <span>${variant.concentration || variant.name.replace(`${group.name} · `, "")}</span>
                </label>`).join("")}
            </div>
          </fieldset>
          <div class="product-meta">
            <span>SKU ${product.sku || "—"}</span>
            <span>Precio por unidad</span>
          </div>
          ${includesWater ? '<p class="included-water">Incluye agua bacteriostática de 3 ml.</p>' : ""}
          <div class="product-actions">
            <button class="primary-product-action" type="button" data-add-cart="${product.slug}">Agregar a cotización</button>
            <a href="./producto.html?slug=${product.slug}" target="_blank" rel="noopener">Abrir ficha completa</a>
          </div>
          <p class="product-price">${formatPrice(product.priceMxn)}</p>
        </div>
      </article>
    `;
  }).join("");

  if (!visibleGroups.length) {
    productsGrid.innerHTML = '<p class="empty-cart">No encontramos productos con esa búsqueda.</p>';
  }
  if (loadMoreProducts) loadMoreProducts.hidden = displayedGroups.length >= visibleGroups.length;
}

function renderAreas() {
  if (!areasGrid) return;

  areasGrid.innerHTML = areas.map((area) => `
    <article class="area-card reveal-card">
      <div class="area-card-top">
        <span>${area.category}</span>
        <h3>${area.title}</h3>
      </div>
      <div class="area-card-body">
        <p>${area.note}</p>
        <div class="area-tags">
          ${area.products.map((product) => `<span>${product}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function syncWhatsappLinks() {
  document.querySelectorAll(".js-whatsapp").forEach((link) => {
    link.href = buildWhatsappLink(link.dataset.message || "Hola, quiero información de Peptide Evolution.");
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function startRevealObserver() {
  const cards = document.querySelectorAll(".reveal-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  cards.forEach((card) => observer.observe(card));
}

function updateScrollProgress() {
  if (!scrollProgress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
}

function startInteractiveDepth() {
  const cards = document.querySelectorAll(".product-card, .area-card, .education-grid article, .professional-grid article");
  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -8;
      card.style.setProperty("--tilt-x", `${y}deg`);
      card.style.setProperty("--tilt-y", `${x}deg`);
      card.classList.add("is-tilting");
    });

    card.addEventListener("pointerleave", () => {
      card.classList.remove("is-tilting");
      card.style.removeProperty("--tilt-x");
      card.style.removeProperty("--tilt-y");
    });
  });
}

categoryFilters?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  activeCategory = button.dataset.category;
  visibleLimit = 24;
  renderCategories();
  renderProducts();
  startRevealObserver();
});

searchInput?.addEventListener("input", (event) => {
  searchTerm = event.target.value;
  visibleLimit = 24;
  renderProducts();
  startRevealObserver();
  startInteractiveDepth();
});

loadMoreProducts?.addEventListener("click", () => {
  visibleLimit += 24;
  renderProducts();
  startRevealObserver();
  startInteractiveDepth();
});

productsGrid?.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-cart]");
  if (addButton) {
    addToCart(addButton.dataset.addCart);
    addButton.textContent = "Agregado ✓";
    setTimeout(() => { addButton.textContent = "Agregar a cotización"; }, 1100);
    return;
  }
});

productsGrid?.addEventListener("change", (event) => {
  const option = event.target.closest("[data-variant-group]");
  if (!option) return;
  selectedPresentations.set(option.dataset.variantGroup, option.value);
  renderProducts();
  startRevealObserver();
  startInteractiveDepth();
});

cartItems?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-cart-change]");
  if (button) changeCartQuantity(button.dataset.slug, Number(button.dataset.cartChange));
});

stripeCheckout?.addEventListener("click", beginStripeCheckout);
researchConfirmation?.addEventListener("change", () => {
  if (researchGateContinue) researchGateContinue.disabled = !researchConfirmation.checked;
});
researchGateContinue?.addEventListener("click", () => {
  if (!researchConfirmation?.checked) return;
  localStorage.setItem("peptide-evolution-research-confirmed", "true");
  closeResearchGate();
});
countryGate?.addEventListener("click", (event) => {
  const option = event.target.closest("[data-country]");
  if (option) selectCountry(option.dataset.country);
});

menuToggle?.addEventListener("click", () => {
  const isOpen = siteHeader.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".top-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    siteHeader.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", updateScrollProgress, { passive: true });

renderCategories();
initializeCountryGate();
initializeResearchGate();
renderAreas();
renderProducts();
renderCart();
syncWhatsappLinks();
startRevealObserver();
startInteractiveDepth();
updateScrollProgress();
