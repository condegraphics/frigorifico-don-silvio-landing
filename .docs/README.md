# Frigorífico Don Silvio

Landing estática para consultas minoristas y mayoristas, implementada en HTML,
CSS y JavaScript sin dependencias.

## Vista previa

Abrí `index.html` en el navegador. Para probarla desde un servidor local,
ejecutá `python -m http.server 8000` desde la carpeta del proyecto y entrá a
`http://localhost:8000`.

Las fotos y el logo utilizados están en `img/`. El contenido, la dirección
visual y las decisiones pendientes están documentados en `CONTENT.md`,
`DESIGN.md` y `PROJECT-BRIEF.md`.

## Sitio publicado

https://condegraphics.github.io/frigorifico-don-silvio-landing/

## Despliegue (cPanel, AMPM Hosting)

La subida es manual. En el Administrador de archivos de cPanel (o por FTP),
dentro de `public_html/`, subí:

- `index.html`, `404.html`, `styles.css`, `script.js`
- `robots.txt`, `sitemap.xml` y `.htaccess` (activá "Mostrar archivos ocultos")
- las carpetas `img/` y `pdf/`

No hace falta subir los `.md` ni `.git`. Antes de subir, borrá el contenido de
WordPress y activá SSL (AutoSSL) en cPanel, porque `.htaccess` fuerza HTTPS y
`www`. Después enviá `sitemap.xml` en Google Search Console.

Los horarios y datos de sucursales pueden cambiar; confirmalos por WhatsApp.