const employeeService = require('../controller/employee.controller');


const getAll = (req, res, next) => {
    employeeService.getAll()
        .then(eployes => res.json(eployes))
        .catch(err => next(err));
}

const getById = (req, res, next) => {
    employeeService.getById(req.params.id)
        .then(employee => employee ? res.json(employee) : res.sendStatus(404))
        .catch(err => next(err));
}



const create = (req, res, next) => {
    employeeService.create(req.body)
        .then(() => res.status(200).send())
        .catch(err => next(err));
}

const update = (req, res, next) => {
    employeeService.update(req.params.id, req.body)
        .then(() => res.status(200).send())
        .catch(err => next(err));
}

const remove = (req, res, next) => {
    employeeService.delete(req.params.id)
        .then(() => res.status(200).send())
        .catch(err => next(err));
}

module.exports = {
    getAll, getById, create, update, remove
}