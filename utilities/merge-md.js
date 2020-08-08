const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const basedir = __dirname + '/';
const today = new Date().toDateString().toLowerCase().replace(/ /g, '-');

const collator = new Intl.Collator(undefined, {
  numeric: true,
  sensitivity: 'base',
});

const files = fs
  .readdirSync(basedir + '../docs')
  .filter((file) => {
    return (
      path.extname(file).toLowerCase() === '.md' &&
      file.indexOf('daftar_isi') === -1
    );
  })
  .map((file) => {
    return basedir + '../docs/' + file;
  })
  .sort(collator.compare);

//console.log(files);

let tableOfContents = '## Daftar Isi\n';
let mergedMdContent = '';

files.forEach((file) => {
  let fileContent = fs.readFileSync(file, 'utf-8');

  const frontMatterMetadata = /(.\n?)*\--/;

  const frontMatter = fileContent
    .match(frontMatterMetadata)[0]
    .replace(/---/g, '')
    .replace(/\n/g, '|')
    .split('|')
    .filter((item) => {
      return item.length !== 0;
    })
    .map((item) => {
      const metadata = item.split(':');
      return { key: metadata[0].trim(), value: metadata[1].trim() };
    });

  const title = frontMatter.filter((item) => {
    return item.key === 'title';
  })[0].value;

  const titleSlug = title
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    // .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text

  console.log(titleSlug);

  // remove front Matter metadata
  fileContent = fileContent.replace(frontMatterMetadata, '## ' + title);

  // add page break
  fileContent += `\n<div class="page-break"></div>\n`;

  tableOfContents += `\n- [${title}](#${titleSlug})`;

  mergedMdContent += fileContent;

  //console.log(fileContent);
});

const mergedFileName = basedir + 'markdown/merge-md-' + today + '.md';

if (mergedMdContent.length !== 0) {
  mergedMdContent =
    tableOfContents + '\n<div class="page-break"></div>\n' + mergedMdContent;
  fs.writeFileSync(mergedFileName, mergedMdContent);
}

// convert md to pdf
const cmd = `npx md-to-pdf ${mergedFileName} --config-file=md-to-pdf.config.js`;
execSync(cmd);
