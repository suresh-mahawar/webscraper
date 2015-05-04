var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var url = require('url');
var sel=require('./commonJsonObj.js');
// var eval = require('eval');
var vm = require('vm');
var util = require('util');
var db=require('../../model/jSelector.js').jSelector;
exports.getdata = {
    

    handler: function(req, reply) {      
        console.log("Hi");
        //loading html of requested url.
        var url=req.payload.productpage;
        request({url:url,headers:{'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.125 Safari/533.4'
                }}, function (error, response, html) {
           
                    //'x-frame-options':'GOFORIT'
          if (!error && response.statusCode == 200) {
            
           
            var result=sel.Mapper(html,url);
            reply(result);
           
          }  

          
        })
        
    }    
};
exports.createMapping = {    

    handler: function(req, reply) {      

       db.saveMapping(req,function(err, result){
            if(!err){
                reply(result);
            }
            else
            {
                reply(Boom.forbidden("please provide valid properties"));
            }

       })      
        
    }    
};
