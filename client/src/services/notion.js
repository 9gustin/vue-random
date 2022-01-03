import { Client } from "@notionhq/client";

// Initializing a client
const notion = new Client({
  auth: process.env.VUE_APP_NOTION_SECRET,
})

export default notion;
