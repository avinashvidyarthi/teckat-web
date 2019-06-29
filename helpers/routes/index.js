'use strict';
const fs = require('fs');
const path = require('path');
let lib = {};

lib.init = async (ctx, view) => {
  // collect the data
  // let serverDetails = ctx.serverDetails;
  // console.log(`console logs: lib.init -> serverDetails`, serverDetails);

  // loading the services
  let serviceDetails = fs.readFileSync(
    path.join(__dirname, '../../resources', 'services.json'),
    'utf-8'
  );
  // parse to json
  serviceDetails = JSON.parse(serviceDetails);

  // loading the showcase
  let showcaseDetails = fs.readFileSync(
    path.join(__dirname, '../../resources', 'showcases.json'),
    'utf-8'
  );
  // parse to json
  showcaseDetails = JSON.parse(showcaseDetails);

  // loading the welcome sliders
  let welcomeSliders = fs.readFileSync(
    path.join(__dirname, '../../resources', 'welcome-sliders.json'),
    'utf-8'
  );
  // parse to json
  welcomeSliders = JSON.parse(welcomeSliders);

  // loading the feedback Details
  let feedbackDetails = fs.readFileSync(
    path.join(__dirname, '../../resources', 'feedback-details.json'),
    'utf-8'
  );
  // parse to json
  feedbackDetails = JSON.parse(feedbackDetails);

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
        'css/index.min.css',
      ],
    },
    js: {
      isJs: true,
      urls: [
        'js/aos/aos.min.js',
        'js/owlcarousel/owl.carousel.min.js',
        'js/index.min.js',
      ],
    },
    descriptions:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    keywords: 'teckat, teckat india, workshop by teckat',
    heading: 'Home',
    introduction:
      'Our Uniqueness, Our Individuality, and Our Life Experience molds us into fascinating beings',
    title: `Teckat | ${ctx.serverDetails.tagLine}`,
    ogImageUrl: `${ctx.serverDetails.domain}/images/og/default.webp`,
    domain: ctx.serverDetails.domain,
    tagLine: ctx.serverDetails.tagLine,
    welcomeSliders: welcomeSliders,
    serviceDetails: serviceDetails,
    feedbackDetails: feedbackDetails,
    showcaseDetails: showcaseDetails,
    teamMembers: teamMembers,
  };
  // console.log(`console logs: lib.init -> page`, page);

  await ctx.render(view, {
    page,
  });
};

module.exports = lib;
