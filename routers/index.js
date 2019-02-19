const app = require('express')
const employee = require('./employee')


app.use('/employee', employee)

module.exports = app