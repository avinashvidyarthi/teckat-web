'use strict';
/**
 * @author Santosh Mahto
 * @description index routes. it contain roots routes.
 * @listens MIT
 * @name index
 * @since 2017
 */

const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const router = new Router();

// importing router module
const info = require('./info');
const services = require('./services');
const products = require('./products');

// importing the helpers modules
const indexHelper = require('../helpers/routes');
const aboutHelper = require('../helpers/routes/about');
const teamHelper = require('../helpers/routes/team');
const contactHelper = require('../helpers/routes/contact');

// preparing routing pages.
const INDEX = 'layouts/public/index.min';
const ABOUT = 'layouts/public/about.min';
const CONTACT = 'layouts/public/contact.min';
const TEAM = 'layouts/public/team.min';
const BASE64 = 'layouts/public/base64.min';
const ERROR_404 = '404.min';
const FALLBACK = 'fallback.min';

/* ===============================================================
------------------------Root routing------------------------------
=================================================================== */

// Home page
router.get('/', async (ctx) => {
  await indexHelper.init(ctx, INDEX);
});

// contact page
router.get('/contact', async (ctx) => {
  await contactHelper.init(ctx, CONTACT);
});

// about page
router.get('/about', async (ctx) => {
  await aboutHelper.init(ctx, ABOUT);
});

// team page
router.get('/team', async (ctx) => {
  await teamHelper.init(ctx, TEAM);
});

// fallback page
router.get('/fallback', async (ctx) => {
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
    descriptions: 'Your device is not connected with internet',
    keywords: 'offline, teckat',
    heading: 'Offline',
    introduction:
      'This Page Is Currently Not Available At Offline Mode. To Access This Page Make Sure Your Connected With Internet.',
    title: `Offline | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };

  // render the page
  await ctx.render(FALLBACK, {
    page,
  });
});

// services page
router.use(info.routes()).use(info.allowedMethods());

// services page
router.use(services.routes()).use(services.allowedMethods());

// products page
router.use(products.routes()).use(products.allowedMethods());

// GET 404 page.
router.get('/*', async (ctx) => {
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
    descriptions: 'File Not Found',
    keywords: '404, file not found, teckat',
    heading: 'File Not Found',
    introduction: 'File Not Found.',
    title: `File Not Found | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };

  // render the page
  await ctx.render(ERROR_404, {
    page,
  });
});

// export router
module.exports = router;
