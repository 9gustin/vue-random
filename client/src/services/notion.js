const makeRequest = async url => {
  const response = await fetch(`${process.env.VUE_APP_API_URL}/notion/${url}`);
  const json = await response.json();

  return json;
} 

export const getDatabase = () => makeRequest('database')
export const getPage = (pageId) => makeRequest(`page?pageId=${pageId}`)
export const getBlocks = (blockId) => makeRequest(`page/blocks?blockId=${blockId}`)
