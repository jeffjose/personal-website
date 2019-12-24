### rollup vs webpack
  - rollup has trouble with the `require` keyword, which I need for asciidoctor

#### To go from rollup from webpack
 - had to add 'webpack chunk name' to ./src/node_modules/@sapper/internal/manifest-client.mjs. This might not have been needed, since this file is auto generated
 - added svelte-loader and webpack to package.json
 - removed --legacy from package.json scripts -- 'yarn export' and 'yarn build'
 - copied over webpack.config.js
 -

