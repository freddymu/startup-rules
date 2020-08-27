# Startup Rules

Panduan Penggiat Startup.

Dapat dibaca melalui smartphone [https://startuprules.netlify.app](https://startuprules.netlify.app)

Atau [download latest ebooknya disini.](https://github.com/freddymu/startup-rules/raw/master/utilities/pdf/startup-rules.pdf)

> Konten akan diupdate jika narasumber melakukan posting terbaru terkait dengan Startup Rules.

## Disclaimer

Saya hanya mengkompilasikan postingan dari LinkedIn apa adanya. Dan sudah ijin kepada penulisnya.

## How To

### Manual Convert From Markdown to PDF

- `cat docs/0_intro.md docs/{1..25}_rule.md >> startup-rules-20200725.md && npx md-to-pdf startup-rules-20200725.md --config-file=md-to-pdf.config.js`

## Workflow

Ketika ada posting baru maka berikut langkah-langkah untuk melakukan kompilasinya:

1. Buat file [n]_rule.md di dalam folder docs
2. Dari root folder jalankan perintah `node utilities/merge-md.js` untuk menggabungkan semua file .md ke dalam satu file .md lalu di jadikan file pdf
3. Generate cover dengan tanggal yang baru `npx md-to-pdf utilities/cover.md --config-file=md-to-pdf-cover.config.js`
4. Dari root folder jalankan perintah `node utilities/make-pdf.js` untuk menggabungkan cover.pdf dengan pdf di langkah ke-2
5. Tambahkan rule-[n] di file `website/sidebars.js` agar postingan baru dapat diakses melalui website
6. Masuk ke folder website lalu jalankan perintah `yarn build && npx netlify deploy --prod` untuk membuild file md menjadi file html dan deploy ke server netlify
7. Commit dan push perubahan agar file pdf terbaru dapat didownload dari halaman website

```bash
# one line command
node utilities/merge-md.js && npx md-to-pdf utilities/cover.md --config-file=md-to-pdf-cover.config.js && node utilities/make-pdf.js && git add . && git commit -m 'add new rule' && git push origin master && cd website/ && yarn build && npx netlify deploy --prod
```

## Technology Used

- Docusaurus 1.14.x untuk membuat static web dari markdown
- Marked.js untuk mengubah file Markdown ke HTML
- Puppetter, Chrome headless browser. Digunakan untuk mengubah file HTML ke PDF
- PDFBox untuk merge cover.pdf dengan content PDF lainnya
