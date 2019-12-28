//import posts from "./_posts.js";

const fetch = require("node-fetch");
const yaml = require("js-yaml");

import { parse } from "../_utils.js";

const get_posts = async url => {
  try {
    const response = await fetch(url);
    const data = await response.text();
    const posts = yaml.safeLoad(data);

    let contents = await Promise.all(
      posts.map(async (post, index) => {
        return fetch(post.file).then(response => response.text());
      })
    );

    posts.forEach((post, index) => {
      post.contents = contents[index];

      // modifies in place
      parse(post);

      return posts;
    });

    return posts;
  } catch (error) {
    console.log(error);
  }
};

export async function get(req, res) {
  const posts = await get_posts(
    "https://raw.githubusercontent.com/jeffjose/personal-website/rollup/blog/index.yaml"
  );

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(posts));
}
