// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"404":{"path":"*","id":"404","parentId":"DocLayout"},"GlobalLayout":{"id":"GlobalLayout","path":"/","parentId":"dumi-context-layout","isLayout":true},"dumi-context-layout":{"id":"dumi-context-layout","path":"/","isLayout":true},"DocLayout":{"id":"DocLayout","path":"/","parentId":"GlobalLayout","isLayout":true},"introduce/development":{"path":"introduce/development","id":"introduce/development","parentId":"DocLayout"},"index/index":{"path":"","id":"index/index","parentId":"DocLayout"},"Demo/index":{"path":"demo","id":"Demo/index","parentId":"DocLayout"},"components/button/index.en-US":{"id":"components/button/index.en-US","path":"components/button_us","parentId":"DocLayout","meta":{"_atom_route":true}},"components/button/index.zh-CN":{"id":"components/button/index.zh-CN","path":"components/button","parentId":"DocLayout","meta":{"_atom_route":true}},"demo-render":{"id":"demo-render","path":"~demos/:id","parentId":"GlobalLayout"}} as const;
  return {
    routes,
    routeComponents: {
'404': React.lazy(() => import(/* webpackChunkName: "dumi__pages__404" */'/Users/kam/worker/github/sukee/.dumi/pages/404.ts')),
'GlobalLayout': React.lazy(() => import(/* webpackChunkName: "dumi__theme__layouts__GlobalLayout__index" */'/Users/kam/worker/github/sukee/.dumi/theme/layouts/GlobalLayout/index.ts')),
'dumi-context-layout': React.lazy(() => import(/* webpackChunkName: "dumi__tmp__dumi__theme__ContextWrapper" */'/Users/kam/worker/github/sukee/.dumi/tmp/dumi/theme/ContextWrapper')),
'DocLayout': React.lazy(() => import(/* webpackChunkName: "dumi__theme__layouts__DocLayout__index" */'/Users/kam/worker/github/sukee/.dumi/theme/layouts/DocLayout/index.tsx')),
'introduce/development': React.lazy(() => import(/* webpackChunkName: "dumi__pages__introduce__development" */'/Users/kam/worker/github/sukee/.dumi/pages/introduce/development.tsx')),
'index/index': React.lazy(() => import(/* webpackChunkName: "dumi__pages__index__index" */'/Users/kam/worker/github/sukee/.dumi/pages/index/index.tsx')),
'Demo/index': React.lazy(() => import(/* webpackChunkName: "dumi__pages__Demo__index" */'/Users/kam/worker/github/sukee/.dumi/pages/Demo/index.ts')),
'components/button/index.en-US': React.lazy(() => import(/* webpackChunkName: "components__button__index.en-US.md" */'/Users/kam/worker/github/sukee/components/button/index.en-US.md')),
'components/button/index.zh-CN': React.lazy(() => import(/* webpackChunkName: "components__button__index.zh-CN.md" */'/Users/kam/worker/github/sukee/components/button/index.zh-CN.md')),
'demo-render': React.lazy(() => import(/* webpackChunkName: "nm__dumi__dist__client__pages__Demo__index" */'/Users/kam/worker/github/sukee/node_modules/dumi/dist/client/pages/Demo/index.js')),
},
  };
}
