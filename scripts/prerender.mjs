// Genera HTML estático para las páginas legales, de modo que se lean sin JavaScript.
// Usa la API de Vite (ssrLoadModule) con configuración propia en vez de un segundo `vite build --ssr`,
// así no depende de archivos intermedios ni de plugins que el entorno de despliegue inyecte en vite.config.js.
import fs from 'node:fs'
import path from 'node:path'
import { createServer } from 'vite'
import react from '@vitejs/plugin-react'

const root = path.resolve(import.meta.dirname, '..')
const distCandidates = [path.join(root, 'dist'), path.join(root, 'dist', 'client')]
const dist = distCandidates.find((d) => fs.existsSync(path.join(d, 'index.html')))
if (!dist) throw new Error('No se encontró dist/index.html. ¿Corrió `vite build` antes?')

const server = await createServer({
  root,
  configFile: false,
  plugins: [react()],
  appType: 'custom',
  server: { middlewareMode: true },
  logLevel: 'error',
})

try {
  const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
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
    console.log(`prerendered ${url} -> ${path.relative(root, dir)}`)
  }
} finally {
  await server.close()
}
