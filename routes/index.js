var express = require('express');
var router = express.Router();

// preaparing routing pages.
const INDEX = 'public/pages/index';
const EROOR404 = '404';

/* ============================================================
------------------------default data for website using middlevare----------------
===============================================================*/

// for domain
let url = "";
router.use(function(req, res, next) {
    // to get domain 
    let host = req.hostname;
    let protocol = req.protocol;
    url = protocol + "://" + host;
    //console.log(domain);
    next();
});


/* ===============================================================
------------------------Root routing------------------------------
=================================================================== */

// Home page
router.get('/', function(req, res) {
    res.render(INDEX, {
        domain: url,
        title: "Teckat | True Solutions"
    });
});

/* GET 404 page. */
router.get('/*', function(req, res) {
    res.status(404).render(EROOR404);
});

module.exports = router;