const fetch = require("node-fetch");
const yaml = require("js-yaml");

import { parse } from "../_utils.js";

const lookup = new Map();

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

      lookup.set(post.slug, JSON.stringify(post));

      return posts;
    });

    return posts
  } catch (error) {
    console.log(error);
  }
};


export async function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  const posts = await get_posts(
    "https://raw.githubusercontent.com/jeffjose/personal-website/rollup/blog/index.yaml"
  );

  if (lookup.has(slug)) {
    res.writeHead(200, {
      "Content-Type": "application/json"
    });

    res.end(lookup.get(slug));
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json"
    });

    res.end(
      JSON.stringify({
        message: `Not found`
      })
    );
  }
}
