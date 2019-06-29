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
    descriptions: 'The power of imagination makes us indefinite.',
    keywords: 'services, teckat india, workshop by teckat',
    heading: 'services',
    introduction: 'The power of imagination makes us indefinite.',
    title: `Services | Teckat | ${ctx.serverDetails.tagLine}`,
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
