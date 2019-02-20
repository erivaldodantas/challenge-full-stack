const app = require('express').Router()
const employee = require('./employee')

app.use('/employee', employee)

module.exports = app