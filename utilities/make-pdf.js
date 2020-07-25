const merge = require('easy-pdf-merge');
const fs = require('fs');
const path = require('path');
const baseDir = __dirname + '/';

const today = new Date().toDateString().replace(/ /g, '-').toLowerCase();
console.log(today);
//process.exit();

merge(
  [baseDir + 'cover.pdf', baseDir + `markdown/merge-md-${today}.pdf`],
  `${baseDir}pdf/startup-rules-${today}.pdf`,
  function (err) {
    if (err) {
      return console.log(err);
    }
    console.log('Successfully merged!');
  }
);
