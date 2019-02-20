const review = require('../controller/review.controller');


const getAll = (req, res, next) => {
    review.getAll()
        .then(reviews => res.json(reviews))
        .catch(err => next(err));
}

const getById = (req, res, next) => {
    review.getById(req.params.id)
        .then(review => review ? res.json(review) : res.sendStatus(404))
        .catch(err => next(err));
}

const getByEmployeeRevisor = (req, res, next) => {
    review.getByEmployeeRevisor(req.params.employee)
        .then(reviews => res.json(reviews))
        .catch(err => next(err))
}

const getPendingReviewEmployee = (req, res, next) => {
    review.getPendingReviewEmployee(req.params.employee)
        .then(reviews => res.json(reviews))
        .catch(err => next(err))
}

const create = (req, res, next) => {
    review.create(req.body)
        .then(() => res.status(200).send())
        .catch(err => next(err));
}

const update = (req, res, next) => {
    review.update(req.params.id, req.body)
        .then(() => res.status(200).send())
        .catch(err => next(err));
}

const remove = (req, res, next) => {
    review.delete(req.params.id)
        .then(() => res.status(200).send())
        .catch(err => next(err));
}

module.exports = {
    getAll, getById, getByEmployeeRevisor, create, update, remove, getPendingReviewEmployee
}