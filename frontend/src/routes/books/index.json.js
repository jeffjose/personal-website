const fetch = require("node-fetch");
const yaml = require("js-yaml");

import { parse, get_books } from "../_utils.js";

export async function get(req, res) {
  const books = await get_books(
    "https://storage.googleapis.com/jeffjose-personal-website/index-books.yaml",
    "./artifacts/index-books-dev.yaml"
  );

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(books));
}
