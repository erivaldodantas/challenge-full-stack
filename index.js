const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routers = require('./routers')
const app = express()
require('./config/mongo')

app.use(bodyParser.json())
app.use(cors())

app.use('/api', routers)

app.use(require('./controller/helpers').errorHandle)

const port = process.env.PORT || 3030
app.listen(port, () => console.log(`\API Runing in ${port}`))