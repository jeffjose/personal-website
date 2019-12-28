const fetch = require("node-fetch");
const yaml = require("js-yaml");

import { convert } from "./_utils.js";

export const get_posts = async function(url) {
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
      convert(post);
    });
  } catch (error) {
    console.log(error);
  }
};
