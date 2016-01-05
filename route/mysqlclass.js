  var mysql = require('mysql');
  var DB_DATABASE = 'x';//数据库名
  var DB_TABLE = 'x';//表名

  
  function handleError (err) {
	  if (err) {
	    // 如果是连接断开，自动重新连接
	    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
	      connect();
	    } else {
	      console.error(err.stack || err);
	    }
	  }
	}
   
  function connect () {
	  client = mysql.createConnection({  
	      host : 'x',  
	      user : 'x',  
	      password : 'x'
	    	  
	  })
	  client.connect(handleError);
	  client.on('error', handleError);
	}
   
  connect();

  client.query('USE '+DB_DATABASE); 
  
  
  
  
  exports.db_all=function(sql,callback){  
	 client.query(sql,function(err, results, fields) {  
			    if (err) {  
			      throw err;  
			    } 
			    callback(results);
		        }  
			);
	 
	  }
  
  
  
  
  

  
  
  
  
  
  
  
  
