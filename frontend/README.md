# Requisitos previos

- Node.js >= 18.x
- npm >= 9.x

## Instalación

1. Clona el repositorio o descarga el código fuente.
2. Abre una terminal en la carpeta `frontend`.
3. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso en desarrollo

Inicia el servidor de desarrollo con recarga automática:

```bash
npm run dev
yarn dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173) para ver la aplicación.

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la app para producción.
- `npm run preview`: Previsualiza la app de producción localmente.
- `npm run lint`: Ejecuta ESLint para revisar el código.

## Estructura del proyecto

- `src/components/`: Componentes reutilizables (listas de clientes, contactos, leads).
- `src/pages/`: Páginas y navegación por pestañas.
- `src/services/api.ts`: Funciones para consumir la API de Odoo CRM.
- `src/main.tsx`: Punto de entrada principal.
- `public/`: Archivos estáticos.

## Configuración de la API

Por defecto, la API debe estar disponible en `http://localhost:8000`. Puedes modificar la URL en `src/services/api.ts` si tu backend está en otra dirección.

## Notas

- Los estilos se gestionan con CSS Modules para evitar conflictos globales.
- El proyecto está configurado con ESLint y TypeScript para asegurar calidad y buenas prácticas.

## Despliegue

Para compilar la app para producción:

```bash
npm run build
```

Los archivos listos para producción estarán en la carpeta `dist/`.

---

Si tienes dudas o problemas, revisa la documentación de Vite y React, o contacta al responsable del proyecto.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
