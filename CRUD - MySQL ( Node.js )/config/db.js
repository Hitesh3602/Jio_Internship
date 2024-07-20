/*

const mysql = require('mysql2/promise')

const mySqlPool = mysql.createPool({

    host: 'localhost',
    user: 'root',
    password: 'VESIThitesh@300',
    database: 'jio_practice_student_db'
});

module.exports = mySqlPool;

*/

//****************************************************************************************
//****************************************************************************************
//****************************************************************************************

const mysql = require('mysql2');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost', // Your MySQL host
  user: 'root', // Your MySQL user
  password: 'VESIThitesh@300', // Your MySQL password
  database: 'jio_practice_student_db' // Your MySQL database name
});

module.exports = pool;
