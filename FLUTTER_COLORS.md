# 🎨 Colores MyCar para Flutter

Paleta de colores extraída de la landing page para usar en tu app Flutter.

## 📋 Colores Principales

### Indigo (Color Principal de Marca)

| Nombre Tailwind | Hex | Flutter Color | Uso |
|----------------|-----|--------------|-----|
| `indigo-50` | `#EEF2FF` | `Color(0xFFEEF2FF)` | Fondos suaves, gradientes claros |
| `indigo-100` | `#E0E7FF` | `Color(0xFFE0E7FF)` | Fondos de tarjetas, iconos suaves |
| `indigo-600` | `#4F46E5` | `Color(0xFF4F46E5)` | **Color principal** - Botones, textos destacados |
| `indigo-700` | `#4338CA` | `Color(0xFF4338CA)` | Estados hover, botones presionados |

### Blue (Color Secundario)

| Nombre Tailwind | Hex | Flutter Color | Uso |
|----------------|-----|--------------|-----|
| `blue-50` | `#EFF6FF` | `Color(0xFFEFF6FF)` | Fondos suaves, gradientes |
| `blue-100` | `#DBEAFE` | `Color(0xFFDBEAFE)` | Fondos alternativos |
| `blue-600` | `#2563EB` | `Color(0xFF2563EB)` | Gradientes principales |

### Gray (Textos y Fondos)

| Nombre Tailwind | Hex | Flutter Color | Uso |
|----------------|-----|--------------|-----|
| `gray-50` | `#F9FAFB` | `Color(0xFFF9FAFB)` | Fondos alternativos claros |
| `gray-300` | `#D1D5DB` | `Color(0xFFD1D5DB)` | Bordes, líneas divisorias |
| `gray-400` | `#9CA3AF` | `Color(0xFF9CA3AF)` | Textos terciarios, placeholders |
| `gray-600` | `#4B5563` | `Color(0xFF4B5563)` | Textos secundarios |
| `gray-700` | `#374151` | `Color(0xFF374151)` | Textos secundarios oscuros |
| `gray-800` | `#1F2937` | `Color(0xFF1F2937)` | Bordes en footer |
| `gray-900` | `#111827` | `Color(0xFF111827)` | Textos principales, títulos |

### Colores de Estado

| Nombre Tailwind | Hex | Flutter Color | Uso |
|----------------|-----|--------------|-----|
| `green-500` | `#10B981` | `Color(0xFF10B981)` | Mensajes de éxito, confirmaciones |
| `white` | `#FFFFFF` | `Color(0xFFFFFFFF)` | Fondos principales, textos sobre oscuro |

## 💻 Implementación en Flutter

### Opción 1: Archivo `colors.dart` (Recomendado)

Crea un archivo `lib/constants/colors.dart`:

```dart
import 'package:flutter/material.dart';

class MyCarColors {
  // Indigo - Color Principal
  static const Color indigo50 = Color(0xFFEEF2FF);
  static const Color indigo100 = Color(0xFFE0E7FF);
  static const Color indigo600 = Color(0xFF4F46E5);
  static const Color indigo700 = Color(0xFF4338CA);

  // Blue - Color Secundario
  static const Color blue50 = Color(0xFFEFF6FF);
  static const Color blue100 = Color(0xFFDBEAFE);
  static const Color blue600 = Color(0xFF2563EB);

  // Gray - Textos y Fondos
  static const Color gray50 = Color(0xFFF9FAFB);
  static const Color gray300 = Color(0xFFD1D5DB);
  static const Color gray400 = Color(0xFF9CA3AF);
  static const Color gray600 = Color(0xFF4B5563);
  static const Color gray700 = Color(0xFF374151);
  static const Color gray800 = Color(0xFF1F2937);
  static const Color gray900 = Color(0xFF111827);

  // Estados
  static const Color success = Color(0xFF10B981);
  static const Color white = Color(0xFFFFFFFF);

  // Colores Semánticos (Recomendado)
  static const Color primary = indigo600;
  static const Color primaryDark = indigo700;
  static const Color primaryLight = indigo100;
  static const Color secondary = blue600;
  static const Color textPrimary = gray900;
  static const Color textSecondary = gray600;
  static const Color textTertiary = gray400;
  static const Color background = white;
  static const Color backgroundLight = gray50;
  static const Color backgroundDark = gray900;
  static const Color border = gray300;
}
```

