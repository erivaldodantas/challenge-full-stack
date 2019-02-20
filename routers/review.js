const app = require('express').Router()
const service = require('../service/review.service')

app.get('/', service.getAll)
app.get('/:id', service.getById)
app.get('/:employee/from', service.getByEmployeeRevisor)
app.post('/', service.create)
app.put('/:id', service.update)
app.delete('/:id', service.remove)

module.exports = app