export const getPageFields = (page) => {
  const fields = {
    title: page.properties.Name.title[0].plain_text
  }

  console.log(page);

  return fields;
}