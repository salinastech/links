import { A as AstroError, I as InvalidComponentArgs, r as renderTemplate, a as renderSlot, m as maybeRenderHead, b as addAttribute, c as renderComponent } from './prerender_CIqhdn_s.mjs';
import 'piccolore';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template([`<html lang="es">import '../styles/global.css'<link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
interface Props {
  title: string;
  description: string;
}
const { title, description } = Astro.props;
<meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"> <title>`, "\n    \n    \n    \n    \n\n", '<body>\n    <div id="loader" class="loader-container">\n        <div class="loader-content">\n            <img src="https://i.ibb.co/Jwm14fqF/icono-512x512.png" alt="Logo" class="loader-logo">\n            <div class="loader-bar"></div>\n        </div>\n    </div>\n\n    ', "\n\n    <script>\n        window.addEventListener('load', () => {\n            const loader = document.getElementById('loader');\n\n            setTimeout(() => {\n                if(loader) loader.classList.add('loader-hidden');\n            }, 1000); \n        });\n    <\/script>\n</body>\n</title></html>"])), title, maybeRenderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/LUIS/Downloads/links/src/layouts/Layout.astro", void 0);

const $$LinkCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$LinkCard;
  const { name, url, icon, className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")}${addAttribute(["social-link", className], "class:list")} target="_blank" rel="noopener noreferrer" data-astro-cid-thpmvig2> <span class="text" data-astro-cid-thpmvig2>${name}</span> <span class="icon" data-astro-cid-thpmvig2> <i${addAttribute(icon, "class")} aria-hidden="true" data-astro-cid-thpmvig2></i> </span> </a>`;
}, "C:/Users/LUIS/Downloads/links/src/components/LinkCard.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const PRODUCTS = [
    {
      id: 1,
      name: "Mikhuna SaaS",
      url: "https://mikhunasaas.salinastech.com/",
      icon: "fas fa-utensils",
      description: "Gestión inteligente para restaurantes."
    },
    {
      id: 2,
      name: "Sistema STPOS",
      url: "https://stpos.salinastech.com/",
      icon: "fas fa-cash-register",
      description: "Punto de venta ágil y seguro."
    }
  ];
  const SOCIAL_LINKS = [
    { id: 3, name: "Telegram", url: "#", icon: "fab fa-telegram-plane", variant: "link-telegram" },
    { id: 4, name: "Linkedin", url: "https://www.linkedin.com/in/salinastechbolivia/", icon: "fab fa-linkedin", variant: "link-linkedin" },
    { id: 5, name: "Facebook", url: "https://www.facebook.com/@salinastechbolivia", icon: "fab fa-facebook-f", variant: "link-facebook" },
    { id: 6, name: "Instagram", url: "https://www.instagram.com/salinastechbolivia", icon: "fab fa-instagram", variant: "link-instagram" },
    { id: 7, name: "YouTube", url: "https://www.youtube.com/@salinasacademybolivia", icon: "fab fa-youtube", variant: "link-youtube" },
    { id: 8, name: "TikTok", url: "https://www.tiktok.com/@salinastech", icon: "fab fa-tiktok", variant: "link-tiktok" }
  ];
  const COMPANY_INFO = {
    name: "Salinas Tech",
    handle: "@salinastech",
    tagline: "Soluciones Tecnológicas de Alto Impacto",
    whatsapp: "https://wa.me/59164846140"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${COMPANY_INFO.name} | Redes Sociales`, "description": "Enlaces oficiales de Salinas Tech" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="background-container"></div> <main class="card-container"> <article class="profile-card"> <header class="profile-header"> <img src="https://i.ibb.co/Jwm14fqF/icono-512x512.png" alt="Logo" class="profile-image" loading="eager"> </header> <section class="profile-content"> <h1 class="name"> ${COMPANY_INFO.name} <svg class="verified-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="white"></circle><path d="M7 12L10.323 15.399L17 8.5" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg> </h1> <p class="followers">${COMPANY_INFO.handle}</p> <p class="tagline">${COMPANY_INFO.tagline}</p> <nav class="main-buttons"> <a href="https://salinastech.com/contratar.html" class="button button-vip">Contratos</a> <a href="https://salinastech.com/" class="button button-of">Sitio Web</a> </nav> <!-- SECCIÓN DE PRODUCTOS DESTACADOS --> <h2 class="section-title">Nuestros Productos</h2> <div class="products-grid"> ${PRODUCTS.map((prod) => renderTemplate`<a${addAttribute(prod.url, "href")} class="product-card"> <i${addAttribute(prod.icon, "class")}></i> <h3>${prod.name}</h3> <p>${prod.description}</p> </a>`)} </div> <!-- SECCIÓN DE REDES SOCIALES --> <h2 class="section-title">Redes Oficiales</h2> <nav class="social-links"> ${SOCIAL_LINKS.map(({ name, url, icon, variant }) => renderTemplate`${renderComponent($$result2, "LinkCard", $$LinkCard, { "name": name, "url": url, "icon": icon, "className": variant })}`)} </nav> </section> <footer class="shouts-section"> <div class="shouts-container"> <p class="no-shouts">Anuncios</p> <p class="shouts-info">No hay anuncios recientes</p> <div class="shout-icons"> <a${addAttribute(COMPANY_INFO.whatsapp, "href")} aria-label="Contactar por WhatsApp" class="whatsapp-btn"> <i class="fab fa-whatsapp"></i> <span>Contactar Soporte</span> </a> </div> </div> </footer> </article> </main> ` })}`;
}, "C:/Users/LUIS/Downloads/links/src/pages/index.astro", void 0);

const $$file = "C:/Users/LUIS/Downloads/links/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
