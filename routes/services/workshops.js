/**
 * @author Santosh Mahto
 * @description workshop routes. it contain example.com/services/workshop/ routes.
 * @listens MIT
 * @name developments
 */

'use strict';

const Router = require('koa-router');
const router = new Router({ prefix: '/workshops' });

// importing the helper modules
const indexHelper = require('../../helpers/routes/services/workshops');

// preparing routing pages.
const INDEX = 'layouts/public/services/workshops/index.min';
const EMBEDDED = 'layouts/public/services/workshops/embedded.min';
const GRAPHICS_DESIGN = 'layouts/public/services/workshops/graphics-design.min';
const IOT = 'layouts/public/services/workshops/iot.min';
const WEBSITE = 'layouts/public/services/workshops/website.min';

/* --------------------Root routing----------------------------- */

// Home page
router.get('/', async (ctx) => {
  await indexHelper.init(ctx, INDEX);
});

// embedded page
router.get('/embedded', async (ctx) => {
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
    keywords: 'embedded, Workshops, teckat, workshop by teckat',
    heading: 'embedded',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Embedded | Workshops | Services | Teckat | ${
      ctx.serverDetails.tagLine
    }`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);
  await ctx.render(EMBEDDED, {
    page,
  });
});

// graphics-design page
router.get('/graphics-design', async (ctx) => {
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
    keywords: 'graphics-design, Workshops, teckat, workshop by teckat',
    heading: 'graphics design',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Graphics Design | Workshops | Services | Teckat | ${
      ctx.serverDetails.tagLine
    }`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);
  await ctx.render(GRAPHICS_DESIGN, {
    page,
  });
});

// iot page
router.get('/iot', async (ctx) => {
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
    keywords: 'iot, Workshops, teckat, workshop by teckat',
    heading: 'internet of things',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `IoT | Workshops | Services | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);
  await ctx.render(IOT, {
    page,
  });
});

// website page
router.get('/website', async (ctx) => {
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
    keywords: 'website, Workshops, teckat, workshop by teckat',
    heading: 'website',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Website | Workshops | Services | Teckat | ${
      ctx.serverDetails.tagLine
    }`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);
  await ctx.render(WEBSITE, {
    page,
  });
});

// export router
module.exports = router;
