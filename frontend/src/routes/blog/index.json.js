import { parse, get_posts } from "../_utils.js";

export async function get(req, res) {
  const posts = await get_posts(
    "https://storage.googleapis.com/jeffjose-personal-website/index-blog.yaml",
    "./artifacts/index-blog-dev.yaml"
  );

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(posts));
}
