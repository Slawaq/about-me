'use strict'

const express = require('express')
const config = require('./config')
const setupRouting = require('./src/routing')
const app = express()

app.set('view engine', 'pug')
setupRouting(app)

app.listen(config.port, () => console.log('SERVER STARTED!'))