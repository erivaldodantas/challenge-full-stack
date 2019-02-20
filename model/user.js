const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const schema = new Schema({
    username: String,
    password: String,
    createAt: { type: Date, default: Date.now },
    type: { type: String, enum: ['admin', 'employee'], default: 'employee' },
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);