# Manual de Usuario — EcoEnergia Inc.

Versión: 1.1

Autor: Miguel Miranda

Fecha: 2025-11-06

Resumen corto: manual para usuarios finales y editores, ahora ampliado con requisitos, criterios de aceptación, casos de prueba y guía para recopilar evidencia para entrega.

## Tabla de contenidos

- 1. Introducción
- 2. Requisitos del entorno
- 3. Manual para usuarios (visitantes)
- 4. Guía rápida para editores / administradores
- 5. Criterios de aceptación y casos de prueba
- 6. Evidencia requerida para entrega
- 7. Checklist antes de publicar
- 8. Notas finales y changelog

---

## 1. Introducción

Este manual está dividido en dos partes principales: (A) uso del sitio para visitantes y (B) guía para editores/administradores. Se ha ampliado para incluir pasos de prueba y evidencia útil para entregas académicas.

## 2. Requisitos del entorno

- Sistema operativo: Windows 10/11 recomendado (funciona en macOS/Linux con comandos equivalentes).
- Python 3.8+ (para el servidor HTTP simple). Verificar con `python --version`.
- Navegador recomendado: Google Chrome (actualizado) o Firefox. Habilitar herramientas de desarrollador (F12).
- Conexión a internet para recursos CDN (opcional si se reemplazan por locales).

## 3. Manual para usuarios (visitantes)

### Navegación básica
- El menú principal permite navegar a Inicio, Nosotros, Calculadora, Testimonios y Ubicación.
- En móviles, el menú colapsa en un icono "hamburger".

### Botones y acciones principales
- Botón "CONOCE ECOENERGIA INC." → ancla a `#nosotros`.
- Botón flotante WhatsApp → inicia conversación con la empresa.
- Botón "ir arriba" → vuelve al inicio.

### Calculadora de Ahorros Solares
- Campos: `monthlyBill`, `roofArea`, `propertyType`, `location`.
- Resultado: muestra ahorro estimado y tiempo de retorno.

### Testimonios y Mapa
- Testimonios: bloques `.testimonial` con autor y avatar.
- Mapa: `iframe` de Google Maps con ubicación.

### Problemas comunes y soluciones rápidas
- Imagen no carga: recargar con Ctrl+F5.
- Botón inactivo: revisar consola (F12) y anotar errores.

## 4. Guía rápida para editores / administradores

### Ejecutar servidor local (PowerShell)

```powershell
cd "C:\Users\Miguel Miranda\OneDrive\Desktop\6to SEMESTRE\DESARROLLO SOSTENIBLE\EcoEnergia Inc"
python -m http.server 8000
# Abrir http://127.0.0.1:8000
```

### Editar contenido
- `index.html`: editar textos y secciones.
- `styles.css`: añadir reglas bajo comentarios de sección.
- `script.js`: añadir inicializaciones en `DOMContentLoaded` y proteger con `if (el) {...}`.

### Añadir testimonial (ejemplo)

```html
<div class="testimonial">
  <p>“Texto del testimonio...”</p>
  <div class="author-row">
    <div class="avatar">AM</div>
    <span>- Ana María, líder comunitaria</span>
  </div>
</div>
```

## 5. Criterios de aceptación y casos de prueba

Estos criterios permiten a un profesor verificar rápidamente la funcionalidad.

### Criterios de aceptación (CA)

- CA1: La página principal carga correctamente en el navegador y el servidor local se inicia con Python.
- CA2: La calculadora muestra resultados al ingresar valores válidos.
- CA3: No aparecen errores JavaScript fatales en la consola relacionados con funciones eliminadas (p. ej. `expandChallenge`).
- CA4: El mapa (iframe) carga y permite zoom/visualización.

### Casos de prueba (3 casos)

- Test 1 — Iniciar servidor y abrir página
  1. Ejecutar `python -m http.server 8000`.
  2. Abrir http://127.0.0.1:8000 → Resultado esperado: página principal visible.

- Test 2 — Calculadora funcional
  1. En la calculadora, ingresar: Factura mensual = 200000, Área techo = 30, Tipo = residencial.
  2. Pulsar calcular o completar formulario → Resultado esperado: panel de resultados con valores numéricos (ahorro estimado, inversión aproximada, tiempo de retorno).

- Test 3 — Consola limpia de errores críticos
  1. Abrir la consola del navegador (F12) y recargar la página.
  2. Resultado esperado: No hay errores `Uncaught ReferenceError` ni errores fatales.

## 6. Evidencia requerida para entrega

Para entregar al profesor, recolecta la siguiente evidencia mínima:

- `evidencia-01-home.png`: captura de la página principal cargada.
- `evidencia-02-calculadora.png`: captura del panel de resultados de la calculadora.
- `evidencia-03-consola.txt`: exportación o captura del contenido de la consola del navegador mostrando ausencia de errores críticos.
- `README.md` y `MANUAL_DE_USUARIO.md`: versiones finales incluidas en la entrega.

Instrucciones rápidas para capturas:

- Windows: usar Snipping Tool o `PrtSc` y pegar en Paint, luego guardar como PNG.
- Consola: copiar el texto de la consola y pegarlo en un archivo `.txt`.

## 7. Checklist antes de publicar (entrega)

- [ ] `README.md` actualizado
- [ ] `MANUAL_DE_USUARIO.md` actualizado
- [ ] Evidencias `evidencia-01-home.png`, `evidencia-02-calculadora.png`, `evidencia-03-consola.txt`
- [ ] Probar en móvil y desktop
- [ ] Comprimir carpeta de entrega (.zip) con nombre: `EcoEnergia_Ing_Entrega_<fecha>.zip`

## 8. Notas finales y changelog

- Changelog corto:
  - 2025-11-06: Versión 1.1 — ampliado manual con criterios de aceptación y pruebas.

---

Firma de entrega: Miguel Miranda

*Fin del manual ampliado.*