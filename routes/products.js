/**
 * @author Santosh Mahto
 * @description info routes. it contain example.com/products routes.
 * @listens MIT
 * @name index
 */

'use strict';

const Router = require('koa-router');
const router = new Router({ prefix: '/products' });

// preparing routing pages.
const INDEX = 'layouts/public/products/index.min';

/* ===============================================================
------------------------Root routing------------------------------
=================================================================== */

// Home page
router.get('/', async (ctx) => {
  // page details
  let page = {
    css: {
      isCss: false,
      urls: null,
    },
    js: {
      isJs: false,
      urls: null,
    },
    descriptions: 'our products details',
    keywords: 'products, teckat',
    heading: 'products',
    introduction: 'our products details.',
    title: `Products | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };

  // render the page
  await ctx.render(INDEX, {
    page,
  });
});

// export router
module.exports = router;
