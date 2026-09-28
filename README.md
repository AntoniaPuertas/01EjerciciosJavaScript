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
| 10 | Bucles | `for`, `while`, `do...while`, `for...of` y `for...in`, `break` y `continue` | 🚧 Próximamente |
| 11 | Funciones | Declarar funciones, parámetros, `return`, funciones flecha y ámbito de las variables | 🚧 Próximamente |
| 12 | DOM | Seleccionar elementos de la página, cambiar su contenido y sus estilos, crear y eliminar elementos | 🚧 Próximamente |
| 13 | Eventos | Responder a clics, teclas y formularios con `addEventListener` | 🚧 Próximamente |
| 14 | Asincronía | Temporizadores, promesas, `async` / `await` y pedir datos con `fetch` | 🚧 Próximamente |

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
└── assets/             ← Estilos y scripts comunes (no hace falta tocarlos)
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
- **En el tema de Arrays** cada ejercicio va dentro de una función. Escribe tu código dentro de ella: así tus variables no chocan con las de los ejemplos de ese tema.
- **¿Prefieres otros colores?** El botón de la esquina superior derecha cambia entre tema claro y oscuro, y la página recuerda tu elección.

---

## 👩‍💻 Autoría

Proyecto de [AntoniaPuertas](https://github.com/AntoniaPuertas), creado con fines educativos.
