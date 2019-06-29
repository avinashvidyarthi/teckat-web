/**
 * @author Santosh Mahto
 * @description services routes. it contain example.com/services routes.
 * @listens MIT
 * @name index
 */

'use strict';

const Router = require('koa-router');
const router = new Router({ prefix: '/services' });

// importing router module
let developments = require('./developments');
let workshops = require('./workshops');

// importing the helpers modules
const indexHelper = require('../../helpers/routes/services');

// preparing routing pages.
const INDEX = 'layouts/public/services/index.min';
const ELECTRICALS = 'layouts/public/services/electricals/index.min';
const INTERNSHIPS = 'layouts/public/services/internships/index.min';
const TRAININGS = 'layouts/public/services/trainings/index.min';

/* ===============================================================
------------------------Root routing------------------------------
=================================================================== */

// Home page
router.get('/', async (ctx) => {
  await indexHelper.init(ctx, INDEX);
});

// electricals page
router.get('/electricals', async (ctx) => {
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
    descriptions:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    keywords: 'electricals, teckat, workshop by teckat',
    heading: 'electricals',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Electricals | Services | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);

  await ctx.render(ELECTRICALS, {
    page,
  });
});

// internships page
router.get('/internships', async (ctx) => {
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
    descriptions:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    keywords: 'internships, teckat, workshop by teckat',
    heading: 'internships',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Internships | Services | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);

  await ctx.render(INTERNSHIPS, {
    page,
  });
});

// trainings page
router.get('/trainings', async (ctx) => {
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
    descriptions:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    keywords: 'trainings, teckat, workshop by teckat',
    heading: 'trainings',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Trainings | Services | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);

  await ctx.render(TRAININGS, {
    page,
  });
});

// development page
router.use(developments.routes()).use(developments.allowedMethods());

// workshop page
router.use(workshops.routes()).use(workshops.allowedMethods());

// export router
module.exports = router;
