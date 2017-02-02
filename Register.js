var express = require('express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var fs=require('fs');
var Register=require('../model/Register.model.js');

router.post('/',function(request, respond) {
  var newUser = new Register();
console.log(request.body.Name);
    newUser.Name=request.body.Name;
    newUser.Password=request.body.Password;
    newUser.Email=request.body.Email;
    newUser.Number=request.body.Number;

    newUser.save(function(err,listuser){
        if(err){
          respond.send("error saving new user");
        }else{
          console.log(listuser);
           respond.redirect( "/" );
        }
      })
   //respond.redirect( "/" );
});



module.exports = router;
