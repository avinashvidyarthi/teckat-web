'use strict';
/**
 * @author Santosh Mahto
 * @description info routes. it contain example.com/info routes.
 * @listens MIT
 * @name index
 */

const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
const router = new Router({ prefix: '/info' });

// importing the helpers modules
const indexHelper = require('../helpers/routes/info');
const faqHelper = require('../helpers/routes/info/faq');

// preparing routing pages.
const INDEX = 'layouts/public/info/index.min';
const FAQ = 'layouts/public/info/faq.min';
const COOKIES = 'layouts/public/info/cookies.min';
const PRIVACY_POLICIES = 'layouts/public/info/privacy-policies.min';
const TERMS_OF_SERVICES = 'layouts/public/info/terms-of-services.min';
const CAREER = 'layouts/public/info/career.min';
const REFUND_POLICIES = 'layouts/public/info/refund-policies.min';

/* ----------------------Root routing---------------------------- */

// Home page i.e, info home
router.get('/', async (ctx) => {
  await indexHelper.init(ctx, INDEX);
});

// faq page
router.get('/faq', async (ctx) => {
  await faqHelper.init(ctx, FAQ);
});

// cookies page
router.get('/cookies', async (ctx) => {
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
    descriptions: 'a true solution.',
    keywords: 'cookies, teckat',
    heading: 'cookies',
    introduction: 'a true solution.',
    title: `Cookies | Info | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };

  // render the page
  await ctx.render(COOKIES, {
    page,
  });
});

// privacy policies page
router.get('/privacy-policies', async (ctx) => {
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
      'Teckat Technologies India Pvt Ltd ("Teckat"), primarily works, controls and manages the Services (as defined below).',
    keywords: 'privacy policies, teckat',
    heading: 'privacy policies',
    introduction:
      'Teckat Technologies India Pvt Ltd ("Teckat"), primarily works, controls and manages the Services (as defined below).',
    title: `Privacy Policies | Info | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };

  // render the page
  await ctx.render(PRIVACY_POLICIES, {
    page,
  });
});

// terms of services page
router.get('/terms-of-services', async (ctx) => {
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
    descriptions: 'a true solution.',
    keywords: 'terms of services, teckat',
    heading: 'terms of services',
    introduction: 'a true solution.',
    title: `Terms Of Services | Info | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };

  // render the page
  await ctx.render(TERMS_OF_SERVICES, {
    page,
  });
});

// career page
router.get('/career', async (ctx) => {
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
    descriptions: 'a true solution.',
    keywords: 'career, teckat',
    heading: 'career',
    introduction: 'a true solution.',
    title: `Career | Info | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };

  // render the page
  await ctx.render(CAREER, {
    page,
  });
});

// refund policies page
router.get('/refund-policies', async (ctx) => {
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
    descriptions: 'a true solution.',
    keywords: 'refund policies, teckat',
    heading: 'refund policies',
    introduction: 'a true solution.',
    title: `Refund Policies | Info | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  await ctx.render(REFUND_POLICIES, {
    page,
  });
});

// export router
module.exports = router;
