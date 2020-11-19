'use strict';
let mysql = require('mysql');
const devKeys= require("../config_dev.js");
const prodKeys = require("../config_prod.js");
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
let pool;
let sessionStore;

/*
if (process.env.NODE_ENV === "production") {
    pool = mysql.createPool({
    user: prodKeys.db.user,
    password: prodKeys.db.password,
    database: prodKeys.db.database,
    host: prodKeys.db.host
})

pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
          console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
          console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
          console.error('Database connection was refused.')
      }
  }

  if (connection) connection.release()
  return
})
sessionStore = new MySQLStore({}/* session store options */ //, pool);


//} else {
    pool = mysql.createPool({
        user: prodKeys.db.user,
        password: prodKeys.db.password,
        database: prodKeys.db.database,
        host: prodKeys.db.host
  });


/*
  pool = mysql.createPool({
    user: devKeys.db.user,
    password: devKeys.db.password,
    database: devKeys.db.database,
    host: devKeys.db.host
});
  */
  pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }

    if (connection) connection.release()
    return
  })
  sessionStore = new MySQLStore({}/* session store options */, pool);
//}

module.exports = sessionStore;