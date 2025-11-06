# EcoEnergia Inc — Documentación del proyecto (estado actual)

Este documento describe el estado actual del proyecto, la estructura de archivos, los cambios recientes realizados, cómo ejecutar y probar el sitio localmente, y las tareas pendientes.

## Resumen rápido
- Proyecto: sitio web estático para EcoEnergia Inc.
- Stack: HTML5, CSS3, Vanilla JavaScript.
- Estado actual: Se han eliminado secciones problemáticas ("Desafíos Ultra-Informativos" y la galería de proyectos), se reubicó el footer al final del `index.html`, y se aplicaron mejoras visuales a `#testimonios` y `#mapa`. Se creó `MANUAL_DE_USUARIO.md`.

## Estructura de archivos (actual)

```
EcoEnergia Inc/
├── index.html               # Página principal (estructura y contenido)
├── styles.css               # Estilos globales (contiene reglas para todas las secciones)
├── script.js                # Lógica de interacción (scroll, cálculos, inicializadores)
├── nosotros.html            # Página secundaria (si existe)
├── nosotros-styles.css      # Estilos específicos (si aplica)
├── MANUAL_DE_USUARIO.md     # Manual de usuario / guía para editores (CREADO)
└── README.md                # Este archivo (documentación del estado actual)
```

## Cambios recientes (resumen de acciones realizadas)

- Eliminada la sección "Desafíos Ultra-Informativos" del `index.html`.
  - Se eliminaron o protegieron las llamadas desde `script.js` para evitar errores por elementos no presentes.
- Eliminada la sección `#galeria` (Galería de Proyectos) a pedido del usuario.
- Reubicado el bloque footer/hero con el texto "Impulsamos desarrollo, transformamos vidas" al final de `index.html` (antes de `</body>`).
- Se mejoraron los estilos visuales de `#testimonios` y `#mapa` para integrarlos con la paleta verde/naranja del sitio: avatares, comillas decorativas, sombras sutiles y borde redondeado en el mapa.
- Se detectó y corrigió un error sintáctico en `styles.css` (comentario mal formado) durante las ediciones.
- Se creó `MANUAL_DE_USUARIO.md` con instrucciones para usuarios y editores.

## Estado actual y verificación rápida

- `index.html`: actualizado — footer movido, `#galeria` y sección de desafíos removidas.
- `styles.css`: se quitaron bloques grandes relacionados con la sección de desafíos y se añadieron estilos para testimonios y mapa; sintaxis CSS corregida.
- `script.js`: se eliminaron o rodearon con guards las inicializaciones dependientes de la sección eliminada para prevenir errores en consola (p.ej. verificaciones con `document.querySelector(...)`).
- Documentación: `README.md` (este archivo) actualizado; `MANUAL_DE_USUARIO.md` creado.

Observación: aún pueden quedar reglas CSS aisladas relacionadas con las secciones eliminadas. Recomendado ejecutar una búsqueda en `styles.css` por `challenge`, `ultra-informative-challenges`, `challenge-module` para limpiar selectores residuales.

## Cómo ejecutar localmente (PowerShell en Windows)

1. Abrir PowerShell y navegar al directorio del proyecto:

```powershell
cd "C:\Users\Miguel Miranda\OneDrive\Desktop\6to SEMESTRE\DESARROLLO SOSTENIBLE\EcoEnergia Inc"
```

2. Iniciar un servidor HTTP simple (Python 3):

```powershell
python -m http.server 8000
# o, si tienes varias versiones de Python:
py -3 -m http.server 8000
```

3. Abrir en el navegador: http://127.0.0.1:8000

4. Para detener el servidor: Ctrl+C en la terminal.

## Verificaciones recomendadas al probar (checklist)

- [ ] Abrir la consola del navegador (F12) y revisar errores JavaScript.
- [ ] Probar navegación y enlaces internos (scroll suave, anclas).
- [ ] Revisar que no haya referencias a `expandChallenge` en consola ni en HTML.
- [ ] Revisar responsividad en móvil/tablet.
- [ ] Hacer Ctrl+F5 para evitar caché al validar estilos y scripts.

## Tareas pendientes (prioritarias)

1. Limpiar reglas CSS orfanas relacionadas con la sección eliminada (`.ultra-informative-challenges`, `.challenge-module`, `.challenges-matrix`, `.expand-btn`, etc.).
2. Buscar referencias residuales en el repo: `expandChallenge`, `ultra-informative-challenges`, `challenge-module`, `expand-btn` y eliminarlas o actualizarlas.
3. Finalizar pulido visual de `#testimonios` y `#mapa` (pequeños ajustes de espaciado, fuentes y sombras).
4. Pruebas finales en navegador y documentar los resultados (capturas o notas de consola si se presentan errores).

