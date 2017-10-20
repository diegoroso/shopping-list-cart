const express = require('express')
    , app = express()
    , port = process.env.PORT || 3000

const data = require('./products.json')

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.send(data)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
})
