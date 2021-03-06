const express = require('express')
require('./db/mongoose')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        message: 'Index'
    })
})

app.get('/test', (req, res) => {
    res.send({
        message: 'Test'
    })
})

module.exports = app