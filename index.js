require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')

const axios = require('axios')

const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json(), cors())
app.options('*', cors());

const request = require('request');

const customHeaderRequest = request.defaults({
  headers: {'User-Agent': 'fibblebonkers' }
})

app.get('/', async (req, res) => {
  try {
    request('http://www.google.com', function (error, response, body) {
      res.send(body); // Print the HTML for the Google homepage.
    });
  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => console.log(`Zoom Web SDK Sample Signature Node.js on port ${port}!`))
