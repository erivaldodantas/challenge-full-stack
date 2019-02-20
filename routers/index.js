const app = require('express').Router()
const employee = require('./employee')
const review = require('./review')

app.use('/employee', employee)
app.use('/review', review)

module.exports = app