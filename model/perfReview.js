const mongoose = require('mongoose')

module.exports = mongoose.model('PerfReview', {
    response: String,
    reviewer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    responsedAt: Date,
    pending: Boolean,
    dateAssignment: Date

})