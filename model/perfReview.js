const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String, required: true},
    nis: {type: String, required: true},

    response: String,
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    },
    responsedAt: Date,
    dateAssignment: Date
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('PerfReview', schema);