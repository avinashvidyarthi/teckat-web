'use strict';

let lib = {};

lib.init = async (ctx, view) => {
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
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings.',
    keywords: 'developments, services, teckat india, workshop by teckat',
    heading: 'developments',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings.',
    title: `Developments | Services | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
  };
  // console.log(`console logs: lib.init -> page`, page);

  await ctx.render(view, {
    page,
  });
};

module.exports = lib;
