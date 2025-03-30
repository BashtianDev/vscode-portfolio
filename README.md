## vscode-portafolio
[![Abrir en Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/itsnitinr/vscode-portfolio)

Un sitio web de portafolio de desarrollador con temática de Visual Studio Code, construido con Next.js y desplegado en Vercel.

![Banner de vscode-portafolio](https://imgur.com/JXJ9mpO.gif)

## Hoja de ruta de características

- [ ] Temas y personalizaciones
  - [x] GitHub Dark (predeterminado)
  - [ ] One Dark Pro
  - [x] Dracula
  - [x] Ayu
  - [x] Nord
- [ ] Terminal interactiva personalizada

Para otras características y sugerencias de temas, por favor abre un issue.

## Variables de entorno

Crea un archivo `.env.local` dentro del directorio del proyecto para crear las variables de GITHUB (token y user).

GITHUB_API_KEY = *insertar el token de github aquí*
NEXT_PUBLIC_GITHUB_USERNAME = *usuario GitHUB*
WORKER_URL = *url de tu worker*

## Ejecutar el servidor de desarrollo

```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Todos los componentes relacionados con VSCode se encuentran en la carpeta `components`. Para cambiar el contenido del portafolio, revisa la carpeta `pages`. Para agregar o eliminar páginas, modifica `components/Sidebar.jsx` y `components/Tabsbar.jsx`.

El formulario de contacto utiliza un worker de Cloudflare hecho en java disponible en https://github.com/BashtianDev/email-worker. 
¡Importante! Antes de usarlo modifica worker.js con tus valores de correo y origenes permitidos correctos.

## Recursos de Next.js

Para aprender más sobre Next.js, revisa los siguientes recursos:

- [Documentación de Next.js](https://nextjs.org/docs) - aprende sobre las características y API de Next.js.
- [Aprender Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes consultar [el repositorio de Next.js en GitHub](https://github.com/vercel/next.js/).

## Desplegar en Vercel

La forma más sencilla de desplegar tu aplicación Next.js es utilizando la [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) de los creadores de Next.js.

Básicamente sólo tendrás que añadir las variables de env.local antes de lanzar la implementación en Vercel para evitar los errores.

Consulta nuestra [documentación de despliegue en Next.js](https://nextjs.org/docs/deployment) para más detalles.
