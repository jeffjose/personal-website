import books from "./_books.js";

import { convert } from "../_utils.js";

const contents = JSON.stringify(
  books.map(post => {
    convert(post);
    return post;
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(contents);
}
