# Hotel Villa Celeste

Página web oficial del Hotel Villa Celeste — Tlapa de Comonfort, Guerrero.

Sitio construido con **Vite + React + TypeScript + Tailwind CSS**. El código de la
aplicación vive en [`hotel-app/`](hotel-app).

## Desarrollo local

```bash
cd hotel-app
npm install
npm run dev
```

El servidor de desarrollo queda en `http://localhost:5173/HotelVillaCeleste/`.

## Despliegue (GitHub Pages)

El sitio se publica automáticamente con GitHub Actions en cada `push` a `main`
mediante el workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
que construye `hotel-app` y publica la carpeta `dist`.

URL pública: <https://Baltazardv.github.io/HotelVillaCeleste/>

### Activar GitHub Pages (una sola vez)

En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions**
como _Source_.

> Nota: la app se sirve desde el sub-path `/HotelVillaCeleste/`. Esto está
> configurado en `vite.config.ts` (`base`), en el `basename` del router y en el
> fallback `404.html` para que las rutas funcionen al recargar.
