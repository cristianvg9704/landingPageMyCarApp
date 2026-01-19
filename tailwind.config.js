/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores principales de MyCar
        primary: {
          50: '#eef2ff',   // indigo-50
          100: '#e0e7ff',  // indigo-100
          600: '#4f46e5',  // indigo-600 (color principal)
          700: '#4338ca',  // indigo-700 (hover)
        },
        secondary: {
          50: '#eff6ff',   // blue-50
          100: '#dbeafe',  // blue-100
          600: '#2563eb',  // blue-600
        },
        // Colores semánticos
        success: {
          500: '#10b981',  // green-500
        },
        // Textos
        text: {
          primary: '#111827',    // gray-900
          secondary: '#4b5563',  // gray-600
          light: '#9ca3af',      // gray-400
        },
        // Fondos
        background: {
          light: '#f9fafb',      // gray-50
          white: '#ffffff',
          dark: '#111827',       // gray-900
        }
      },
    },
  },
  plugins: [],
}
