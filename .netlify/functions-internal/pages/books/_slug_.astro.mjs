/* empty css                                     */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, u as unescapeHTML, g as addAttribute, k as renderScript, l as defineScriptVars, j as renderTransition, m as maybeRenderHead } from '../../chunks/astro/server_Bx2opWBt.mjs';
import 'kleur/colors';
import { c as client, $ as $$Layout } from '../../chunks/Layout_DRrZcoP5.mjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { $ as $$Header } from '../../chunks/Header_uH6ghAPS.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let book;
  try {
    book = await client.getSingleBook(slug);
  } catch (error) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": book.title }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<section class="px-2 sm:px-12 mb-8"', "> <script>(function(){", "\n      window.contentfulEntry = book;\n    })();<\/script> ", ' </section> <h1 class="text-6xl" id="title" data-contentful-field-id="title"', "> ", " </h1> <h2>\nwritten by <a", ' data-contentful-field-id="name"', ">", '</a> </h2> <div class="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8 pt-8"> <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"> <img', ' class="h-full w-full object-cover object-center group-hover:opacity-75" data-contentful-field-id="coverImage"', '> </div> <div> <article class="leading-loose text-slate-200 text-justify" id="description" data-contentful-field-id="description"', ">", "</article> </div> </div> "])), renderComponent($$result2, "Header", $$Header, {}), maybeRenderHead(), addAttribute(renderTransition($$result2, "nbmcvrz4"), "data-astro-transition-scope"), defineScriptVars({ book }), renderScript($$result2, "/Users/haleysmith/crom/astro-contentful-starter/src/pages/books/[slug].astro?astro&type=script&index=0&lang.ts"), addAttribute(slug, "data-contentful-entry-id"), book.title, addAttribute(`/author/${book.author.sys.id}`, "href"), addAttribute(book.author.sys.id, "data-contentful-entry-id"), book.author.name, addAttribute(book.coverImage.url, "src"), addAttribute(slug, "data-contentful-entry-id"), addAttribute(slug, "data-contentful-entry-id"), unescapeHTML(documentToHtmlString(book.description.json))) })}`;
}, "/Users/haleysmith/crom/astro-contentful-starter/src/pages/books/[slug].astro", "self");

const $$file = "/Users/haleysmith/crom/astro-contentful-starter/src/pages/books/[slug].astro";
const $$url = "/books/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
