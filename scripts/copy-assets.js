const fs = require('fs')
const path = require('path')

const src = path.join(__dirname, '..', 'assets', 'img', 'portfolio')
const dest = path.join(__dirname, '..', 'public', 'portfolio')

if (!fs.existsSync(dest)) {
  fs.mkdirSync(dest, { recursive: true })
}

const files = fs.readdirSync(src)
files.forEach((file) => {
  fs.copyFileSync(path.join(src, file), path.join(dest, file))
  console.log(`Copied: ${file}`)
})

console.log(`\n✅ Copied ${files.length} portfolio images to public/portfolio/`)
