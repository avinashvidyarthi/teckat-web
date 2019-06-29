'use strict';
/**
 * @author Santosh Mahto
 * @description development routes. it contain example.com/services/developments/ routes.
 * @listens MIT
 * @name developments
 */

const Router = require('koa-router');
const router = new Router({ prefix: '/developments' });

// importing helper modules
const indexHelper = require('../../helpers/routes/services/developments');

// preparing routing pages.
const INDEX = 'layouts/public/services/developments/index.min';
const ANDROID = 'layouts/public/services/developments/android.min';
const DESKTOP = 'layouts/public/services/developments/desktop.min';
const GRAPHICS_DESIGN =
  'layouts/public/services/developments/graphics-design.min';
const IOS = 'layouts/public/services/developments/ios.min';
const IOT = 'layouts/public/services/developments/iot.min';
const WEBSITE = 'layouts/public/services/developments/website.min';

/* ---------------------Root routing---------------------------- */

// Home page
router.get('/', async (ctx) => {
  await indexHelper.init(ctx, INDEX);
});

// android page
router.get('/android', async (ctx) => {
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
    keywords: 'android, developments, teckat, workshop by teckat',
    heading: 'android',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Android | Developments | Services | Teckat | ${
      ctx.serverDetails.tagLine
    }`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);
  await ctx.render(ANDROID, {
    page,
  });
});

// desktop page
router.get('/desktop', async (ctx) => {
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
    keywords: 'desktop, developments, teckat, workshop by teckat',
    heading: 'desktop',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Desktop | Developments | Services | Teckat | ${
      ctx.serverDetails.tagLine
    }`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);
  await ctx.render(DESKTOP, {
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
    keywords: 'graphics design, developments, teckat, workshop by teckat',
    heading: 'graphics design',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Graphics Design | Developments | Services | Teckat | ${
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

// ios page
router.get('/ios', async (ctx) => {
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
    keywords: 'ios, developments, teckat, workshop by teckat',
    heading: 'ios',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `iOS | Developments | Services | Teckat | ${
      ctx.serverDetails.tagLine
    }`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);
  await ctx.render(IOS, {
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
    keywords: 'iot, developments, teckat, workshop by teckat',
    heading: 'internet of things',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `IoT | Developments | Services | Teckat | ${
      ctx.serverDetails.tagLine
    }`,
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
    keywords: 'website, developments, teckat, workshop by teckat',
    heading: 'website',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Website | Developments | Services | Teckat | ${
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
