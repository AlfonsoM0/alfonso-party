if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),d={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-ae5ace4c"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Disco_Ball.svg",revision:"7c9427db23df3a8dd6b293fd3a81b0a1"},{url:"/_next/static/CBiXhBdAlr63-qAedY4yG/_buildManifest.js",revision:"1746b61bc7dc1e3bfda9e7d87bdf7f83"},{url:"/_next/static/CBiXhBdAlr63-qAedY4yG/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/45-529f23d8749a2a52.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/641-351298999808d6ec.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/743-ae4a6c7683e0d5e4.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/750-e2b829f942554aaa.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/872-f3ccea1e51611615.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/899.e035e013fcede181.js",revision:"e035e013fcede181"},{url:"/_next/static/chunks/app/%5Bvip%5D/page-8fbc9ddd31fb3a7f.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/(adm)/e-menu/page-2892a78b67a6005a.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/(adm)/e-menu/resumen/page-238cac79577d3884.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/(adm)/e-vip/page-f1df6f8b7bdcb0eb.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/(adm)/layout-46dc7a9e33cc4796.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/(guest)/karaoke/page-5f1269387c1d17f6.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/(guest)/layout-be1afa9f17989610.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/(guest)/menu/page-93a60fc3260da54a.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/(guest)/menu/reservas/page-3678a14d30bcc840.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/(guest)/menu/reservas/resumen/page-eecc8aaafc8f4191.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/_not-found/page-e844f1b38ddcc80e.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/e/page-61e184bc5f491c20.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/layout-f1bb1712b1de88f0.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/app/page-cf3ecb377929fff7.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/c4e3e400-d64270847162c8be.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/framework-6e06c675866dc992.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/main-601d15320807b90a.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/main-app-86357e9890ec09e4.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/pages/_app-66e4d10fa998823f.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/pages/_error-9bb754751675fab7.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b0d786f8e50d69d9.js",revision:"CBiXhBdAlr63-qAedY4yG"},{url:"/_next/static/css/becbdc3ff400a5a9.css",revision:"becbdc3ff400a5a9"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/Disco_Ball.148ce09c.svg",revision:"7c9427db23df3a8dd6b293fd3a81b0a1"},{url:"/_next/static/media/alfonso-app-icon-512x512.eef2b943.png",revision:"5b82f1ff1a4ba7f1f0d501c60f4f2f4d"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/instagram.9c0dc60b.svg",revision:"9db96d08807f28ac6a82edd7c407a315"},{url:"/_next/static/media/karaoke_playlist_tutorial.378c2ccb.jpg",revision:"4a29b1f402562add0edf1c9521443db5"},{url:"/alfonso-app-icon-512x512.png",revision:"5b82f1ff1a4ba7f1f0d501c60f4f2f4d"},{url:"/app_screenshots.png",revision:"5992cbd3f2af9e71427d701719be7342"},{url:"/bg-retro.mp4",revision:"4e0dc79dd999426672cfddbf34338c6c"},{url:"/bg_discoball_pruple_music.mp4",revision:"2ff5c345ad73019536e112a813f3a3b0"},{url:"/bg_discoball_red_music.mp4",revision:"9945b55906cccd3d46ceb256d5736ed9"},{url:"/instagram.svg",revision:"9db96d08807f28ac6a82edd7c407a315"},{url:"/karaoke_playlist_tutorial.jpg",revision:"4a29b1f402562add0edf1c9521443db5"},{url:"/manifest.json",revision:"5dd0baddfcc6c64910013a65932c2e38"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));