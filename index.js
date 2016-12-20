'use strict'

const express = require('express')
const compression = require('compression')
const config = require('./config')
const setupRouting = require('./src/routing')

const app = express()
app.use(express.static('views'))

app.set('view engine', 'pug')
setupRouting(app)

app.listen(config.port)
