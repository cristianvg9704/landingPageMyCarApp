# 🔒 Archivos que NO deben ir a GitHub

## ❌ Archivos que NO deben subirse (por seguridad)

### 1. Variables de Entorno (.env)
```
.env
.env.local
.env.production.local
.env.development.local
.env.test.local
```
**Razón**: Contienen credenciales, API keys, y secretos sensibles.

### 2. Dependencias (node_modules)
```
node_modules/
```
**Razón**: Muy pesado, se regenera con `npm install`. Ya está en `.gitignore` ✅

### 3. Builds y Distribuciones
```
dist/
dist-ssr/
build/
```
**Razón**: Archivos generados, se reconstruyen con `npm run build`. Ya está en `.gitignore` ✅

### 4. Archivos del Sistema Operativo
```
.DS_Store          # macOS
Thumbs.db          # Windows
*.swp              # Vim
*.swo              # Vim
```
**Razón**: Archivos temporales del sistema. Ya está en `.gitignore` ✅

### 5. Logs y Archivos Temporales
```
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
```
**Razón**: Archivos temporales de logs. Ya está en `.gitignore` ✅

### 6. Configuración del IDE (opcional)
```
.vscode/
.idea/
*.suo
*.ntvs*
*.njsproj
*.sln
```
**Razón**: Preferencias personales del IDE. Ya está en `.gitignore` ✅

## ✅ Archivos que SÍ deben ir a GitHub

### Archivos de Configuración del Proyecto
- ✅ `package.json` - Dependencias del proyecto
- ✅ `package-lock.json` - Versiones exactas de dependencias
- ✅ `vite.config.js` - Configuración de Vite
- ✅ `tailwind.config.js` - Configuración de Tailwind
- ✅ `postcss.config.js` - Configuración de PostCSS
- ✅ `.eslintrc.cjs` - Configuración de ESLint
- ✅ `.gitignore` - Archivos a ignorar
- ✅ `netlify.toml` - Configuración de Netlify
- ✅ `vercel.json` - Configuración de Vercel

### Código Fuente
- ✅ `src/` - Todo el código fuente
- ✅ `index.html` - HTML principal

### Documentación
- ✅ `README.md` - Documentación principal
- ✅ `DEPLOY.md` - Guía de despliegue
- ✅ `COLORS.md` - Sistema de colores
- ✅ `FLUTTER_COLORS.md` - Colores para Flutter

## 🛡️ Verificación de Seguridad

### Antes de hacer commit, verifica:

1. **No hay archivos .env**:
```bash
git status | grep .env
# No debe mostrar nada
```

2. **No hay credenciales hardcodeadas**:
```bash
# Buscar posibles API keys o secrets
grep -r "api.*key\|secret\|password\|token" src/ --ignore-case
# Solo debe mostrar comentarios o ejemplos
```

3. **node_modules no está trackeado**:
```bash
git ls-files | grep node_modules
# No debe mostrar nada
```

## 📝 Buenas Prácticas

### Si necesitas variables de entorno:

1. **Crea un archivo `.env.example`** (SÍ puede ir a GitHub):
```env
VITE_API_URL=https://api.ejemplo.com
VITE_API_KEY=tu_api_key_aqui
```

2. **Documenta en README** cómo configurar las variables

3. **NUNCA** subas el `.env` real con valores reales

### Si accidentalmente subiste algo sensible:

1. **Elimina del historial**:
```bash
git rm --cached .env
git commit -m "Remove .env file"
```

2. **Si ya está en el historial**, usa `git filter-branch` o contacta a GitHub Support

## ✅ Estado Actual

Tu `.gitignore` está bien configurado y protege:
- ✅ Variables de entorno (.env*)
- ✅ node_modules
- ✅ dist/build
- ✅ Logs
- ✅ Archivos del sistema

**No hay archivos sensibles en tu proyecto actual** ✅
