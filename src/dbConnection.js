'use strinct';

var mySql = require('mysql');

var connection = mySql.createConnection({
    host    :'localhost',
    user    :'root',
    password:'1234',
    database:'remisiones'
});

connection.connect((err)=>{
    if(!err)
        console.log('DB connection succeded');
    else
        console.log('DB connetion failed \n Error: ' + JSON.stringify(err, undefined, 2));
});

/*connection.query('SELECT * from seg_usuario', function(err, rows, fields) {
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
  });
  
  connection.end();
  */