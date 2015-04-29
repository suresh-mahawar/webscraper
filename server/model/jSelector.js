var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    autoIncrement = require('mongoose-auto-increment'),
    db = require('../config/db').db;



/**
 * @module  Jquery Selector 
 */

var jSelector = new Schema({

    domainName:{
    	type:String,
    	required: true
    },
    domainMapper:[
    {
    	property:{type:String,   	required: true},
    	selector:{type:String,   	required: true},
    	attr:String,
    	text:String,
    	parentProductConatiner:String
    }]
	
});


jSelector.statics.saveMapping = function(requestData, callback) {
    var selector = new this(requestData);
    selector.save(callback);
};


jSelector.statics.findMappingByDomainName = function(domain, callback) {
    this.findOne({
        domainName: domain
    }, callback);
};

var selector = mongoose.model('selector', jSelector);

/** export schema */
module.exports = {
    jSelector: selector
};