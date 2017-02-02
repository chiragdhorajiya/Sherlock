var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var fs=require('fs');
var Register=require('../model/Register.model.js');
var loginUserNameFinal;

router.post('/',function(request, respond) {
  console.log('inside login');
    var loginUserName=request.body.Username;
    var loginpwd=request.body.LoginPassword;

    Register.findOne({Name:loginUserName, Password:loginpwd},function(err,user){
      if(err){
        console.log(err);
        return respond.status(500).send();
      }
      if(!user){
        return respond.render('UserNotFound');
      }
      if(user){
        loginUserNameFinal=loginUserName;
        console.log('inside user');
        console.log(loginUserName);
        return respond.render('welcome');
      }
    });
});

exports.names = loginUserNameFinal;
module.exports = router;
