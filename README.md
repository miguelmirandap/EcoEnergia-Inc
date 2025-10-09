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
- Animaciones al hacer scroll
- Efecto parallax en el hero
- Navbar que cambia con el scroll
- Animación de typing en el título
- Lazy loading para imágenes

### Efectos Visuales
- Botones con hover effects
- Cards con animaciones de entrada
- Partículas flotantes en el hero
- Transiciones suaves
- Box shadows dinámicas

### Responsive Design
- Mobile-first approach
- Breakpoints optimizados
- Menú adaptativo
- Tipografía escalable
- Imágenes responsive

## 🛠️ Instalación y Uso

1. **Descarga los archivos** en una carpeta
2. **Abre index.html** en tu navegador
3. **Personaliza** según tus necesidades
4. **Sube a tu hosting** cuando esté listo

## 🌐 Hosting Recomendado

Para subir tu página web, puedes usar:
- **Netlify** (gratis): Arrastra la carpeta a netlify.app
- **Vercel** (gratis): Conecta con GitHub
- **GitHub Pages** (gratis): Sube a un repositorio GitHub
- **Hosting tradicional**: Sube via FTP

## 📧 Personalizar Formularios

Si necesitas formularios de contacto, agrega este código en el HTML:

```html
<form class="contact-form">
    <input type="text" placeholder="Nombre" required>
    <input type="email" placeholder="Email" required>
    <textarea placeholder="Mensaje" required></textarea>
    <button type="submit">Enviar</button>
</form>
```

El JavaScript ya incluye manejo básico de formularios.

## 🎯 SEO y Performance

La página incluye:
- Meta tags optimizados
- Estructura HTML semántica  
- Carga lazy de imágenes
- CSS y JS optimizados
- Performance monitoring

## 🔧 Próximos Pasos Sugeridos

1. **Agregar más secciones**: Sobre nosotros, testimonios, etc.
2. **Integrar backend**: Para formularios funcionales
3. **Agregar blog**: Con sistema de contenidos
4. **Implementar analytics**: Google Analytics o similar
5. **Optimizar SEO**: Meta descriptions, structured data

## 📞 Soporte

Si necesitas ayuda para personalizar algo específico, los archivos están bien comentados y organizados para facilitar las modificaciones.

---

**¡Tu página está lista para usar! Solo personaliza los textos, colores e imágenes según tus necesidades.**