const mongoose = require('mongoose')

module.exports = mongoose.model('UserAdmin', {
    user: String,
    password: String
})