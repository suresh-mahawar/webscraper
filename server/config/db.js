var Mongoose = require('mongoose'); 
var config = require('./config');

// Mongoose.connect('mongodb://' + config.database.host + '/' + config.database.db);  
Mongoose.connect('mongodb://Cronj:Cronj123@proximus.modulusmongo.net:27017/u3Nozyta');  
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));  
db.once('open', function callback() {  
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;  
exports.db = db;  
