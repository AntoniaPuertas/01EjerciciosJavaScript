# Registro de cambios

Todos los cambios relevantes de este proyecto se documentan en este archivo.
Está pensado para el profesorado; la información para el alumnado está en el [README](README.md).

El formato se basa en [Keep a Changelog 2.0.0](https://keepachangelog.com/en/2.0.0/).
El proyecto no usa números de versión: cada bloque de cambios se identifica por su fecha de publicación.

## [Sin publicar]

### Añadido

- **Índice general** (`index.html` en la raíz) con una tabla de todos los temas y enlaces a su teoría y a su solución.
- **Tema 08 · Arrays**: teoría completa. Incluye índices y `at()`, métodos que modifican el array original frente a los que devuelven uno nuevo (`toSorted`, `toReversed`, `toSpliced` y `with`, de ES2023), búsqueda, `map`/`filter`/`reduce`, desestructuración, `Set`, `Object.groupBy` (ES2024) y las novedades de ECMAScript 2026 (`Math.sumPrecise` y `Array.fromAsync`). Añade 10 ejercicios propios.
- **Tema 09 · Condicionales**: tema nuevo con teoría (`if`/`else`, `===` frente a `==`, truthy y falsy, ternario, `switch`, `??`, `?.` y buenas prácticas) y 10 ejercicios.
- **Soluciones** de los ejercicios de los temas 06 · Booleanos (10) y 07 · Objetos (9).
- **Archivos de enunciados** (`ejercicios/NN-Tema/js/ejercicios.js`) para los temas 03 a 09. Cada ejercicio tiene su enunciado, un encabezado en consola y un hueco para la solución, y los datos de partida ya están declarados.
- **Páginas de soluciones** (`soluciones/NN-Tema/index.html`) para los temas 03 a 09.
- **Barra de navegación** en todas las páginas, con enlaces al índice y entre la teoría y la solución de cada tema.
- **Tema claro y oscuro**:
  - Hay un botón en la esquina superior derecha de todas las páginas.
  - El script `assets/js/tema.js` aplica el tema desde el `<head>`, así que no hay parpadeo.
  - La primera vez sigue la preferencia del sistema operativo; si el usuario elige un tema, se guarda en `localStorage`.
  - Si `localStorage` no está disponible, la página sigue funcionando.
  - Los dos temas cumplen el contraste mínimo de 4,5:1 de las pautas WCAG; el caso más justo es 5,59:1.
- **README** dirigido al alumnado y este registro de cambios.

### Cambiado

- **Estructura del proyecto** dividida en dos partes:
  - `ejercicios/`: teoría, ejemplos y enunciados.
  - `soluciones/`: ejercicios resueltos.
  - Las soluciones existentes se han trasladado a `soluciones/NN-Tema/js/soluciones.js`.
  - Las rutas a los estilos pasan a ser `../../assets/css/style.css`.
- **En 08 · Arrays**, los ejercicios van dentro de funciones. Así sus variables no chocan con las de `app.js`, que declara `carrito` y `numeros` con `const` en la misma página.
- **`assets/css/style.css`** reorganizado con **variables CSS** en `:root`: colores, fuentes, tamaños de texto, espaciados y medidas. El tema claro solo redefine los colores en `:root[data-tema="claro"]`.
- **Font Awesome** actualizado de la versión 4.7 a la **7.3.1**; las clases `fa fa-…` pasan a ser `fa-solid fa-…`.
- **Bloques de código** de la introducción de Arrays: ahora usan el contenedor `code-container` y se ha corregido su sangrado.

### Eliminado

- Declaraciones duplicadas en `style.css`: en `p`, el `margin` y el `text-align` que no se aplicaban; y la regla `.code-container code`, que estaba repetida.
- Del README, la información destinada al profesorado, que ahora está en este archivo.

### Arreglado

| Archivo | Problema | Corrección |
|---------|----------|------------|
| Arrays (`app.js`) | `carrito2` se declaraba con `const` y luego se reasignaba, lo que lanzaba `TypeError` y detenía el script antes de los ejemplos de desestructuración, `forEach` y `map`. | Declarado con `let`. |
| Operadores (ej. 9) | `!num % 3 === 0` se evaluaba como `(!num) % 3 === 0`, así que esas ramas nunca se cumplían. | Sustituido por `num % 3 !== 0` y `num % 5 !== 0`. |
| Operadores (ej. 10) | `esPositivo()` se llamaba sin argumento y no contemplaba el cero. | Ternario anidado (positivo / negativo / cero) y llamadas de ejemplo. |
| Operadores | Variables sin declarar (`suma`, `resta`, `multiplicacion`, `division`, `area`, `segundos`) creaban globales implícitas y fallaban en modo estricto. | Declaradas con `const`. |
| Números (ej. 5 y 10) | `prompt()` devuelve un string, así que `Number.isFinite()` y `Number.isInteger()` siempre daban `false`. | Conversión previa con `Number()`. |
| Introducción (`index.html`) | Faltaba cerrar el último `<li>` y el `<ul>`. | Etiquetas cerradas. |
| Introducción (`01JavaScript.js`) | El comentario citaba `class="saludo"` (es `id`) y números de línea desactualizados. | Comentario corregido sin números de línea. |
| Operadores (`index.html`) | `lang="en"` en una página en español. | Cambiado a `lang="es"`. |

## Notas para el profesorado

- **Comprobación:** las soluciones de los temas 03 a 09 se han ejecutado en Node.js en modo estricto, simulando `prompt()`, y los resultados coinciden con los comentarios del código. El aspecto visual de las páginas debe revisarse en el navegador.
- **Carpetas antiguas:** tras la reorganización, en la raíz pueden quedar las carpetas `01-Introduccion` … `09-Condicionales` vacías; se pueden borrar.
- **Licencia:** el proyecto no incluye archivo de licencia. Si se quiere permitir su reutilización, se puede añadir una (por ejemplo, MIT o, para material docente, Creative Commons BY-SA).
- **Temas pendientes:** 10 · Bucles, 11 · Funciones, 12 · DOM, 13 · Eventos y 14 · Asincronía (anunciados en el README como "Próximamente").
- **Al publicar estos cambios:** sustituye `## [Sin publicar]` por la fecha de publicación, por ejemplo `## 2026-09-28`, y abre una nueva sección `## [Sin publicar]` encima para los cambios siguientes.
