import {dateToString} from './dateToString';

export const getPageFields = (page) => {
  const cover = page.cover?.[page.cover?.type];
  const tags = page.properties.Tags?.[page.properties.Tags?.type];

  const fields = {
    title: page.properties.Name.title[0].plain_text,
    img: cover ? cover.url : null,
    date: page.last_edited_time,
    parsedDate: dateToString(page.last_edited_time),
    tags: tags.map(({name}) =>name),
  }

  return fields;
}