var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var fs=require('fs');


router.post('/',function(request, respond) {
  console.log('inside round1');
    respond.render('round1');

});
module.exports = router;
