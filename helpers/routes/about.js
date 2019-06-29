'use strict';
const fs = require('fs');
const path = require('path');
let lib = {};

lib.init = async (ctx, view) => {
  // collect the data
  // let serverDetails = ctx.serverDetails;
  // console.log(`console logs: lib.init -> serverDetails`, serverDetails);

  // loading the about us
  let aboutDetails = fs.readFileSync(
    path.join(__dirname, '../../resources', 'about-details.json'),
    'utf-8'
  );
  // parse data as a json
  aboutDetails = JSON.parse(aboutDetails);

  // page details
  let page = {
    css: {
      isCss: true,
      urls: ['css/about.min.css'],
    },
    js: {
      isJs: false,
      urls: null,
    },
    descriptions:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    keywords: 'about, teckat, workshop by teckat',
    heading: 'About Us',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `About | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
    aboutUs: aboutDetails.aboutUs,
    knowMore: aboutDetails.knowMore,
  };
  // console.log(`console logs: lib.init -> page`, page);

  await ctx.render(view, {
    page,
  });
};

module.exports = lib;
