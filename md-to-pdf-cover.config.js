module.exports = {
  //stylesheet: ['path/to/style.css', 'https://example.org/stylesheet.css'],
  stylesheet: [
    //'https://raw.githubusercontent.com/markdowncss/modest/master/css/modest.css',
    //'https://raw.githubusercontent.com/markdowncss/air/master/css/air.css',
    //'https://raw.githubusercontent.com/markdowncss/retro/master/css/retro.css',
    //'https://raw.githubusercontent.com/markdowncss/splendor/master/css/splendor.css',
  ],
  css: `div { page-break-after: always; }`,
  //body_class: 'markdown-body',
  body_class: [],
  highlight_style: 'github',

  // Markdown to HTML options: https://marked.js.org/#/USING_ADVANCED.md#options
  marked_options: {
    headerIds: true,
    smartypants: true,
    breaks: true,
    gfm: true,
  },

  // HTML to PDF options: https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagepdfoptions
  pdf_options: {
    format: 'A5',
    margin: '20mm',
    printBackground: true,
  },
  stylesheet_encoding: 'utf-8',
  md_file_encoding: 'utf-8',
  as_html: false,
};
