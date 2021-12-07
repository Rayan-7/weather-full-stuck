const path = require('path')
const api = require('./routes/api.js')
const express = require('express')
const app = express()



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use('/', api)



const port = 3013
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})