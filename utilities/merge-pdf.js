const merge = require('easy-pdf-merge');
const fs = require('fs');
const path = require('path');

const files = fs
  .readdirSync('../docs')
  .map((item) => {
    return '../docs/' + item;
  })
  .filter((item) => {
    return path.extname(item).toLowerCase() === '.pdf';
  });

console.log(files);
//process.exit();

const today = (new Date().toDateString()).replace(/ /g, '-').toLowerCase();
console.log(today);
//process.exit();

// don't forget to install pdfbox here https://pdfbox.apache.org/download.cgi

merge(files, `./pdf/startup-rules-${today}.pdf`, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log('Successfully merged!');
});