### Opción 2: Usar en ThemeData

En tu `main.dart` o archivo de tema:

```dart
import 'package:flutter/material.dart';
import 'constants/colors.dart';

ThemeData myCarTheme = ThemeData(
  primaryColor: MyCarColors.primary,
  primarySwatch: MaterialColor(
    0xFF4F46E5, // indigo-600
    <int, Color>{
      50: MyCarColors.indigo50,
      100: MyCarColors.indigo100,
      600: MyCarColors.indigo600,
      700: MyCarColors.indigo700,
    },
  ),
  scaffoldBackgroundColor: MyCarColors.backgroundLight,
  textTheme: TextTheme(
    headlineLarge: TextStyle(
      color: MyCarColors.textPrimary,
      fontWeight: FontWeight.bold,
    ),
    bodyLarge: TextStyle(
      color: MyCarColors.textPrimary,
    ),
    bodyMedium: TextStyle(
      color: MyCarColors.textSecondary,
    ),
  ),
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: MyCarColors.primary,
      foregroundColor: MyCarColors.white,
      padding: EdgeInsets.symmetric(horizontal: 32, vertical: 12),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(8),
      ),
    ),
  ),
);
```

### Opción 3: Gradientes

```dart
// Gradiente Hero Section (blue-50 a indigo-100)
LinearGradient heroGradient = LinearGradient(
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
  colors: [
    MyCarColors.blue50,
    MyCarColors.indigo100,
  ],
);

// Gradiente Newsletter (indigo-600 a blue-600)
LinearGradient newsletterGradient = LinearGradient(
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
  colors: [
    MyCarColors.indigo600,
    MyCarColors.blue600,
  ],
);

// Gradiente Tarjetas (indigo-100 a blue-100)
LinearGradient cardGradient = LinearGradient(
  begin: Alignment.topLeft,
  end: Alignment.bottomRight,
  colors: [
    MyCarColors.indigo100,
    MyCarColors.blue100,
  ],
);
```

## 📱 Ejemplos de Uso

### Botón Principal
```dart
ElevatedButton(
  onPressed: () {},
  style: ElevatedButton.styleFrom(
    backgroundColor: MyCarColors.primary,
    foregroundColor: MyCarColors.white,
  ),
  child: Text('Conocer más'),
)
```

### Texto Principal
```dart
Text(
  'Organiza los ingresos de tus vehículos',
  style: TextStyle(
    color: MyCarColors.textPrimary,
    fontSize: 24,
    fontWeight: FontWeight.bold,
  ),
)
```

### Tarjeta con Fondo Suave
```dart
Container(
  decoration: BoxDecoration(
    gradient: LinearGradient(
      colors: [MyCarColors.indigo50, MyCarColors.blue50],
    ),
    borderRadius: BorderRadius.circular(12),
  ),
  child: // Tu contenido
)
```

### Campo de Texto
```dart
TextField(
  decoration: InputDecoration(
    border: OutlineInputBorder(
      borderRadius: BorderRadius.circular(8),
      borderSide: BorderSide(color: MyCarColors.border),
    ),
    focusedBorder: OutlineInputBorder(
      borderRadius: BorderRadius.circular(8),
      borderSide: BorderSide(color: MyCarColors.primary, width: 2),
    ),
  ),
)
```

## 🎯 Resumen de Colores Más Usados

| Color | Hex | Uso Principal |
|-------|-----|---------------|
| **Primary** | `#4F46E5` | Botones principales, textos destacados |
| **Primary Dark** | `#4338CA` | Estados hover |
| **Secondary** | `#2563EB` | Gradientes, elementos secundarios |
| **Text Primary** | `#111827` | Títulos, textos principales |
| **Text Secondary** | `#4B5563` | Textos secundarios |
| **Background** | `#FFFFFF` | Fondos principales |
| **Background Light** | `#F9FAFB` | Fondos alternativos |
| **Success** | `#10B981` | Mensajes de éxito |

## 📝 Notas

- Los colores están basados en la paleta de Tailwind CSS
- `indigo-600` es el color principal de marca
- Los gradientes usan combinaciones de indigo y blue
- Los textos usan escala de grises para jerarquía visual
- El color de éxito (verde) se usa solo para mensajes positivos
