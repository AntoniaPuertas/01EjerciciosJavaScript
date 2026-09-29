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
- **Tema 10 · Bucles**: tema nuevo con teoría (`for`, `while`, `do...while`, `for...of`, `for...in`, `Object.entries()`, `break`, `continue`, bucles anidados, bucles infinitos y cuándo usar cada tipo) y 10 ejercicios. Las soluciones se han comprobado en Node.js en modo estricto.
- **Tema 11 · Funciones**: tema nuevo con teoría (declaración, expresión y función flecha, `return`, hoisting, parámetros por defecto y rest, objetos como parámetro, ámbito, callbacks, closures, recursividad, funciones puras y JSDoc) y 10 ejercicios. Las soluciones y los ejemplos de la teoría se han comprobado en Node.js.
- **Tema 12 · DOM**: tema nuevo con teoría (árbol del DOM, `querySelector`/`querySelectorAll`, `textContent` frente a `innerHTML` y el riesgo de XSS, `setHTML()` del Sanitizer API como novedad aún no disponible en Safari, atributos y `dataset`, `style` y `classList`, crear, insertar y eliminar elementos, navegación por el árbol, `closest()` y `defer`) y 10 ejercicios. Es el primer tema cuyos ejercicios modifican la página: la teoría y la solución incluyen la misma **zona de prácticas**. Las soluciones se han comprobado en jsdom.
- **Estilos de la zona de prácticas** en `style.css` y dos variables de color nuevas para ambos temas (`--color-error` y `--color-texto-sobre-acento`), con contrastes comprobados. Las tarjetas agotadas no usan el texto atenuado, que en el tema oscuro solo alcanzaba 3,1:1 sobre el fondo.
- **Tema 13 · Eventos**: tema nuevo con teoría (`addEventListener`, eventos de ratón, puntero, teclado, formulario y página, el objeto evento, `preventDefault()`, formularios con `FormData` y validación HTML, propagación y delegación, `removeEventListener`, `once`, `AbortController` y accesibilidad) y 10 ejercicios interactivos con su propia zona de prácticas: contador, panel desplegable, campos en directo, formulario validado, lista con delegación y pestañas accesibles. Las soluciones se han comprobado en jsdom simulando clics, escritura, teclas y envíos de formulario.
- **Estilos de controles** (botones, campos, mensajes y pestañas) en `style.css` para ambos temas, con contorno visible al navegar con el teclado. Los bordes de los campos usan el color atenuado para cumplir el contraste mínimo de 3:1 que piden las pautas WCAG para los controles.
- **Tema 14 · Asincronía**: tema nuevo con teoría (síncrono frente a asíncrono, `setTimeout` y `setInterval`, callbacks, promesas, `async`/`await` con `try...catch`, `fetch` con `response.ok` y envío de datos, rutas relativas a la página, necesidad de un servidor y CORS, `Promise.all`/`allSettled`/`race`/`any`, y como novedades `AbortSignal.timeout()`, `Promise.withResolvers()` y `Promise.try()`) y 10 ejercicios con zona de prácticas: temporizadores, cuenta atrás, promesas propias, semáforo con `await`, carga de JSON, error 404, carga en paralelo, buscador con *debounce* y límite de tiempo con `Promise.race`. Las soluciones se han comprobado en jsdom con un servidor HTTP local y tiempos reales.
- **Datos de ejemplo** en `assets/datos/` (`productos.json` y `categorias.json`), compartidos por la página de ejercicios y la de soluciones del tema 14.
- **Estilo para botones desactivados** mientras se espera una tarea asíncrona.
- **Índice general y README**: los 14 primeros temas están disponibles, y los temas 15 · Módulos, 16 · Clases y POO, 17 · Almacenamiento en el navegador y 18 · APIs aparecen como "Próximamente".
- **Soluciones** de los ejercicios de los temas 06 · Booleanos (10) y 07 · Objetos (9).
- **Archivos de enunciados** (`ejercicios/NN-Tema/js/ejercicios.js`) para los temas 03 a 14. Cada ejercicio tiene su enunciado, un encabezado en consola y un hueco para la solución, y los datos de partida ya están declarados.
- **Páginas de soluciones** (`soluciones/NN-Tema/index.html`) para los temas 03 a 14.
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

- **Comprobación:** las soluciones de los temas 03 a 11 se han ejecutado en Node.js en modo estricto, simulando `prompt()`, y las de los temas 12, 13 y 14 en jsdom (un navegador simulado) con su zona de prácticas, simulando las interacciones del usuario y, en el 14, sirviendo los datos con un servidor HTTP local. `Promise.try()` no se ha podido ejecutar porque la versión de Node.js usada (22) no la incluye; su disponibilidad en navegadores se basa en el anuncio de web.dev de enero de 2025. Los resultados coinciden con los comentarios del código. El aspecto visual de las páginas debe revisarse en el navegador.
- **Zonas de prácticas de los temas 12, 13 y 14:** su HTML está repetido en la página de teoría y en la de soluciones de cada tema. Si se cambia un ejercicio, hay que actualizar las dos copias.
- **Tema 14 y `file://`:** los ejercicios 6 a 9 usan `fetch` y no funcionan abriendo la página con doble clic. La solución muestra un aviso específico en ese caso, y el README, la teoría y los enunciados lo explican.
- **Carpetas antiguas:** tras la reorganización, en la raíz pueden quedar las carpetas `01-Introduccion` … `09-Condicionales` vacías; se pueden borrar.
- **Licencia:** el proyecto no incluye archivo de licencia. Si se quiere permitir su reutilización, se puede añadir una (por ejemplo, MIT o, para material docente, Creative Commons BY-SA).
- **Temas pendientes:** 15 · Módulos, 16 · Clases y POO, 17 · Almacenamiento en el navegador y 18 · APIs, anunciados en el README y en el índice como "Próximamente". El orden sigue sus dependencias: las clases se organizan en módulos, el almacenamiento usa objetos y JSON, y el tema de APIs combina todo lo anterior con `fetch`.
- **Tema 15 y `file://`:** igual que `fetch`, los módulos (`<script type="module">`) no funcionan abriendo la página con doble clic. Habrá que avisarlo como en el tema 14.
- **Tema 18:** conviene elegir una API pública gratuita, sin clave y que permita peticiones desde el navegador (CORS). Antes de crearlo hay que comprobar que sigue disponible, porque las APIs públicas cambian o desaparecen con el tiempo.
- **Al publicar estos cambios:** sustituye `## [Sin publicar]` por la fecha de publicación, por ejemplo `## 2026-09-28`, y abre una nueva sección `## [Sin publicar]` encima para los cambios siguientes.
