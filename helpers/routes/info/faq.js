'use strict';

const fs = require('fs');
const path = require('path');

let lib = {};

lib.init = async (ctx, view) => {
  // collect the data
  // let serverDetails = ctx.serverDetails;
  // console.log(`console logs: lib.init -> serverDetails`, serverDetails);

  // loading the data
  let faqDetails = fs.readFileSync(
    path.join(__dirname, '../../../resources', 'faq.json'),
    'utf-8'
  );

  // parse data as a JSON
  faqDetails = JSON.parse(faqDetails);

  // page details
  let page = {
    css: {
      isCss: true,
      urls: ['css/faq.min.css'],
    },
    js: {
      isJs: false,
      urls: null,
    },
    descriptions: 'a true solution.',
    keywords: 'info, teckat',
    heading: 'frequently asked questions',
    introduction: 'a true solution.',
    title: `FAQ | Info | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
    faqDetails,
  };
  // console.log(`console logs: lib.init -> page`, page);

  await ctx.render(view, {
    page,
  });
};

module.exports = lib;
