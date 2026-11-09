// Genera HTML estático para las páginas legales, de modo que se lean sin JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, 'dist')
const { render } = await import(pathToFileURL(path.join(root, 'dist-ssr', 'entry-server.js')).href)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const pages = [
  { url: '/privacidad', title: 'Política de Privacidad – MyCar' },
  { url: '/terminos', title: 'Términos de Uso – MyCar' },
]

for (const { url, title } of pages) {
  const html = template
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
  if (!html.includes(title) || !html.includes('<h1')) throw new Error(`Prerender falló para ${url}`)
  const dir = path.join(dist, url)
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  console.log(`prerendered ${url}`)
}
