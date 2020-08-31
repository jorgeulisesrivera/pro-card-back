'use strict'

const connectDb = require('./db')

module.exports = {
  getUsers: async () => {
    const db = await connectDb()
    const select = new Promise((resolve, reject) => {
      db.query('select * from users', function (err, data) {
        if (err)reject(err)
        const dataArray = JSON.parse(JSON.stringify(data));
        resolve(dataArray)
      })
    })
    return select.then(data => data)
  },
  createUser: async ({input}) => {
    const defaults = {
        lastname:"",
        description:"",
        username:"",
        phone:""
    }
    let user = Object.assign(defaults,input);
    const db = await connectDb()
    const select = new Promise((resolve, reject) => {
      db.query(`insert into users (name,lastname,description,username,phone) 
      values('${user.name}','${user.lastname}','${user.description}','${user.username}','${user.phone}')`, function (err, data) {
        if (err)reject(err)
        user.id = data.insertId;
        resolve(user);
      })
    })
    return select.then(data => data)
  },
  updateUser: async ({input,id}) => {
    const db = await connectDb()
    const select = new Promise((resolve, reject) => {
      db.query(`update users set 
      name='${input.name}',
      lastname='${input.lastname}',
      description='${input.description}',
      username='${input.username}',
      phone='${input.phone}' where id=${id}`, function (err, data) {
        if (err)reject(err)
        input.id = id
        resolve(input);
      })
    })
    return select.then(data => data)
  }
}
