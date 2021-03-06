const express = require('express')
require('./db/mongoose')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send({
        message: 'Index'
    })
})

module.exports = app