He incluido estas tareas en la lista de tareas del proyecto (`todo list`) para seguimiento.

## Notas para desarrolladores

- Cuando modifiques `script.js`, usa protecciones para elementos que puedan no existir:

```javascript
const section = document.querySelector('.ultra-informative-challenges');
if (section) {
  // inicializar efectos ligados a la sección
}
```

- Mantén `styles.css` organizado por secciones con comentarios para facilitar búsquedas y limpiezas futuras (p. ej. `/* ===== TESTIMONIOS ===== */`).

## Manual de usuario

El manual de usuario para visitantes y editores fue creado en `MANUAL_DE_USUARIO.md`. Revisa ese archivo para procedimientos paso a paso sobre cómo editar contenido y ejecutar el sitio.

## Changelog corto (últimos cambios relevantes)

- 2025-11-06: Eliminada sección "Desafíos", eliminada `#galeria`, reubicado footer, correcciones CSS, creación de `MANUAL_DE_USUARIO.md`.

## Contacto

Para dudas o cambios, contactar con Miguel Miranda (detalles en el footer del sitio).

---

Archivo generado: documentación del estado actual del proyecto.
# EcoEnergia Inc - Página Web Corporativa

Esta página web replica el diseño visual que solicitaste, con una estructura moderna y responsive que incluye todos los elementos visuales del diseño original.

## 🚀 Características Principales

- **Diseño Responsive**: Se adapta perfectamente a móviles, tablets y desktop
- **Navegación Moderna**: Menú sticky con dropdown y efectos hover
- **Hero Section Impactante**: Con degradado de fondo y animaciones
- **Cards de Servicios**: Tres tarjetas coloridas con iconos y efectos
- **Integración WhatsApp**: Botón flotante y en la navegación
- **Animaciones Suaves**: Efectos de scroll y transiciones elegantes
- **SEO Optimizado**: Estructura HTML semántica

## 📁 Estructura de Archivos

```
EcoEnergia Inc/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript funcional
└── README.md           # Este archivo
```

## 🎨 Personalización

### Cambiar Colores
En el archivo `styles.css`, busca estas variables para cambiar la paleta de colores:

```css
/* Color principal naranja */
#ff8c00 -> Tu color principal

/* Color del hero (azul degradado) */
#1a237e, #3f51b5, #5c6bc0 -> Tus colores del hero

/* Colores de las cards */
.card-orange -> Cambia #ff8c00
.card-green -> Cambia #4CAF50  
.card-blue -> Cambia #2196F3
```

### Cambiar Textos
En `index.html`, personaliza:

1. **Información de contacto** (línea ~12):
```html
<span>Calle Principal #123, Ciudad, País</span>
```

2. **Logo y nombre de empresa** (líneas ~32-36):
```html
<h2>ECOENERGIA</h2>
<span>Energía Sostenible para el Futuro</span>
```

3. **Títulos del Hero** (líneas ~85-87):
```html
<h1>Impulsamos desarrollo, <span class="highlight">Iluminamos tu futuro</span></h1>
<p>Tu descripción personalizada...</p>
```

