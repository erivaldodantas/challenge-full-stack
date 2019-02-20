const db = require('../model/db');
const ReviewModel = db.PerfReview;

const getAll = async () => {
    return await ReviewModel.find().populate('from').populate('to').exec()
}

const getById = async (id) => {
    return await ReviewModel.findById(id).populate('from').populate('to').exec()
}

const getByEmployeeRevisor = async (employeeId) => {
    return await ReviewModel.find({ from: employeeId }).populate('from').populate('to').exec()
}

const getPendingReviewEmployee = async (employeeId) => {
    return await ReviewModel.find({ from: employeeId, status: 'pending' }).populate('from').populate('to').exec()
}

const create = async (data) => {

    const employee = new ReviewModel(data)

    await employee.save()
}

const update = async (id, data) => {
    const employee = await ReviewModel.findById(id);

    if (!employee) throw 'Employee not found';

    if (data.response) data.status = 'finish'

    Object.assign(employee, data);

    await user.save();
}

const remove = async (id) => {
    await User.findByIdAndRemove(id);
}

module.exports = {
    getAll,
    getById,
    getByEmployeeRevisor,
    getPendingReviewEmployee,
    create,
    update,
    remove
}