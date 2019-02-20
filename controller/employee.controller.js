const db = require('../model/db');
const EmployeeModel = db.Employee;

const getAll = async () => {
    return await EmployeeModel.find()
}

const getById = async (id) => {
   return await EmployeeModel.findById(id)
}

const create = async (data) => {

    const employee = new EmployeeModel(data)

    await employee.save()
}

const update = async (id, data) => {
    const employee = await EmployeeModel.findById(id);

    if (!employee) throw 'Employee not found';

    Object.assign(employee, data);

    await user.save();
}

const remove = async (id) => {
    await User.findByIdAndRemove(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
}