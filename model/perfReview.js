const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
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
    assignmentDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('PerfReview', schema);