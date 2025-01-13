import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Cu4DvlwR.mjs';
import { manifest } from './manifest_DAfcJ5QR.mjs';
import { createExports } from '@astrojs/netlify/netlify-functions.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/author/_slug_.astro.mjs');
const _page2 = () => import('./pages/books/_slug_.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/author/[slug].astro", _page1],
    ["src/pages/books/[slug].astro", _page2],
    ["src/pages/index.astro", _page3]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, pageMap };
