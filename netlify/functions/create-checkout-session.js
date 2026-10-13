const MAX_QUANTITY_PER_PRODUCT = 20;
const MXN_TO_USD_RATE = Number(process.env.MXN_TO_USD_RATE || "0.055");
const { PE_PRICE_ROWS } = require("../../products-data.js");
const STORES = {
  MX: { currency: "mxn", freeShippingFrom: 200000, shippingAmount: 20000, carrier: "DHL", country: "MX" },
  EC: { currency: "usd", freeShippingFrom: 15000, shippingAmount: 1000, carrier: "Servientrega", country: "EC" }
};

function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const PRODUCTS_BY_SLUG = new Map(PE_PRICE_ROWS.map(([category, sku, baseName, concentration, priceMxn]) => {
  const slug = slugify(`${baseName}-${sku}`);
  return [slug, { category, sku, baseName, concentration, priceMxn, name: `${baseName} · ${concentration}` }];
}));

function json(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") return json(405, { error: "Método no permitido." });
  if (!process.env.STRIPE_SECRET_KEY) return json(503, { error: "El pago todavía no está configurado." });

  let request;
  try {
    request = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { error: "Solicitud inválida." });
  }

  const store = STORES[request.country];
  if (!store) return json(400, { error: "Selecciona México o Ecuador antes de pagar." });
  if (!Number.isFinite(MXN_TO_USD_RATE) || MXN_TO_USD_RATE <= 0) {
    return json(503, { error: "La conversión de precios para Ecuador no está configurada." });
  }

  const requestedItems = Array.isArray(request.items) ? request.items : [];
  const validatedItems = requestedItems.map((item) => {
    const product = PRODUCTS_BY_SLUG.get(item?.slug);
    const quantity = Number(item?.quantity);
    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > MAX_QUANTITY_PER_PRODUCT) return null;
    const unitAmount = request.country === "EC"
      ? Math.round(product.priceMxn * MXN_TO_USD_RATE * 100)
      : Math.round(product.priceMxn * 100);
    return unitAmount > 0 ? { product, quantity, unitAmount } : null;
  }).filter(Boolean);

  if (!validatedItems.length || validatedItems.length !== requestedItems.length) {
    return json(400, { error: "Hay productos no disponibles para pago en línea. Revisa tu carrito o solicita ayuda por WhatsApp." });
  }

  const subtotal = validatedItems.reduce((total, item) => total + item.unitAmount * item.quantity, 0);

  const siteUrl = process.env.URL || "https://www.peptidevolution.com";
  const form = new URLSearchParams({
    mode: "payment",
    customer_creation: "always",
    billing_address_collection: "required",
    success_url: `${siteUrl}/?payment=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/?payment=cancelled`,
    "shipping_address_collection[allowed_countries][0]": store.country,
    "metadata[country]": request.country,
    "metadata[carrier]": store.carrier
  });
  validatedItems.forEach((item, index) => {
    form.set(`line_items[${index}][price_data][currency]`, store.currency);
    form.set(`line_items[${index}][price_data][unit_amount]`, String(item.unitAmount));
    form.set(`line_items[${index}][price_data][product_data][name]`, item.product.name);
    form.set(`line_items[${index}][price_data][product_data][metadata][sku]`, item.product.sku);
    form.set(`line_items[${index}][price_data][product_data][metadata][category]`, item.product.category);
    form.set(`line_items[${index}][quantity]`, String(item.quantity));
  });

  if (subtotal < store.freeShippingFrom) {
    form.set("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
    form.set("shipping_options[0][shipping_rate_data][display_name]", `Envío seguro por ${store.carrier}`);
    form.set("shipping_options[0][shipping_rate_data][fixed_amount][amount]", String(store.shippingAmount));
    form.set("shipping_options[0][shipping_rate_data][fixed_amount][currency]", store.currency);
    form.set("shipping_options[0][shipping_rate_data][delivery_estimate][minimum][unit]", "business_day");
    form.set("shipping_options[0][shipping_rate_data][delivery_estimate][minimum][value]", "2");
    form.set("shipping_options[0][shipping_rate_data][delivery_estimate][maximum][unit]", "business_day");
    form.set("shipping_options[0][shipping_rate_data][delivery_estimate][maximum][value]", "7");
  }

  try {
    const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: form.toString()
    });
    const session = await stripeResponse.json();
    if (!stripeResponse.ok || !session.url) throw new Error(session.error?.message || "Stripe rechazó la sesión de pago.");
    return json(200, { url: session.url });
  } catch (error) {
    console.error("Stripe Checkout error", error.message);
    return json(502, { error: "No fue posible iniciar el pago seguro. Intenta de nuevo o solicita cotización por WhatsApp." });
  }
};
