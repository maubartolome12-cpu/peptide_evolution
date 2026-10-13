const WHATSAPP_NUMBER = "523313016273";
const products = window.PE_PRODUCTS || [];
const params = new URLSearchParams(window.location.search);
const slug = params.get("slug") || products[0]?.slug;
let product = products.find((item) => item.slug === slug) || products[0];
const scrollProgress = document.querySelector(".scroll-progress");
const MXN_TO_USD_RATE = 0.055;

function buildWhatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function presentationImage() {
  return product.presentationImage || "assets/peptide-vial-cutout-v1.png";
}

function presentationAlt() {
  return product.presentationAlt || `Presentación de ${product.name}`;
}

function relatedPresentations() {
  const baseName = product.baseName || product.name.split(" · ")[0];
  return products.filter((item) => (item.baseName || item.name.split(" · ")[0]) === baseName && item.category === product.category);
}

function detailPrice(priceMxn) {
  const isEcuador = localStorage.getItem("peptide-evolution-country") === "EC";
  const price = isEcuador ? priceMxn * MXN_TO_USD_RATE : priceMxn;
  return new Intl.NumberFormat(isEcuador ? "en-US" : "es-MX", { style: "currency", currency: isEcuador ? "USD" : "MXN", maximumFractionDigits: isEcuador ? 2 : 0 }).format(price);
}

function productVial() {
  const baseName = product.baseName || product.name.split(" · ")[0];
  const concentration = product.concentration || product.name.split(" · ")[1] || "";
  return `<div class="branded-vial detail-branded-vial"><img src="${presentationImage()}" alt="${presentationAlt()}"><span class="branded-vial-name">${baseName}</span><span class="branded-vial-dose">${concentration}</span></div>`;
}

function researchProfile() {
  const name = product.baseName || product.name.split(" · ")[0];
  const categoryProfiles = {
    "Metabólico": {
      mechanism: "La literatura de esta categoría estudia señales metabólicas y su interacción con rutas de energía, apetito, glucosa o composición corporal. El mecanismo exacto debe confirmarse para la molécula y lote concretos.",
      applications: "Caracterización de señalización celular, ensayos de unión o actividad, modelos metabólicos aprobados y medición de biomarcadores definidos en un protocolo institucional.",
      comparison: "La comparación debe realizarse contra compuestos con la misma diana o familia farmacológica, usando controles y criterios de exposición definidos antes del estudio."
    },
    "Hormona de crecimiento": {
      mechanism: "Esta categoría se investiga en torno a señalización endocrina y rutas relacionadas con el eje de hormona de crecimiento. La actividad depende de la molécula específica, la especie y el sistema experimental.",
      applications: "Estudios de receptores, modelos de señalización endocrina, perfiles temporales y comparación con controles de referencia aprobados por el protocolo.",
      comparison: "Los comparadores deben seleccionarse por diana, potencia analítica y modelo, no por una promesa de resultado."
    },
    "Regeneración": {
      mechanism: "Los productos de esta categoría aparecen en líneas de investigación sobre señales celulares, matriz extracelular, tejido y reparación experimental. La evidencia no equivale a una indicación terapéutica.",
      applications: "Ensayos celulares de migración, matriz, viabilidad, marcadores de tejido y modelos preclínicos con aprobación institucional.",
      comparison: "La comparación se plantea frente a controles de vehículo, estándar analítico u otros compuestos de la misma vía de investigación."
    },
    "Neurocognitivo": {
      mechanism: "Esta categoría se estudia en relación con comunicación neuroquímica, señalización neuronal y variables de comportamiento o cognición en modelos experimentales.",
      applications: "Ensayos de señalización, biomarcadores neuronales y modelos conductuales previamente validados por el comité responsable.",
      comparison: "La lectura comparativa exige controles de vehículo, evaluación ciega y medidas preespecificadas."
    },
    "Energía celular": {
      mechanism: "Se investiga por su relación potencial con rutas mitocondriales, energía celular, metabolismo redox o adaptación metabólica, según la molécula concreta.",
      applications: "Cuantificación de metabolismo celular, respiración mitocondrial, marcadores de estrés y ensayos de función previamente validados.",
      comparison: "Los resultados deben contextualizarse con controles técnicos, blancos de referencia y condiciones experimentales equivalentes."
    }
  };
  const selected = categoryProfiles[product.category] || {
    mechanism: "La caracterización científica depende de la identidad analítica, el lote, la pureza y el sistema experimental. No se deben inferir propiedades desde el nombre comercial.",
    applications: "El uso en investigación debe definirse mediante una hipótesis, controles, variables de resultado y aprobación institucional.",
    comparison: "La comparación válida se basa en identidad, diana, metodología y evidencia primaria verificable."
  };
  const similar = products.filter((item) => item.category === product.category && item.slug !== product.slug && (item.baseName || item.name.split(" · ")[0]) !== name).map((item) => item.baseName || item.name.split(" · ")[0]).filter((value, index, list) => list.indexOf(value) === index).slice(0, 5);
  return {
    name,
    ...selected,
    similar,
    literatureUrl: `https://pubmed.ncbi.nlm.nih.gov/?term=${encodeURIComponent(name)}`
  };
}

