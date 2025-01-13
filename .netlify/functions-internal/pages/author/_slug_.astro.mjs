/* empty css                                     */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead, g as addAttribute, j as renderTransition, u as unescapeHTML } from '../../chunks/astro/server_Bx2opWBt.mjs';
import 'kleur/colors';
import { c as client, $ as $$Layout } from '../../chunks/Layout_DRrZcoP5.mjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { $ as $$Header } from '../../chunks/Header_uH6ghAPS.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let author;
  try {
    author = await client.getAuthor(slug);
  } catch (error) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": author.name }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<section class="px-2 sm:px-12 mb-8"${addAttribute(renderTransition($$result2, "x55ugi4h"), "data-astro-transition-scope")}> <h1 class="text-6xl"> ${author.name} </h1> <div class="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2 xl:gap-x-8 pt-8"> <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"> <img${addAttribute(author.avatar.url, "src")} class="h-full w-full object-cover object-center group-hover:opacity-75"${addAttribute(author.avatar.description, "alt")}> </div> <div> <article class="leading-loose text-slate-200 text-justify">${unescapeHTML(documentToHtmlString(author.bio.json))}</article> </div> </div> </section> ` })}`;
}, "/Users/haleysmith/crom/astro-contentful-starter/src/pages/author/[slug].astro", "self");

const $$file = "/Users/haleysmith/crom/astro-contentful-starter/src/pages/author/[slug].astro";
const $$url = "/author/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
