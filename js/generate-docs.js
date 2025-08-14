const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Adjust this to your local repo folder for bamguide
const baseDir = path.join(__dirname, 'core');
let docs = [];

// Recursive function to process each HTML file
function readFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      readFiles(fullPath);
    } else if (file.endsWith('.html')) {
      const html = fs.readFileSync(fullPath, 'utf8');
      const $ = cheerio.load(html);

      // Grab the first H1 or the <title>
      let title = $('h1').first().text().trim() || $('title').text().trim();

      // Extract only the <main> content, stripping whitespace
      let content = $('main').text().replace(/\s+/g, ' ').trim();

      // If there's no <main>, fall back to <body>
      if (!content) {
        content = $('body').text().replace(/\s+/g, ' ').trim();
      }

      // Create relative URL for GitHub Pages
      let relativeUrl = path.relative(__dirname, fullPath).replace(/\\/g, '/');

      docs.push({
        title: title,
        url: relativeUrl,
        content: content
      });
    }
  });
}

// Run the crawler
readFiles(baseDir);

// Save docs.js in root
fs.writeFileSync(
  path.join(__dirname, 'docs.js'),
  'window.docs = ' + JSON.stringify(docs, null, 2) + ';'
);

console.log(`✅ Extracted ${docs.length} pages into docs.js`);
