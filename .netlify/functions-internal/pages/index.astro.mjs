/* empty css                                  */
import { e as createComponent, r as renderTemplate, i as renderComponent, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../chunks/astro/server_Bx2opWBt.mjs';
import 'kleur/colors';
import { c as client, $ as $$Layout } from '../chunks/Layout_DRrZcoP5.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const books = await client.getAllBooks();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Astrobrary" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<h1 class="text-6xl sm:text-8xl text-center">
Astrobrary <span aria-label="Rocket Emoji">🚀</span> </h1> <h2 class="text-base text-center text-stone-400">
Collection of Astrology Science Fiction
</h2> <section class="container mx-auto mt-4"> <ul class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> ${books.map((book) => renderTemplate`<li class="mt-4 "> <a${addAttribute(`books/${book.sys.id}`, "href")} class="group"> <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"> <img${addAttribute(book.coverImage.url, "src")} class="h-full w-full object-cover object-center group-hover:opacity-75"> </div> <h3 class="mt-4 text-lg text-white text-center">${book.title}</h3> </a> </li>`)} </ul> </section>  ` })}`;
}, "/Users/haleysmith/crom/astro-contentful-starter/src/pages/index.astro", undefined);

const $$file = "/Users/haleysmith/crom/astro-contentful-starter/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
