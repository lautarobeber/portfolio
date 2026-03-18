# Portfolio Minimalista - React + Vite + Tailwind CSS

Portfolio moderno y minimalista construido con React, Vite y Tailwind CSS.

## 🚀 Características

- ✨ Diseño minimalista y elegante
- 🎨 Estilizado con Tailwind CSS
- ⚡ Desarrollo rápido con Vite
- 📱 Completamente responsive
- 🌟 Navbar flotante con glassmorphism
- 🎯 Solo las secciones esenciales: Hero, Projects, Contact

## 🛠️ Tecnologías

- **React** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de CSS utility-first
- **Lucide React** - Iconos modernos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🌐 Desarrollo

El servidor de desarrollo se ejecuta en `http://localhost:5173/`.

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navbar flotante con blur
│   │   ├── Hero.jsx         # Sección de presentación
│   │   ├── Projects.jsx     # Grid de proyectos
│   │   └── Contact.jsx      # Sección de contacto minimalista
│   ├── App.jsx
│   ├── main.jsx
│   └── style.css
├── index.html
└── package.json
```

## ✨ Componentes

- **Navbar**: Barra de navegación flotante con efecto glassmorphism
- **Hero**: Sección de presentación con título y descripción
- **Projects**: Grid responsive de proyectos con hover effects
- **Contact**: Sección minimalista de contacto con redes sociales

## 🎨 Personalización

Para personalizar el portfolio:

1. Edita los proyectos en `src/components/Projects.jsx`
2. Actualiza la información de contacto en `src/components/Contact.jsx`
3. Modifica los textos del Hero en `src/components/Hero.jsx`
4. Cambia los colores en `tailwind.config.js` si lo necesitas

## 📝 Licencia

Este proyecto está disponible para uso personal y educativo.
