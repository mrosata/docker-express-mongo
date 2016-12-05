const express = require('express');
const router = express.Router();
const fs = require('fs');
const logger = require('../bin/logger').info;


/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('./package.json', 'UTF-8', (err, body) => {
    if (err) {
      res.redirect('/error', err);
    }
    res.render('index', {
      title: 'Docker Express Mongo App',
      info: JSON.parse(body)
    });
  
    // LOG THAT THE HOME PAGE WAS SENT!
    logger(`Served the homepage... It's like... internet yea!`);
    
  });
});

module.exports = router;
