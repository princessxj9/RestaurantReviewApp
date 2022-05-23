const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('new app tings')
})

app.listen(3000)