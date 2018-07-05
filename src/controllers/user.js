'use strict'

const connection = require('../index');
//console.log(connection);

connection.connect.query('SELECT * from seg_usuario', function(err, rows, fields) {
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
  });
  
  connection.connect.end();