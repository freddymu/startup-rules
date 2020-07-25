# Disclaimer

Saya hanya mengkompilasikan postingan dari LinkedIn apa adanya.

## How To

### Build New PDF

- `npm utitilies/merge-md.js`
- `npm utilities/make-pdf.js`

### Build Cover PDF

- `npx md-to-pdf utilities/cover.md --config=md-to-pdf-cover.config.js`

### Manual Convert From Markdown to PDF

- `cat docs/0_intro.md docs/{1..25}_rule.md >> startup-rules-20200725.md && npx md-to-pdf startup-rules-20200725.md --config-file=md-to-pdf.config.js`
