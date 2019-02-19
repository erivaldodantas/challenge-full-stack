const mongoose = require('mongoose')
require('./models/registerSchemas')

mongoose.connect(process.env.URL_DB_SIZEBAY)