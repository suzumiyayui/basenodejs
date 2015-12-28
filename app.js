var express =require('express');
var data =require('./route/data');
var url = require('url'); 


var app = new express();




app.get('/', function(req, res){
	
res.send('404');   

	
});


app.get("/setRedis", function (req, res) {
	

	data.setRedis(function(redata){

	res.send(redata);

	});

});

app.get("/Open", function (req, res) {
	
    params = url.parse(req.url,true).query;
	
	if(params['code']==null){
		res.end('miss params');
	 }else{
		data.getRedis(params['code'],function(redata){
	    res.send(redata);	
	    });
	 }
	
});


app.get("/db",function(req,res){

	data.getDb(function(array){
		res.send(array);
		res.end();
	});
	
	
});


app.get("/json",function(req,res){
	
	var obj = {"id":1,"logtime":"2015-11-30T03:21:55.000Z","type":"1008From1","etime":"2015-11-30T19:21:55.000Z"}; 

	
		var str = JSON.stringify(obj); 
		console.log(str); 

		var obj2 = JSON.parse(str); 
		console.log(obj2);
	
	
	
	res.end();
	
})





//
//app.get('/home',function(req,res){
//	
//var datas = data.index();
//
//res.send('Here is a requert home town ' + datas);
//  
//res.end();
//	
//})






//app.get('/test',function(req,res){
//	
//	res.writeHead(200, {
//        'Content-Type': 'text/xml;charset=ISO-8859-1',
//        'Transfer-Encoding': 'chunked',
//        'Vary': 'Accept-Encoding',
//        'Set-Cookie': 'test=1;'}); 
//	
//	
//	
////var datas = data.index();
////
////res.send('Here is a requert home town ' + datas);
////  
////res.end();
//	
//	
//	
//})





app.get("/test", function (request, response) {
		
	params = url.parse(request.url,true).query;
	
	
    var id = request.params.id;
    console.log(params);
    response.json(id);
    
    
    
});





//app.get('/data/getredis',function(req,res){
//
//var datas = data.getRedis(function(err,data){
//	
//	if(!err)res.send(data);
//	
//	res.end();
//  
//;});
//
//})


//app.get('/data/in',function(req,res){
//	
//	
////	process.stdin.resume();//恢复流
////	
////	process.stdin.on('data',function(data){
////
////	
////		console.log('data is'+data.toStiing);
////		
////	
////	})
//	
//	
//	
//	
//})
// 


//app.get('/about',function(req,res){
//	
//	  console.log('请求到来，解析数据');
//	
//	   var querystring = require('querystring');
//	   var util =require('util');
//	 
//	   var post = "";
//	   
//	   req.on('data',function(chunk){
//		   
//		   post+=chunk;  //chunk data 回调参数
//		   
//	   }) //逐一接受数据流
//	   req.on('end',function(){
//		   
//		   
//		   post = querystring.parse(post); //解析流文件
//		   //dosomething
//		   res.end(util.inspect(post)); //返回给前台
//		   
//	   })
//
//  
//
//});


//post 实例
//app.get('/post',function(req,res){
//
//   console.log('Post start');
//
//   var querystring = require('querystring');
//   var contents = querystring.stringify({
//	   name:'nick',
//	   age:'50',
//	   address:'HK'
//	   
//   });
//
//    var options = {
//    		
//    		host:'http://170.178.185.130:8860/about',
////    		path:'/about',
////    		port:8860,
//    		method:'POST',
//    		headers:{
//    			'Content-Type':'application/x-www-from-urlencoded',
//    			'Content-Length':contents.length
//    			
//    			
//    		}
//    	    
//    		
//    	 }
//    
//    
//      
//   
//    var http = require('http')
//    
//    var req=http.request(options,function(res){
//    	   
//         res.setEncoding('utf-8');
//    	     
//    	     res.on('data',function(data){
//    	    	 
//    	    	 console.log('后台返回数据'+data);
//    	    	 
//    	    	 
//    	     })
//    	     
//    	
//    })
//    
//    req.write(contents);
//  
//    res.end();
//});
//
//
//












var server = app.listen(8860, function() {

	
	console.log('Listening on port %d', server.address().port);
});