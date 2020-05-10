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

app.get('/', async (req, res) => {
  try {
    const { data } = await axios.get('https://goyabu.com')
    res.send(data)
  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => console.log(`Zoom Web SDK Sample Signature Node.js on port ${port}!`))
