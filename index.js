const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routers = require('./routers')
require('./config/mongodb')
const app = express()


app.use(bodyParser.json())
app.use(cors())

app.use('/api', routers)

app.listen(process.env.PORT || 3030, () => console.log(`\API Runing in ${port}`))