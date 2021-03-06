const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');
const backendApp = new Koa();
// const frontendApp = new Koa();
const backendRouter = new Router();
// const frontendRouter = new Router();

const isProd = process.env.NODE_ENV === 'production'


// const serverBundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));
// const clientManifest = require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'));
// const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8');

// const renderer = createBundleRenderer(serverBundle, {
//   runInNewContext: false,
//   template: template,
//   clientManifest: clientManifest
// });
const templatePath = path.resolve(__dirname, '../dist/index.ssr.html')

let renderer;

if(isProd){
  const template = fs.readFileSync(templatePath, 'utf-8')
  const bundle = require('../dist/vue-ssr-server-bundle.json')
  // The client manifests are optional, but it allows the renderer
  // to automatically infer preload/prefetch links and directly add <script>
  // tags for any async chunks used during render, avoiding waterfall requests.
  const clientManifest = require('../dist/vue-ssr-client-manifest.json')
  renderer = createBundleRenderer(bundle, {
    template,
    clientManifest
  })
}else{
  readyPromise = require('../config/setup-dev-server')(
    backendApp,
    templatePath,
    (bundle, options) => {
      // console.log(bundle)
      renderer = createBundleRenderer(bundle, options)
    }
  )
}



function render(ctx, next) {
  let context = {
    url: ctx.url,
    title: 'Negri个人博客',
    keywords: '前端',
    description: 'Negri个人博客'
  };
  
  const ssrStream = renderer.renderToStream(context);
  ctx.status = 200;
  ctx.type = 'html';
  ctx.body = ssrStream;
  console.log('url', ctx.url);
  console.log(ctx.status);
}


// 后端Server
backendApp.use(serve(path.resolve(__dirname, '../dist')));

backendRouter.get('*', async (ctx, next) => {
  console.log(ctx)
  // if(ctx.status == 404) ctx.throw(404);
  // readyPromise.then(() => render(ctx, next))
  render(ctx, next)
});


backendApp
  .use(backendRouter.routes())
  .use(backendRouter.allowedMethods());

backendApp.listen(3000, () => {
  console.log(`server started at http://localhost:3000`)
});

// 前端Server
// frontendApp.use(serve(path.resolve(__dirname, '../dist')));

// frontendRouter.get('/index', (ctx, next) => {
//   let html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
//   if(ctx.status == 404) ctx.throw(404);
//   ctx.type = 'html';
//   ctx.status = 200;
//   ctx.body = html;
// });

// frontendApp
//   .use(frontendRouter.routes())
//   .use(frontendRouter.allowedMethods());

// frontendApp.listen(3001, () => {
//   console.log(`server started at http://localhost:3001`)
// });