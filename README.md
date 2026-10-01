# 01 · Ejercicios de JavaScript

Apuntes y ejercicios para aprender los **fundamentos de JavaScript** desde cero.

Cada tema tiene una página de **teoría** con ejemplos y una serie de **ejercicios** para practicar. Cuando termines, puedes comparar tu trabajo con las **soluciones**.

> No necesitas instalar nada: solo un navegador y un editor de código (por ejemplo, VS Code).

---

## 📚 Temas

| # | Tema | Qué vas a aprender | Ejercicios |
|---|------|--------------------|:----------:|
| 01 | Introducción | Formas de incluir JavaScript en una página HTML, quién lo ejecuta y para qué sirve | Ejemplos |
| 02 | Variables | Comentarios, la consola, `var`, `let` y `const`, palabras reservadas y cómo nombrar variables | Ejemplos |
| 03 | Strings | Trabajar con textos: `length`, `toUpperCase`, `substring`, `split`, `replace`, `trim`, `includes`… | 10 |
| 04 | Números | Convertir textos en números, redondear y usar el objeto `Math` | 10 |
| 05 | Operadores | Operadores aritméticos, de comparación, lógicos, de asignación y el operador ternario | 10 |
| 06 | Booleanos | Los valores `true` y `false` y cómo usarlos en condiciones | 10 |
| 07 | Objetos | Crear objetos, leer y modificar sus propiedades, métodos, `this` y JSON | 9 |
| 08 | Arrays | Añadir, quitar, buscar, ordenar y transformar elementos con `map`, `filter` y `reduce` | 10 |
| 09 | Condicionales | `if` y `else`, `switch`, el operador ternario, valores truthy y falsy, `??` y `?.` | 10 |
| 10 | Bucles | `for`, `while`, `do...while`, `for...of` y `for...in`, `break` y `continue`, bucles anidados | 10 |
| 11 | Funciones | Declarar funciones, parámetros, `return`, funciones flecha, ámbito de las variables, callbacks y recursividad | 10 |
| 12 | DOM | Seleccionar elementos de la página, cambiar su contenido, sus atributos y sus estilos, crear y eliminar elementos | 10 |
| 13 | Eventos | Responder a clics, teclas y formularios con `addEventListener`, validar formularios y delegación de eventos | 10 |
| 14 | Asincronía | Temporizadores, promesas, `async` / `await`, pedir datos con `fetch` y controlar los errores | 10 |
| 15 | Módulos | Dividir el código en varios archivos con `import` y `export`, cargarlos con `<script type="module">` e importarlos solo cuando hacen falta | 10 |
| 16 | Clases y POO | Crear objetos con `class`, constructor, métodos, propiedades privadas, *getters* y *setters*, y herencia con `extends` | 🚧 Próximamente |
| 17 | Almacenamiento en el navegador | Guardar datos que no se pierden al recargar la página con `localStorage` y `sessionStorage`, usando JSON | 🚧 Próximamente |
| 18 | APIs | Consumir una API pública real: leer su documentación, hacer peticiones, parámetros de búsqueda y mostrar los resultados | 🚧 Próximamente |

---

## 🗂️ Cómo está organizado

```
01EjerciciosJavaScript/
├── index.html          ← Empieza aquí: índice con todos los temas
├── ejercicios/         ← Teoría y ejercicios para resolver
│   ├── 03-Strings/
│   │   ├── index.html      ← Página de teoría
│   │   └── js/
│   │       └── ejercicios.js   ← Aquí escribes tus soluciones
│   └── ...
├── soluciones/         ← Los ejercicios resueltos
│   ├── 03-Strings/
│   └── ...
└── assets/             ← Estilos, scripts y datos comunes (no hace falta tocarlos)
```

---

## 🚀 Cómo trabajar

1. **Descarga el proyecto.** Puedes clonarlo con git:
   ```bash
   git clone https://github.com/AntoniaPuertas/01EjerciciosJavaScript.git
   ```
   o descargarlo como ZIP desde el botón verde **Code → Download ZIP** de GitHub.

2. **Abre el `index.html` de la raíz** en el navegador. Puedes hacerlo con doble clic, con la extensión **Live Server** de VS Code o con un servidor local como WAMP o XAMPP.

3. **Elige un tema y lee la teoría.** Prueba los ejemplos para entender cómo funcionan.

4. **Abre la consola del navegador** con `F12` (o clic derecho → *Inspeccionar* → pestaña **Consola**). Es donde verás los resultados de tus ejercicios.

5. **Resuelve los ejercicios** en el archivo `ejercicios/NN-Tema/js/ejercicios.js`. Cada ejercicio tiene su enunciado y un hueco que dice `// Escribe aquí tu solución`. Guarda el archivo y recarga la página para ver el resultado.

6. **Compara con la solución** usando el botón **Ver soluciones** de cada tema.

---

## 💡 Consejos

- **Intenta resolver cada ejercicio antes de mirar la solución.** Equivocarse forma parte de aprender.
- **Tu solución no tiene que ser igual que la del proyecto.** Casi siempre hay varias formas correctas de resolver un problema: si el resultado es el esperado, está bien.
- **Si algo no funciona, mira la consola.** Los errores aparecen en rojo e indican el archivo y la línea donde está el problema.
- **Usa `console.log()`** para ver el valor de tus variables mientras programas.
- **Si un ejercicio usa `prompt()`**, aparecerá una ventana pidiendo datos cada vez que recargues la página. Cuando lo termines, puedes comentar esa llamada para que no te moleste mientras haces los siguientes.
- **Si la página se queda bloqueada** en el tema de Bucles, seguramente has escrito un bucle infinito: cierra la pestaña, comprueba que la variable de la condición cambia en cada vuelta y vuelve a abrirla.
- **En el tema de Arrays** cada ejercicio va dentro de una función. Escribe tu código dentro de ella: así tus variables no chocan con las de los ejemplos de ese tema.
- **En los temas del DOM y de Eventos** los ejercicios cambian la propia página: los resultados se ven en la **Zona de prácticas** que hay al final de la teoría. En Eventos, además, tienes que interactuar con ella (hacer clic, escribir, pulsar teclas) para comprobar que tu código funciona.
- **En el tema de Asincronía**, los ejercicios que cargan datos con `fetch` solo funcionan si abres la página desde un servidor (WAMP, XAMPP o Live Server). Con doble clic, el navegador bloquea las peticiones.
- **En el tema de Módulos** escribes en varios archivos: los módulos de la carpeta `js/modulos/` y `ejercicios.js`, que los importa. Descomenta cada `import` solo cuando el módulo ya exporte lo que importa: si falta algo, no se ejecuta ningún ejercicio. También necesita un servidor.
- **¿Prefieres otros colores?** El botón de la esquina superior derecha cambia entre tema claro y oscuro, y la página recuerda tu elección.

---

## 👩‍💻 Autoría

Proyecto de [AntoniaPuertas](https://github.com/AntoniaPuertas), creado con fines educativos.
