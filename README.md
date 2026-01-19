# MyCar - Landing Page (Vite + React)

Landing page para MyCar, la aplicación móvil que ayuda a organizar los ingresos diarios de vehículos trabajando como taxi, paquetería u otros servicios. Construida con Vite, React y Tailwind CSS.

## 🚀 Tecnologías

- **Vite** - Build tool y dev server ultra rápido
- **React 18** - Biblioteca de UI
- **Tailwind CSS** - Framework de CSS utility-first
- **JavaScript (ES6+)** - Lenguaje de programación

## 📁 Estructura del Proyecto

```
landingPage/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── ProductInfo.jsx
│   │   ├── Features.jsx
│   │   ├── Newsletter.jsx
│   │   └── Footer.jsx
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales con Tailwind
├── index.html               # HTML principal
├── vite.config.js           # Configuración de Vite
├── tailwind.config.js       # Configuración de Tailwind
├── postcss.config.js        # Configuración de PostCSS
└── package.json             # Dependencias del proyecto
```

## 🛠️ Instalación

1. **Instala las dependencias:**
```bash
npm install
```

2. **Inicia el servidor de desarrollo:**
```bash
npm run dev
```

3. **Abre tu navegador en:**
```
http://localhost:5173
```

## 📜 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo con hot reload
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter de ESLint

## 🌐 Despliegue

### Opción 1: Netlify (Recomendado)
1. Instala Netlify CLI: `npm install -g netlify-cli`
2. Construye el proyecto: `npm run build`
3. Despliega: `netlify deploy --prod --dir=dist`

O simplemente arrastra la carpeta `dist` a [app.netlify.com/drop](https://app.netlify.com/drop)

### Opción 2: Vercel
1. Instala Vercel CLI: `npm install -g vercel`
2. En la carpeta del proyecto: `vercel`
3. Sigue las instrucciones

### Opción 3: GitHub Pages
1. Instala gh-pages: `npm install --save-dev gh-pages`
2. Agrega al package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Ejecuta: `npm run deploy`

## 🎨 Componentes

- **Navigation** - Barra de navegación fija con logo MyCar
- **Hero** - Sección principal destacando la gestión de ingresos de vehículos
- **ProductInfo** - Información sobre MyCar y sus beneficios
- **UserTypes** - Sección destacando los dos tipos de usuarios (conductores y dueños)
- **Features** - Características: registro diario, múltiples servicios, estadísticas
- **Newsletter** - Formulario de suscripción para acceso anticipado
- **Footer** - Pie de página con información de contacto

## 📱 Sobre MyCar

MyCar es una aplicación móvil diseñada para **conductores** y **dueños de vehículos** que necesitan llevar un control organizado de los ingresos diarios. Perfecta para:

- 🚕 Conductores de taxi
- 📦 Servicios de paquetería
- 🚚 Servicios de delivery
- 🚗 Cualquier servicio de transporte
- 👔 Dueños de flotas de vehículos

### Para Conductores
Si eres conductor y trabajas con tu propio vehículo o varios vehículos, MyCar te ayuda a registrar y organizar todos tus ingresos diarios de forma sencilla.

### Para Dueños de Vehículos
Si eres dueño de vehículos que los tienes trabajando con otros conductores, MyCar te permite llevar un control organizado de los ingresos de toda tu flota.

### Características principales:
- Registro rápido de ingresos diarios
- Gestión de múltiples vehículos
- Estadísticas y reportes automáticos
- Interfaz simple e intuitiva

## 📧 Integración de Newsletter

El formulario de newsletter actualmente muestra un mensaje de éxito simulado. Para conectar con un backend real y almacenar los emails de usuarios interesados en MyCar, edita `src/components/Newsletter.jsx` y reemplaza el `setTimeout` con una llamada real a tu API.

Ejemplo con Formspree (gratis):
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 🎯 Características

- ✅ Diseño completamente responsivo
- ✅ Navegación suave entre secciones
- ✅ Formulario funcional con validación
- ✅ Animaciones suaves
- ✅ Hot Module Replacement (HMR) con Vite
- ✅ Optimización automática para producción
- ✅ Código modular y mantenible

## 📝 Notas

- El proyecto usa Tailwind CSS vía PostCSS
- Todos los componentes son funcionales (hooks de React)
- El diseño es mobile-first y responsivo
- Listo para producción con `npm run build`
