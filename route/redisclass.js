var redis = require("redis");
var client = redis.createClient(6379,'127.0.0.1'); //初始化Redis




client.on("error", function(error) {
    console.log(error);
});

//setRedis Class
//
exports.setRedis=function(key,value,sec,callback){
   client.set(key, value, function(err, response) {       
    if (!err) {
	    	console.log('set Redis '+key+'  =>  '+value+'  suss');
	    	callback('1');
    }else{
    	  callback('0');
    };
     
});
	
}
////
////
//getRedis key callback
exports.getRedis=function(key,callback){
	client.get(key,function(errGet,responseGet){
		if(!errGet){
		callback(responseGet);
	    }else{
		callback(errGet);
		}
	});
}


exports.llpush = function(key,value,callback){
	
	
	
	
}









