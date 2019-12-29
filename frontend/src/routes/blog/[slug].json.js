import { parse, get_posts} from "../_utils.js";

const lookup = new Map()

export async function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params;

  const posts = await get_posts(
    "https://raw.githubusercontent.com/jeffjose/personal-website/master/blog/index.yaml"
  );

  posts.forEach( (post) => {
    lookup.set(post.slug, JSON.stringify(post));
   }
  )

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
