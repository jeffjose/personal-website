const util = require("util");

const exec = util.promisify(require("child_process").exec);

async function get_commit() {
  const { stdout } = await exec(
    "git ls-remote --heads git://github.com/jeffjose/personal-website master"
  );

  return stdout;
}

export async function get(req, res) {
  const commit = await get_commit();
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify(commit));
}
