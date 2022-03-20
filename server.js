const express = require('express')
const app = express()

const pageRouter = require('./app/routes/people.js')

app.use(express.json())

app.use('', pageRouter)

app.listen(3000)