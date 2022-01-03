const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_SECRET,
})

const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId
  })
  return response.results
}

const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

const getBlocks = async (blockId) => {
  const response = await notion.blocks.children.list({
    block_id: blockId
  })
  return response.results
}

module.exports = {
  getDatabase,
  getPage,
  getBlocks
}
