Despliegue del sitio — instrucciones rápidas

Opciones soportadas:
- GitHub Pages (recomendado para páginas estáticas y control por git)
- Netlify / Vercel (drag & drop o conexión con repo)

1) GitHub Pages (automático con Actions)

- Ya incluimos un workflow en `.github/workflows/pages.yml`. Para desplegar:
  1. Asegúrate de tener el repositorio remoto conectado a GitHub y que estás en la rama `main`.
  2. Haz commit y push de todos los cambios:

```powershell
git add .
git commit -m "Preparar despliegue: archivos estáticos y workflow pages"
git push origin main
```

  3. GitHub Actions ejecutará el workflow y publicará el contenido del repo raíz en GitHub Pages.
  4. Revisa la pestaña "Actions" en GitHub para ver el progreso del job y la salida.
  5. Una vez desplegado, ve a Settings → Pages para confirmar la URL (normalmente `https://<tu-usuario>.github.io/<repo-name>/`).

Notas:
- Si deseas publicar en la raíz de usuario (sin nombre de repo), deberías usar la rama `gh-pages` de un repositorio especial `username.github.io`.
- Para un dominio personalizado, crea un archivo `CNAME` con tu dominio en la raíz del repo y configúralo en la sección Pages.

2) Netlify (drag & drop)

- Abre https://app.netlify.com/drop y arrastra la carpeta del sitio (o el zip) para desplegar.
- Alternativa: conecta el repositorio GitHub desde Netlify y configura deploy automático.

3) Vercel

- Inicia sesión en https://vercel.com, importa el repo desde GitHub y despliega (nivel gratuito para sitios estáticos).

Problemas comunes
- Error: permisos insuficientes en Actions — asegúrate que el repo está en una cuenta con Actions habilitadas.
- Pagina no actualiza tras push — revisar la ejecución del workflow en Actions y el contenido del artefacto subido.
