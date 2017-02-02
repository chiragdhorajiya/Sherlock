var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var fs=require('fs');
var name = require('./login');

router.post('/',function(request, respond) {
  console.log('inside round1');
  console.log(names);
//    respond.json(loginUserNameFinal);

});
module.exports = router;