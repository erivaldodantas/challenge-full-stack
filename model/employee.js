const mongoose = require('mongoose')

module.exports = mongoose.model('Employee', {
    name: String,
    register: String,
    user: String,
    password: String
})