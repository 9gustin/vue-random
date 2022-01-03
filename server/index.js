const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/test', (req, res) => {
  res.status(200).send({
    a: 'a'
  })
})

app.listen(process.env.PORT || 3000)

