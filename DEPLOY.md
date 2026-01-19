# 🚀 Guía de Despliegue

## Opción 1: Netlify (Más Fácil - Drag & Drop)

### Paso 1: Construir el proyecto
```bash
npm install
npm run build
```

### Paso 2: Desplegar
1. Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra la carpeta `dist` que se creó después del build
3. ¡Listo! Obtendrás una URL automática

---

## Opción 2: Vercel (Recomendado para React)

### Con Vercel CLI:
```bash
# Instalar Vercel CLI (si no lo tienes)
npm install -g vercel

# Construir el proyecto
npm install
npm run build

# Desplegar
vercel
```

### Con GitHub (Automático):
1. Sube tu código a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. Vercel detectará automáticamente Vite y desplegará

---

## Opción 3: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Construir
npm install
npm run build

# Desplegar
netlify deploy --prod --dir=dist
```

---

## Opción 4: GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev gh-pages

# Agregar al package.json en "scripts":
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Desplegar
npm run deploy
```

---

## ⚡ Comandos Rápidos

```bash
# Desarrollo local
npm install
npm run dev

# Build para producción
npm run build

# Previsualizar build
npm run preview
```
