const asciidoctor = require("asciidoctor")();

class FullConverter {
  constructor() {
    this.baseConverter = asciidoctor.Html5Converter.$new();
    //this.readingTime = readingTime(adoc).text;
    this.readingTime = "10mins";
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
  constructor() {
    this.baseConverter = asciidoctor.Html5Converter.$new();
    //this.readingTime = readingTime(adoc).text;
    this.readingTime = "10mins";
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

export function convert(post) {
  asciidoctor.ConverterFactory.register(new FullConverter(), ["html5"]);

  post.fullhtml = asciidoctor.convert(post.contents, {
    doctype: "book",
    attributes: { showtitle: true }
  });

  asciidoctor.ConverterFactory.register(new TeaserConverter(), ["html5"]);

  post.teaserhtml = asciidoctor.convert(post.contents, {
    doctype: "book",
    attributes: { showtitle: true }
  });
}
