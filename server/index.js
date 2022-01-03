require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const {getDatabase, getPage, getBlocks} = require('./services/notion')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Example: http://localhost:3000/notion/database
app.get('/notion/database', async (req, res) => {
  const result = await getDatabase(process.env.NOTION_DATABASE)
  
  res.status(200).send(result)
})

// Example: http://localhost:3000/notion/page?pageId=4742cb3b-f845-4f12-b3cb-4edff2a4f517
app.get('/notion/page', async (req, res) => {
  const result = await getPage(req.query.pageId)
  res.status(200).send(result)
})

// Example: http://localhost:3000/notion/page/blocks?blockId=4742cb3b-f845-4f12-b3cb-4edff2a4f517
app.get('/notion/page/blocks', async (req, res) => {
  const result = await getBlocks(req.query.blockId)
  res.status(200).send(result)
})

app.listen(process.env.PORT || 3000)