function renderProductDetail() {
  const detailRoot = document.querySelector("#productDetail");
  if (!detailRoot || !product) return;

  document.title = `${product.name} | Peptide Evolution`;
  const variants = relatedPresentations();
  const profile = researchProfile();
  const optionName = `detail-presentation-${(product.baseName || product.name).replace(/[^a-z0-9]/gi, "-")}`;
  const includesWater = product.category !== "Reactivos funcionales";
  detailRoot.innerHTML = `
    <section class="detail-hero">
      <div class="detail-copy">
        <a class="back-link" href="index.html#catalogo">Volver al catálogo</a>
        <p class="eyebrow">${product.category}</p>
        <h1>${product.name}</h1>
        <p>${product.details}</p>
        <div class="product-meta detail-tags">
          <span>Vial liofilizado</span>
          <span>Presentación por unidad</span>
          ${product.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <fieldset class="presentation-picker detail-presentation-picker">
          <legend>Selecciona presentación</legend>
          <div class="presentation-options">
            ${variants.map((variant) => `<label class="presentation-option ${variant.slug === product.slug ? "is-selected" : ""}"><input type="radio" name="${optionName}" value="${variant.slug}" data-detail-variant ${variant.slug === product.slug ? "checked" : ""}><span>${variant.concentration || variant.name.replace(`${product.baseName} · `, "")}</span></label>`).join("")}
          </div>
        </fieldset>
        <p class="detail-price">${detailPrice(product.priceMxn)}</p>
        ${includesWater ? '<p class="included-water detail-water">Cada péptido incluye agua bacteriostática de 3 ml correspondiente.</p>' : ""}
        <div class="detail-actions">
          <a class="primary-action" href="${buildWhatsappLink(`Hola, quiero pedir ${product.name} en Peptide Evolution. ¿Me confirmas precio, disponibilidad y link de pago?`)}" target="_blank" rel="noopener">Pedir por WhatsApp</a>
          <a class="secondary-detail-action" href="index.html#catalogo">Volver al catálogo</a>
        </div>
      </div>
      <div class="detail-visual peptide-visual peptide-visual-${product.visual} has-custom-visual">
        ${productVial()}
        <span class="orbit orbit-one"></span>
        <span class="orbit orbit-two"></span>
        <span class="spark spark-one"></span>
        <span class="spark spark-two"></span>
      </div>
    </section>
    <section class="detail-section presentation-section">
      <div class="section-heading">
        <p class="eyebrow">Presentación</p>
        <h2>Producto por unidad</h2>
        <p>La disponibilidad, presentación final y enlace de pago se confirman antes de finalizar la compra.</p>
      </div>
      <div class="presentation-grid">
        <article class="presentation-image-card has-custom-presentation">
          ${productVial()}
        </article>
        <article class="presentation-copy-card">
          <span>Incluye</span>
          <h3>Presentación seleccionada</h3>
          <p>El pedido se prepara de acuerdo con la concentración elegida${includesWater ? " e incluye agua bacteriostática de 3 ml correspondiente" : ""}. La disponibilidad se confirma antes de finalizar la compra.</p>
          <ul>
            <li>Producto seleccionado por unidad</li>
            ${includesWater ? '<li>Agua bacteriostática de 3 ml incluida</li>' : '<li>Presentación indicada en el catálogo</li>'}
            <li>Confirmación de precio, disponibilidad y entrega</li>
          </ul>
        </article>
      </div>
    </section>
    <section class="detail-section research-dossier" id="dossier">
      <div class="section-heading">
        <p class="eyebrow">Dossier de investigación</p>
        <h2>Información científica de ${profile.name}</h2>
        <p>Esta ficha organiza información de contexto para investigación. No sustituye el COA, la ficha de seguridad (SDS), ni la aprobación de un comité ético o institucional.</p>
      </div>
      <div class="dossier-grid">
        <article id="identidad"><span>01 · Identidad</span><h3>Qué es</h3><p>${profile.name} se presenta aquí como material de investigación en la concentración seleccionada. La identidad, secuencia, pureza, masa y trazabilidad deben verificarse exclusivamente con el COA del lote correspondiente.</p></article>
        <article id="mecanismo"><span>02 · Mecanismo</span><h3>Contexto mecanístico</h3><p>${profile.mechanism}</p></article>
        <article id="evidencia"><span>03 · Evidencia</span><h3>Lectura de estudios</h3><p>La evidencia debe revisarse en fuentes primarias, distinguiendo experimentos in vitro, preclínicos y estudios clínicos. Un resultado publicado no constituye autorización de uso ni garantiza reproducibilidad para otro material.</p><a href="${profile.literatureUrl}" target="_blank" rel="noopener">Consultar literatura indexada</a></article>
        <article id="aplicaciones"><span>04 · Aplicaciones</span><h3>Áreas de investigación</h3><p>${profile.applications}</p></article>
        <article id="estudios"><span>05 · Estudios preclínicos</span><h3>Diseño responsable</h3><p>Un protocolo preclínico debe definir pregunta, modelo, controles, variables de resultado, criterios de exclusión, tamaño muestral y supervisión institucional. Esta tienda no publica dosis, vías ni esquemas operativos.</p></article>
        <article id="manejo"><span>06 · Manejo documental</span><h3>Reconstitución y manipulación</h3><p>El producto incluye agua bacteriostática de 3 ml cuando corresponde. Sigue únicamente la ficha técnica, COA/SDS y los procedimientos normalizados de tu institución. No uses esta página como instrucción de preparación.</p></article>
        <article id="estabilidad"><span>07 · Estabilidad</span><h3>Almacenamiento</h3><p>Las condiciones de conservación y estabilidad dependen de la molécula y lote. Revisa la etiqueta, COA/SDS y las condiciones de envío antes de usar el material; evita asumir periodos o temperaturas no documentados.</p></article>
        <article id="seguridad"><span>08 · Seguridad</span><h3>Perfil documentado</h3><p>El perfil de seguridad debe evaluarse en la publicación primaria y la documentación del proveedor para el material exacto. Los hallazgos de modelos animales o ensayos no equivalen a seguridad para personas.</p></article>
        <article id="comparacion"><span>09 · Comparación</span><h3>Contexto comparativo</h3><p>${profile.comparison}</p>${profile.similar.length ? `<p class="similar-products">Productos de la misma categoría: ${profile.similar.join(", ")}.</p>` : ""}</article>
        <article id="historia"><span>10 · Historia</span><h3>Desarrollo</h3><p>La historia de desarrollo se debe atribuir a la molécula y a sus publicaciones o patentes verificables. Antes de citarla en una investigación, consulta literatura primaria y registros públicos pertinentes.</p></article>
      </div>
    </section>
    <section class="detail-section">
      <div class="section-heading">
        <p class="eyebrow">Información detallada</p>
        <h2>Cómo funciona y qué puede apoyar</h2>
        <p>Información educativa para entender el enfoque de investigación de ${product.name}. No sustituye valoración médica, no define dosis y no garantiza resultados.</p>
      </div>
      <div class="deep-info-grid">
        <article class="deep-info-card">
          <span>Cómo funciona</span>
          <p>${product.mechanism || "Este producto se estudia por su relación con señales biológicas específicas. La respuesta puede variar por persona, contexto y seguimiento profesional."}</p>
        </article>
        <article class="deep-info-card">
          <span>Qué hace</span>
          <p>${product.does || "Su uso informativo se orienta a comprender rutas celulares, metabólicas o de señalización dentro de su categoría de investigación."}</p>
        </article>
      </div>
    </section>
    <section class="detail-section changes-section">
      <div class="section-heading">
        <p class="eyebrow">Cambios observables</p>
        <h2>Objetivos que suelen monitorearse</h2>
        <p>Estos puntos describen áreas de seguimiento. Los cambios dependen de evaluación individual, hábitos, tolerancia y acompañamiento profesional.</p>
      </div>
      <div class="changes-grid">
        ${(product.changes || []).map((change) => `
          <article class="change-card">
            <span></span>
            <p>${change}</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="detail-section">
      <div class="section-heading">
        <p class="eyebrow">Beneficios</p>
        <h2>Beneficios informativos de ${product.name}</h2>
      </div>
      <div class="benefit-grid">
        ${product.benefits.map((benefit, index) => `
          <article class="benefit-card reveal-card is-visible">
            <span>0${index + 1}</span>
            <h3>${benefit}</h3>
            <p>Área de interés para orientar la cotización y entender el enfoque del producto. No representa indicación médica, dosis ni promesa terapéutica.</p>
          </article>
        `).join("")}
      </div>
    </section>
    <section class="detail-section side-effects-section">
      <div class="section-heading">
        <p class="eyebrow">Seguridad</p>
        <h2>Posibles efectos secundarios</h2>
        <p>La información siguiente es general e informativa. La tolerancia puede variar por persona y producto; cualquier duda debe revisarse con un profesional calificado.</p>
      </div>
      <div class="side-effects-list">
        ${(product.sideEffects || []).map((effect) => `<span>${effect}</span>`).join("")}
      </div>
    </section>
  `;
}

function syncWhatsappLinks() {
  document.querySelectorAll(".js-whatsapp").forEach((link) => {
    link.href = buildWhatsappLink(link.dataset.message || "Hola, quiero información de Peptide Evolution.");
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function updateScrollProgress() {
  if (!scrollProgress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  scrollProgress.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`;
}

function startInteractiveDepth() {
  const cards = document.querySelectorAll(".deep-info-card, .change-card, .benefit-card, .presentation-image-card, .presentation-copy-card");
  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * -7;
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

renderProductDetail();
syncWhatsappLinks();
startInteractiveDepth();
updateScrollProgress();
window.addEventListener("scroll", updateScrollProgress, { passive: true });

document.querySelector("#productDetail")?.addEventListener("change", (event) => {
  const input = event.target.closest("[data-detail-variant]");
  if (!input) return;
  const selected = products.find((item) => item.slug === input.value);
  if (!selected) return;
  product = selected;
  history.replaceState({}, "", `?slug=${encodeURIComponent(product.slug)}`);
  renderProductDetail();
  syncWhatsappLinks();
  startInteractiveDepth();
});
