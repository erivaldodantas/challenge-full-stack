// const mongoose = require('mongoose');
// mongoose.connect(process.env.URL_DB_SIZEBAY, { useCreateIndex: true, useNewUrlParser: true });
// mongoose.Promise = global.Promise;

module.exports = {
    Employee: require('./employee'),
    PerfReview: require('./perfReview'),
    User: require('./user'),
};