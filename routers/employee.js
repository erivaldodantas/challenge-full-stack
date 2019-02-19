const app = require('express')
const controller = require('../controller/employee.controller')

app.get('/', controller.getAll)
app.get('/:id', controller.getById)
app.post('/', controller.create)
app.put('/:id', controller.update)
app.delete('/:id', controller.remove)

module.exports = app