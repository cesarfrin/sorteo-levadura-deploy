if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,i,o)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const a={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return c;case"module":return a;default:return e(s)}}))).then((e=>{const s=o(...e);return c.default||(c.default=s),c}))})))}}define("./service-worker.js",["./workbox-4681948c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/css/app.681fdea4.css",revision:null},{url:"assets/images/favicon.ico",revision:"592a05b58c21a9fc4e99b9102015ff7e"},{url:"assets/images/og/og-image.png",revision:"4f893beb6251234531e57fb30f949ef7"},{url:"assets/images/png/auto.171b4ae.png",revision:null},{url:"assets/images/svg/logo-levadura-regalona.43182a5.svg",revision:null},{url:"assets/images/svg/sunburst.0838324.svg",revision:null},{url:"assets/images/touch-icons/apple-touch-icon-1024x1024.png",revision:"05916a0eb0cf39feab8fed81a1e340f6"},{url:"assets/images/touch-icons/apple-touch-icon-114x114.png",revision:"b24fb225f605f427f14219d50ca36675"},{url:"assets/images/touch-icons/apple-touch-icon-120x120.png",revision:"b980e6f6f5c5b3f2244909aafb49495e"},{url:"assets/images/touch-icons/apple-touch-icon-128x128.png",revision:"0a5d28d7bffd3f454147176eaa7faea7"},{url:"assets/images/touch-icons/apple-touch-icon-144x144.png",revision:"816f07e05ddd7cdabd549c2f1cab7496"},{url:"assets/images/touch-icons/apple-touch-icon-152x152.png",revision:"cb5fd8bcee173fd1c8aa0b8d3e90bcc3"},{url:"assets/images/touch-icons/apple-touch-icon-167x167.png",revision:"d0c02e4cee6c81097c2fb70b5cbbd53b"},{url:"assets/images/touch-icons/apple-touch-icon-168x168.png",revision:"e413557dacc006c7afdd6f286a03eb17"},{url:"assets/images/touch-icons/apple-touch-icon-180x180.png",revision:"de3a8ba5b20dfa2b243ea9bdee9ff344"},{url:"assets/images/touch-icons/apple-touch-icon-192x192.png",revision:"926f8475cc1a391204ccb542152dc618"},{url:"assets/images/touch-icons/apple-touch-icon-20x20.png",revision:"3ca3dcef3958e0304fb957f0901735b3"},{url:"assets/images/touch-icons/apple-touch-icon-29x29.png",revision:"0d29f19e60453a2b0ef5b8abd6d395b8"},{url:"assets/images/touch-icons/apple-touch-icon-384x384.png",revision:"c0b876a976bc86b26fd61d0b4633d9c0"},{url:"assets/images/touch-icons/apple-touch-icon-40x40.png",revision:"4b7ce519c20a8c15de6ed388823a8b3c"},{url:"assets/images/touch-icons/apple-touch-icon-48x48.png",revision:"5f3228faffdc7460e0fd69025f696507"},{url:"assets/images/touch-icons/apple-touch-icon-512x512.png",revision:"ebda59c92b381fcb539e39a8a4b250b9"},{url:"assets/images/touch-icons/apple-touch-icon-57x57.png",revision:"25e1fb022050d9b23cf8e9228a5afb63"},{url:"assets/images/touch-icons/apple-touch-icon-58x58.png",revision:"c80e031f325d8e65d5cba79b94ff78b8"},{url:"assets/images/touch-icons/apple-touch-icon-60x60.png",revision:"3e5abd5865c53fcc89a6138049c1408c"},{url:"assets/images/touch-icons/apple-touch-icon-72x72.png",revision:"8f0289b19ec3e88a5d59fff1163dcb5d"},{url:"assets/images/touch-icons/apple-touch-icon-76x76.png",revision:"496a37777a10054e9a7686cefefccec9"},{url:"assets/images/touch-icons/apple-touch-icon-80x80.png",revision:"a659fd61789f2e81f86dc4132c1e2765"},{url:"assets/images/touch-icons/apple-touch-icon-87x87.png",revision:"6b81283a9ba4779d1c33be7759c7c935"},{url:"assets/images/touch-icons/apple-touch-icon-96x96.png",revision:"0266667b78ff0437312c913ba79cd470"},{url:"assets/js/app.681fdea4.js",revision:null},{url:"assets/js/vendor.e288d51f.js",revision:null},{url:"index.html",revision:"ab89f1138819fa044ee385d1c0ce5ccc"},{url:"manifest.json",revision:"8a9b09de7230d653dcb00b63936a87be"}],{})}));