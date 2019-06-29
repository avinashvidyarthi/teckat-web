'use strict';
const fs = require('fs');
const path = require('path');
let lib = {};

lib.init = async (ctx, view) => {
  // collect the data
  // let serverDetails = ctx.serverDetails;
  // console.log(`console logs: lib.init -> serverDetails`, serverDetails);

  // loading the team Sliders
  let teamSliders = fs.readFileSync(
    path.join(__dirname, '../../resources', 'team-sliders.json'),
    'utf-8'
  );
  // parse data as a json
  teamSliders = JSON.parse(teamSliders);

  // loading the team Members
  let teamMembers = fs.readFileSync(
    path.join(__dirname, '../../resources', 'team-members.json'),
    'utf-8'
  );
  // parse to json
  teamMembers = JSON.parse(teamMembers);

  // page details
  let page = {
    css: {
      isCss: true,
      urls: [
        'css/aos/aos.min.css',
        'css/owlcarousel/owl.carousel.min.css',
        'css/owlcarousel/owl.theme.default.min.css',
      ],
    },
    js: {
      isJs: true,
      urls: [
        'js/aos/aos.min.js',
        'js/owlcarousel/owl.carousel.min.js',
        'js/team.min.js',
      ],
    },
    descriptions: 'meet to our team',
    keywords: '404, file not found, teckat',
    heading: 'our team',
    introduction: 'meet to our team',
    title: `Team | Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
    teamMembers: teamMembers,
    teamSliders: teamSliders,
  };
  // console.log(`console logs: lib.init -> page`, page);

  await ctx.render(view, {
    page,
  });
};

module.exports = lib;
