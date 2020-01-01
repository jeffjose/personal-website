const fetch = require("node-fetch");
const yaml = require("js-yaml");

const readingTime = require("reading-time");
const asciidoctor = require("asciidoctor")();
const highlightJsExt = require("asciidoctor-highlight.js");

const slugify = require("slugify");
highlightJsExt.register(asciidoctor.Extensions);

//const katexExt = require("asciidoctor-katex");
//katexExt.register(asciidoctor.Extensions);

const he = require("he");

const fs = require("fs");
const glob = require("glob");

class FullConverter {
  constructor(contents) {
    this.baseConverter = asciidoctor.Html5Converter.$new();
    this.readingTime = readingTime(contents).text;
  }

  convert(node, transform) {
    if (node.getNodeName() === "preamble" || node.getNodeName() === "open") {
      //console.log(node.getNodeName(), node.getContent());
      return node.getContent();
    } else if (node.getNodeName() == "section") {
      //console.log(node.getNodeName(), node.getContent());
      let attrs = "";

      // TODO
      //if(_.has(node, 'attributes.$$smap.role')) {
      //  let attrs = `${attrs} class=${node.attributes.$smap.role}`;
      //}

      //if(_.has(node, 'attributes.$$smap.id') ){
      //  let attrs = `${attrs} id=${node.attributes.$smap.id}`;
      //}

      return `
        <h${node.level + 1} ${attrs}>${node.title}</h${node.level + 1}>
        ${node.getContent()}
        `;
    } else if (
      node.getNodeName() == "paragraph" &&
      node.attributes.$$smap.role == "date"
    ) {
      node.lines = [`${node.lines[0]} · ${this.readingTime}`];

      return this.baseConverter.convert(node, transform);
    } else {
      return this.baseConverter.convert(node, transform);
    }
  }
}

class TeaserConverter {
  constructor(contents) {
    this.baseConverter = asciidoctor.Html5Converter.$new();
    this.readingTime = readingTime(contents).text;
  }

  convert(node, transform) {
    let nodeName = node.getNodeName();

    // For PostItemSmall we dont need to render the whole post
    if (
      nodeName == "admonition" ||
      nodeName == "section" ||
      nodeName == "inline_quoted" ||
      nodeName == "dlist" ||
      nodeName == "listing" ||
      nodeName == "table" ||
      nodeName == "colist" ||
      nodeName == "inline_anchor"
    ) {
      return "";
    }

    // Only `date` needs to be rendered
    if (nodeName == "paragraph" && node.attributes.$$smap.role != "date") {
      return "";
    }

    if (nodeName === "preamble" || nodeName === "open") {
      return node.getContent();
    } else if (
      nodeName == "paragraph" &&
      node.attributes.$$smap.role == "date"
    ) {
      node.lines = [`${node.lines[0]} · ${this.readingTime}`];
      return this.baseConverter.convert(node, transform);
    } else {
      return this.baseConverter.convert(node, transform);
    }
  }
}

function convert(post) {
  asciidoctor.ConverterFactory.register(new FullConverter(post.contents), [
    "html5"
  ]);

  post.fullhtml = asciidoctor.convert(post.contents, {
    doctype: "book",
    attributes: [
      "icons=font", // fontawesome
      "experimental=true",
      "showtitle=true",
      //"stem=true", // include katex at the top and add global css https://katex.org/docs/browser.html
      "source-highlighter=highlightjs-ext"
    ]
  });

  asciidoctor.ConverterFactory.register(new TeaserConverter(post.contents), [
    "html5"
  ]);

  post.teaserhtml = asciidoctor.convert(post.contents, {
    doctype: "book",
    attributes: { showtitle: true }
  });
}

export function parse(post) {
  convert(post);
  post.title = he.decode(get_doc_title(post.contents));
  post.slug = slugify(post.title, { remove: /[*+~.,()'"!:@]/g, lower: true });
}

function get_doc_title(contents) {
  asciidoctor.ConverterFactory.register(new FullConverter(contents), ["html5"]);

  let doc = asciidoctor.load(contents);
  return doc.getDocumentTitle();
}

function add_dev_posts(posts, contents) {
  if (process.env.NODE_ENV == "development") {
    console.log("[DEV]: Adding dev posts");

    let files = glob.sync("../blog/_*.adoc");
    console.log(files);

    files.forEach(file => {
      posts.push({ file: file });
      let content = fs.readFileSync(file);
      contents.push(content);
    });
  }
}
export const get_posts = async (url, dev_url) => {
  try {
    let posts;
    const data = fs.readFileSync(dev_url, "utf8");
    posts = yaml.safeLoad(data);
    //if (process.env.NODE_ENV == "development") {
    //  const data = fs.readFileSync(dev_url, "utf8");
    //  posts = yaml.safeLoad(data);
    //  console.log(data);
    //} else {
    //  const response = await fetch(url);
    //  const data = await response.text();
    //  posts = yaml.safeLoad(data);
    //}

    let contents = await Promise.all(
      posts.map(async (post, index) => {
        return fetch(post.file).then(response => response.text());
      })
    );

    // Adds posts for development
    add_dev_posts(posts, contents);

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

export async function get_commit() {
  const commit = JSON.parse(fs.readFileSync("./artifacts/meta.json", "utf8"));
  return commit;

  //
  // meta.json should always be read locally, otherwise a stale build can still say
  // it is new because it is picking up latest meta.json from gcp gs
  //
  //if (process.env.NODE_ENV == "development") {
  //  const commit = JSON.parse(fs.readFileSync("./meta.json", "utf8"));
  //  return commit;
  //} else {
  //  const response = await fetch(
  //    "https://storage.googleapis.com/jeffjose-personal-website/meta.json"
  //  );
  //  const commit = await response.json();
  //  return commit;
  //}
}
