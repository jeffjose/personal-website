const fetch = require("node-fetch");
const yaml = require("js-yaml");

import { parse } from "../_utils.js";

const get_books = async url => {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const books = yaml.safeLoad(data);

    let contents = await Promise.all(
      books.map(async (book, index) => {
        return fetch(book.file).then(response => response.text());
      })
    );

    books.forEach((book, index) => {
      book.contents = contents[index];

      // modifies in place
      parse(book);

      return books;
    });

    return books;
  } catch (error) {
    console.log(error);
  }
};

export async function get(req, res) {
  const books = await get_books(
    "https://storage.googleapis.com/jeffjose-personal-website/index-books.yaml"
  );

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(books));
}
