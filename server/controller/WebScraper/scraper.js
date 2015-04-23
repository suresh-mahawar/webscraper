var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var url = require('url');
var sel=require('./genericSelector.js');
// var eval = require('eval');
var vm = require('vm');
var util = require('util');
exports.getdata = {
    

    handler: function(req, reply) {        
        
        request({url:req.payload.dataurl,headers:{'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.125 Safari/533.4'}}, function (error, response, html) {
           

          if (!error && response.statusCode == 200) {
            var url_parts = url.parse(req.payload.dataurl, true);
            var query = url_parts.query;
            var pid=false; var sid=false;
            if(query.pid) pid=true;
            if(query.sid) sid=true;
            var details={};
            details.id="flipkart";
            details.sid=sid;
            details.pid=pid;
            var res=sel.extract(details,html);            
            var $ = cheerio.load(html);                         
            var result=[];
            // var script=new vm.Script(res,result);
            // vm.runInContext(res,result);
            var result={};
            result.img=eval(res.img);
            result.title=eval(res.title);
            if(res.rating) result.rating=eval(res.rating);
            result.price=eval(res.price);
            result.sellingprice=eval(res.sellingprice);
            if(res.specialprice) result.specialprice=eval(res.specialprice);
            result.discount=eval(res.discount);  
            console.log("==result==",result);
           
          }          
          
        })
        
    }
};