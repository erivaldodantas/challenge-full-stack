const app = require('express').Router()
const service = require('../service/employee.service')

app.get('/', service.getAll)
app.get('/:id', service.getById)
app.post('/', service.create)
app.put('/:id', service.update)
app.delete('/:id', service.remove)

module.exports = app