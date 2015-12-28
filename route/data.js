

var EvenEmitter = require('events').EventEmitter;
var event = new EvenEmitter();   //注册事件模块


var redisclass = require('./redisclass');
var DB = require('./mysqlclass');




exports.setRedis = function(callback){
	
	redisclass.setRedis('nodejs','valuetest','10',function(stauts){
		
		callback(stauts);		
	});
	
};


exports.getRedis = function(code,callback){
	
	redisclass.getRedis(code,function(stauts){
 
		callback(stauts);
		
	});
	
};


exports.getDb = function(callback){
	
	var sql = "select * from net_log limit 10";
	
	DB.db_all(sql,function(array){
		
		callback(array);
		
	});
	
	
}




//GetRedis  Class

//exports.getRedis = function(callback){
//	
//var Redis_key = "nodejs";
//
//client.get(Redis_key,function(errGet,responseGet){
//
//	callback(errGet,responseGet);
//
//});
//
//}

















