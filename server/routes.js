// Load modules

var scraper      = require('./controller/WebScraper/scraper.js');

// API Server Endpoints
exports.endpoints = [

    
    { method: 'POST', path: '/GetData', config: scraper.getdata}
   
];