4. **Contenido de las Cards** (líneas ~98-125):
   - Cambia los títulos, descripciones e iconos
   - Iconos disponibles en [Font Awesome](https://fontawesome.com/icons)

### Cambiar Imágenes de Fondo
Para agregar una imagen de fondo al hero, en `styles.css` línea ~145:

```css
.hero-background {
    background: url('tu-imagen.jpg') center/cover, 
                linear-gradient(135deg, #1a237e 0%, #3f51b5 50%, #5c6bc0 100%);
}
```

### Menú de Navegación
En `index.html` líneas ~40-65, personaliza los enlaces del menú:

```html
<li><a href="#inicio" class="nav-link active">INICIO</a></li>
<li><a href="#nosotros" class="nav-link">NOSOTROS</a></li>
<!-- Agrega o modifica según necesites -->
```

## 📱 Funcionalidades Incluidas

### JavaScript Interactivo
- Menú hamburguesa para móviles
- Scroll suave entre secciones
# EcoEnergia Inc. — Sitio web

Documentación del proyecto y notas rápidas para desarrolladores y editores.

## Resumen
EcoEnergia Inc. es un sitio web estático (HTML, CSS, JavaScript) pensado como presentación corporativa de la iniciativa. Incluye secciones de información, objetivos, proyectos, calculadora de ahorros solares, dashboard de impacto, testimonios y mapa de ubicación.

Este repositorio contiene los archivos principales:

- `index.html` — Página principal (estructura y contenido).
- `styles.css` — Estilos globales del sitio.
- `script.js` — Lógica de interactividad (smooth scroll, cálculos, modales, observadores, etc.).
- `nosotros.html`, `nosotros-styles.css` — Páginas secundarias (si existen).
- `README.md` — Este documento.
- `MANUAL_DE_USUARIO.md` — Manual de usuario y de edición del sitio.

## Cambios recientes importantes
- Se eliminó la sección "Desafíos Ultra-Informativos" del HTML y se limpiaron llamadas JS relacionadas para evitar errores.
- Se eliminó la sección `#galeria` (Galería de Proyectos) a petición del usuario.
- El footer (hero del footer, enlaces y scripts) fue reubicado al final del `index.html` para mantener orden en la estructura.
- Se añadieron mejoras de estilo en las secciones de testimonios y mapa para integrarlas con la paleta del sitio.

## Tecnologías
- HTML5
- CSS3
- Vanilla JavaScript
- No hay dependencias externas obligatorias (algunas fuentes e iconos usan CDN: FontAwesome u otros).

## Estructura de archivos y propósito
- `index.html`: Contiene todas las secciones visibles. Edita contenido directo aquí para cambios de texto principales.
- `styles.css`: Estilos centrales. Cambios aquí afectan todo el sitio. Para modificaciones pequeñas, busca la sección correspondiente por comentarios (por ejemplo, `/* ===== FOOTER PRINCIPAL ===== */`).
- `script.js`: Lógica de interacción. Añade funciones con cuidado; usa `DOMContentLoaded` para inicializaciones.

## Cómo ejecutar el sitio localmente (Windows / PowerShell)
1. Abrir PowerShell y navegar al directorio del proyecto:

```powershell
cd "C:\Users\Miguel Miranda\OneDrive\Desktop\6to SEMESTRE\DESARROLLO SOSTENIBLE\EcoEnergia Inc"
```

2. Iniciar un servidor HTTP simple (Python 3).

```powershell
python -m http.server 8000
# o si tienes varias versiones:
py -3 -m http.server 8000
```

3. Abrir en el navegador: http://127.0.0.1:8000

4. Para detener el servidor: Ctrl+C en la terminal.

> Nota: Si ves `ERR_CONNECTION_REFUSED`, confirma que el servidor Python esté corriendo y que no haya otro proceso ocupando el puerto 8000.

## Edición de contenido
- Textos y secciones: Edita `index.html` directamente. Mantén la semántica y cierra etiquetas correctamente.
- Imágenes: Guarda archivos en la carpeta del proyecto (p. ej. `assets/img/`) y actualiza las rutas en `index.html`.
- Testimonios: La sección `#testimonios` contiene bloques `.testimonial`. Para agregar uno, copia un bloque existente y actualiza texto y autor. Para añadir avatar, usa `<div class="avatar">AB</div>` dentro de `.author-row`.
- Mapa: Edita el `iframe` en la sección `#mapa` con la URL de Google Maps actualizada.

## Deployment (sugerencias)
- Es un sitio estático: puedes desplegarlo en Netlify, GitHub Pages, Vercel o cualquier hosting estático.
- Si usas GitHub Pages, pon el contenido en la rama `gh-pages` o configura desde `main` con la carpeta raíz.

## Accesibilidad y SEO (recomendaciones rápidas)
- Añadir `alt` descriptivos a todas las imágenes.
- Usar headings en orden (h1 → h2 → h3).
- Añadir meta tags en `index.html` (meta description, viewport, og:tags si aplica).

## Problemas conocidos y soluciones
- Si aparece error en consola relacionado con funciones removidas: busca llamadas a `expandChallenge` o a `.ultra-informative-challenges` en `script.js` y elimínalas o envuélvelas en `if (document.querySelector(...))`.
- Si el diseño se desordena tras mover secciones: limpiar caché del navegador (Ctrl+F5) y revisar reglas CSS conflictivas en `styles.css`.

## Cómo contribuir
- Crea una rama por feature: `git checkout -b feature/nombre`.
- Haz commits pequeños y claros.
- Abre un pull request para revisión.

## Contacto
Para dudas sobre este repositorio, contacta a: Miguel Miranda (autor visible en el footer del sitio).

---
Generado automáticamente: documentación inicial del proyecto. Actualiza estos documentos cuando hagas cambios estructurales importantes.