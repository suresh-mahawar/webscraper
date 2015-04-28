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

        //loading html of requested url.

        request({url:req.payload.productpage,headers:{'User-Agent':'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.4 (KHTML, like Gecko) Chrome/5.0.375.125 Safari/533.4'
                }}, function (error, response, html) {
           
                    //'x-frame-options':'GOFORIT'
          if (!error && response.statusCode == 200) {
            var res=sel.extract(req.payload.productpage);   
            // var url_parts = url.parse(req.payload.productpage, true);
            // var query = url_parts.query;
            // var pid=false, qid=false, uq=false, pos=false;
            // //requesting for query string and identifying type of page.
            // //qid for amazon
            // //pid for flipkart
            // //uq for myntra
            // //pos for jabong
            // if(query.pid) pid=true;
            // else if(query.qid) qid=true;
            // else if(query.q&&query.p) uq=true;
            // else if(query.pos) pos=true;

            // var details={}; 
            // details.uq=uq;
            // details.qid=qid;            
            // details.pid=pid;
            // details.pos=pos
            // var res=sel.extract(details,html);   
            // //Cheerio loads jquery selector for input html          
            var $ = cheerio.load(html);  
            var result={};
            //loading selector the html and extracting output.
            result.img=eval(res.img);
            result.title=eval(res.title);
            if(res.rating) result.rating=eval(res.rating);
            result.price=eval(res.price);
            result.sellingprice=eval(res.sellingprice);
            if(res.specialprice) result.specialprice=eval(res.specialprice);
            result.discount=eval(res.discount); 
            result.url= req.payload.productpage;
            reply(result);
           
          }  

          
        })
        
    }
};