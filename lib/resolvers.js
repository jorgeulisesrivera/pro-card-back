'use strict'

const connectDb = require('./db')

module.exports = {
  getUsers: async () => {
    const db = await connectDb()
    const select = new Promise((resolve, reject) => {
      db.query('select * from users', function (err, data) {
        if (err)reject(err)
        resolve(JSON.parse(JSON.stringify(data)))
      })
    })
    return select.then(data => data)
  },
  getUser: (root, args) => {
    return {
      name: 'nnn'
    }
  }
}
