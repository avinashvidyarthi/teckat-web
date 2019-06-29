'use strict';

let lib = {};

lib.init = async (ctx, view) => {
  // collect the data
  // let serverDetails = ctx.serverDetails;
  // console.log(`console logs: lib.init -> serverDetails`, serverDetails);

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
    descriptions: 'informations that you want to know about teckat.',
    keywords: 'info, teckat',
    heading: 'info',
    introduction: 'informations that you want to know about teckat.',
    title: `Info | Teckat | ${ctx.serverDetails.tagLine}`,
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
