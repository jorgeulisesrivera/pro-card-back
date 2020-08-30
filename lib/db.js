'use strict'

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_NAME
} = process.env

var mysql = require('mysql')

let connection = null

async function connectDB () {
  if (connection !== null) return connection
  var con = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
  })
  try {
    await con.connect()
    connection = con
  } catch (err) {
    console.error('Could not connect to db.', err)
    process.exit(1)
  }
  return connection
}

module.exports = connectDB
