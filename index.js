require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')

const request = require('request');

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json(), cors())
app.options('*', cors());

app.get('/', (req, res) => {

  request('https://www.goyabu.com', function (error, response, body) {
    res.send(body)
  });
})

app.listen(port, () => console.log(`Zoom Web SDK Sample Signature Node.js on port ${port}!`))
