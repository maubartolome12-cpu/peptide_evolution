# Peptide Evolution

Página web estática para `www.peptidevolution.com`, con estética premium clara, catálogo de péptidos, páginas individuales de producto, áreas de investigación, guía rápida y cotización consolidada por WhatsApp.

## Cómo funciona la tienda

Los visitantes pueden buscar y filtrar el catálogo, añadir varios productos a **Mi cotización**, ajustar cantidades y enviar un solo mensaje de WhatsApp con su selección. El carrito se conserva en el navegador del visitante. El precio, la disponibilidad y el enlace de pago se confirman por WhatsApp antes de finalizar la compra.

## País, moneda y envío

Al abrir el sitio, el cliente elige dónde quiere comprar:

- **México:** precios en MXN y envío gratis desde **MX$2,000**.
- **Ecuador:** precios en USD y envío gratis desde **US$150**.

El tipo de cambio para Ecuador se controla con `MXN_TO_USD_RATE` en `script.js`. Cuando se capturen precios, agrega `priceMxn` a cada producto dentro de `products-data.js`; la web mostrará automáticamente la moneda correspondiente al país seleccionado.

## Activar pagos y envíos con Stripe en Netlify

La tienda incluye una función segura de Netlify para crear una página de pago alojada por Stripe. Antes de publicar, configura estas variables de entorno en **Netlify → Site configuration → Environment variables**:

- `STRIPE_SECRET_KEY`: la clave secreta de Stripe (`sk_live_...`). Nunca la agregues al código ni la compartas en un chat.
- `MXN_TO_USD_RATE`: opcional. Conversión usada para Ecuador; el valor predeterminado es `0.055` USD por cada MXN.

La función consulta el catálogo protegido de la tienda para calcular el importe de cada producto; no necesitas crear manualmente un producto o precio de Stripe por cada presentación. Pide dirección de envío al finalizar y aplica envío gratis en México desde MX$2,000 o en Ecuador desde US$150. Para montos menores, cobra MX$200 por DHL en México y US$10 por Servientrega en Ecuador. Activa en Stripe la opción de enviar recibos de pagos exitosos por correo. La clave pública no se necesita para esta modalidad de Checkout alojado.

## Cambiar el número de WhatsApp

Abre `script.js` y cambia esta línea:

```js
const WHATSAPP_NUMBER = "523313016273";
```

Usa el formato internacional sin espacios ni signos. Ejemplo para México:

```js
const WHATSAPP_NUMBER = "521XXXXXXXXXX";
```

## Archivos principales

- `index.html`: contenido de la página.
- `producto.html`: página individual reutilizable para leer más de cada péptido.
- `styles.css`: diseño visual y versión móvil.
- `products-data.js`: información compartida de productos y áreas.
- `script.js`: catálogo, áreas de investigación, filtros y enlaces de pedido por WhatsApp.
- `producto.js`: contenido dinámico para las páginas individuales.
- `assets/logo-peptide-evolution-cropped.png`: logotipo optimizado para la web.
- `assets/peptide-evolution-pen.png`: imagen de presentación de pluma dosificadora.

## Publicación

Puedes subir todos estos archivos al hosting conectado a `www.peptidevolution.com`. La página no requiere base de datos ni instalación especial.

## Cambiar precios e imágenes

No hace falta crear cuentas ni usar una base de datos. Los productos y precios se editan en `products-data.js`. Para una imagen propia, agrega `presentationImage: "assets/tu-imagen.png"` al producto correspondiente.
