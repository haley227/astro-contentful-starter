import '@contentful/live-preview';
import { e as createComponent, r as renderTemplate, g as addAttribute, k as renderScript, h as createAstro, i as renderComponent, n as renderHead, o as renderSlot } from './astro/server_Bx2opWBt.mjs';
import 'kleur/colors';
/* empty css                          */
import 'clsx';

const SPACE = "25coeos9sudq";
const TOKEN = "6jSMhc6s0SjOYyzrls8ITtzRRzI7XMlTJlMZE4GNGXA";
async function apiCall(query, variables) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`
    },
    body: JSON.stringify({ query, variables })
  };
  return await fetch(fetchUrl, options);
}
async function getAllBooks() {
  const query = `
    {
        bookReferencePageCollection {
          items {
            sys {
              id
            }
            title
            author {
              name
            }
            coverImage {
              url
            }
          }
        }
      }`;
  const response = await apiCall(query);
  const json = await response.json();
  return await json.data.bookReferencePageCollection.items;
}
async function getSingleBook(id) {
  const query = `
    query ($id: String!) {
        bookReferencePage(id: $id) {
          __typename
          sys {
            id
          }
          title
          coverImage {
            url
          }
          description {
            json
          }
          author {
            sys {
              id
            }
            name
          }
        }
      }
    `;
  const variables = {
    id
  };
  const response = await apiCall(query, variables);
  const json = await response.json();
  return await json.data.bookReferencePage;
}
async function getAuthor(id) {
  const query = `
    query ($id: String!) {
      bookAuthor(id:$id) {
        name
        avatar {
          url
          description
        }
        bio {
          json
        }
        linkedFrom {
          bookReferencePageCollection {
            items {
              title
            }
          }
        }
      }
    }
    `;
  const variables = {
    id
  };
  const response = await apiCall(query, variables);
  const json = await response.json();
  return await json.data.bookAuthor;
}
const client = { getAllBooks, getSingleBook, getAuthor };

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/haleysmith/crom/astro-contentful-starter/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/haleysmith/crom/astro-contentful-starter/node_modules/astro/components/ClientRouter.astro", undefined);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ClientRouter, {})}${renderHead()}</head> <body class="flex flex-col h-screen"> <main class="pt-12 mx-auto flex-grow"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/haleysmith/crom/astro-contentful-starter/src/layouts/Layout.astro", undefined);

export { $$Layout as $, client as c };
