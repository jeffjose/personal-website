import { get_commit } from "./_utils.js";

export async function get(req, res) {
  let commit = get_commit();

  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(commit));
}
