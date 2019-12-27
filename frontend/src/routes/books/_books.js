// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_books.js` rather than `books.js`, because
// we don't want to create an `/blog/books` route — the leading
// underscore tells Sapper not to do that.
const books = [
  {
    title: "Mossad: The Greatest Missions of the Israeli Secret Service",
    slug: "mossad-the-greatest-missions-of-the-israeli-secret-service",
    contents: `
= Mossad: The Greatest Missions of the Israeli Secret Service

[.subtitle]
Michael Bar-Zohar & Nissim Mishal

[.date]
Dec 26, 2019

[.hero.blur]
image::/books/mossad.jpg[]

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.

    `
  },
  {
    title: "Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators",
    slug: "catch-and-kill-lies-spies-and-a-conspiracy-to-protect-predators",
    contents: `

= Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators

[.date]
Dec 26, 2019

[.hero]
image::/books/catch-and-kill.jpg[]

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.
`
  },
  {
    title: "Economics: The User's Guide",
    slug: "economics-the-users-guide",
    contents: `

= Economics: The User's Guide

[.date]
Dec 26, 2019

[.hero]
image::/books/economics-users-guide.jpg[]

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.
`
  },
  {
    title:
      "Prisoners of Geography: Ten Maps That Tell You Everything You Need to Know About Global Politics",
    slug:
      "prisoners-of-geography-ten-maps-that-tell-you-everything-you-need-to-know-about-global-politics",
    contents: `

= Prisoners of Geography: Ten Maps That Tell You Everything You Need to Know About Global Politics

[.date]
Dec 26, 2019

[.hero]
image::/books/prisoners-of-geography.jpg[]

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.
`
  },
  {
    title: "Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators",
    slug: "catch-and-kill-lies-spies-and-a-conspiracy-to-protect-predators",
    contents: `

= Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators

[.date]
Dec 26, 2019

[.hero]
image::/books/catch-and-kill.jpg[]

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.
`
  },
  {
    title: "Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators",
    slug: "catch-and-kill-lies-spies-and-a-conspiracy-to-protect-predators",
    contents: `

= Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators

[.date]
Dec 26, 2019

[.hero]
image::/books/catch-and-kill.jpg[]

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.
`
  },
  {
    title: "Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators",
    slug: "catch-and-kill-lies-spies-and-a-conspiracy-to-protect-predators",
    contents: `

= Catch and Kill: Lies, Spies, and a Conspiracy to Protect Predators

[.date]
Dec 26, 2019

[.hero]
image::/books/catch-and-kill.jpg[]

This is an optional introduction to the article. As you'll see in this article, we'll discuss these things.

Lorem ipsum dolor amet skateboard pok pok hexagon poke keffiyeh man bun. Pour-over cloud bread selvage enamel pin flannel asymmetrical street art lyft heirloom kombucha prism wolf umami snackwave iceland. Edison bulb flexitarian organic chicharrones. Franzen vexillologist ethical crucifix normcore artisan deep v +austin.cc+ four loko vaporware skateboard cray brunch.
`
  }
];

books.forEach(post => {
  post.contents = post.contents.replace(/^\t{3}/gm, "");
});

export default books;
