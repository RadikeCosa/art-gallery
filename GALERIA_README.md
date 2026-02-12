# 🎨 Galería de Arte de Camila

Galería de arte online para exhibir las obras de Camila con un diseño amigable y colorido.

## 🚀 Comenzar

### Instalar dependencias

```bash
pnpm install
```

### Ejecutar el servidor de desarrollo

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la galería.

## 📁 Estructura del Proyecto

```
art-gallery/
├── app/
│   ├── layout.tsx          # Layout principal con fuentes y metadata
│   ├── page.tsx            # Página de exhibición de obra de arte
│   └── globals.css         # Estilos globales y configuración de Tailwind
├── data/
│   └── artworks.ts         # Datos de las obras de arte
├── types/
│   └── artwork.ts          # Tipos TypeScript para obras de arte
└── public/                 # Archivos estáticos
```

## 🎨 Características del Diseño

- **Diseño móvil-primero**: Optimizado para dispositivos móviles con max-width de 480px
- **Modo oscuro**: Soporte completo para tema claro y oscuro
- **Fuente personalizada**: Plus Jakarta Sans para un look moderno y amigable
- **Iconos Material**: Google Material Symbols para iconos consistentes
- **Colores personalizados**:
  - Primary: `#8c2bee` (morado vibrante)
  - Background Light: `#f7f6f8` (gris muy claro)
  - Background Dark: `#191022` (morado oscuro)
- **Componentes interactivos**:
  - Botón "¡Me encanta!" con icono de corazón
  - Botón "Compartir"
  - Barra de navegación superior
  - Sección de historia detrás de la obra

## 📝 Agregar Más Obras de Arte

Para agregar nuevas obras de arte, edita el archivo `data/artworks.ts`:

```typescript
export const artworks: Artwork[] = [
  {
    id: "mi-nueva-obra",
    title: "Título de la Obra",
    imageUrl: "URL_de_la_imagen",
    imageAlt: "Descripción de la imagen",
    createdDate: "1 de Enero, 2024",
    story: "La historia detrás de esta obra...",
    artist: "Camila",
    likes: 0,
  },
  // ... más obras
];
```

## 🛠️ Tecnologías

- [Next.js 16](https://nextjs.org/) - Framework React
- [Tailwind CSS v4](https://tailwindcss.com/) - Estilos
- [TypeScript](https://www.typescriptlang.org/) - Tipado
- [Google Fonts](https://fonts.google.com/) - Tipografía
- [Material Symbols](https://fonts.google.com/icons) - Iconos

## 📄 Licencia

Este proyecto es de uso personal para la galería de arte de Camila.
