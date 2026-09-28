/*
Ejercicios para practicar con Arrays:

1. Crea un array con 5 colores. Muestra en la consola el primer color, el último
   (de dos formas: con length y con at()) y cuántos colores hay.

2. Crea una lista de la compra con 3 productos y, mostrando la lista después de cada paso:
    - Añade un producto al final y otro al principio.
    - Inserta "pan" en la segunda posición con splice().
    - Elimina el último y el primer producto.

3. Tienes dos listas de invitados a una fiesta. Comprueba con includes() si "Marta" está
   en la primera lista y, si no está, añádela. Después une las dos listas en una sola
   sin nombres repetidos.

4. Dado un array de notas, calcula la media recorriéndolo de tres formas distintas:
   con un bucle for, con for...of y con forEach().

5. Dado un array de precios sin IVA, crea con map() un nuevo array con los precios
   con un 21 % de IVA, redondeados a 2 decimales. El array original no debe cambiar.

6. Dado un array de productos (nombre, precio y stock), obtén con filter():
    - Los productos que están en stock.
    - Los productos en stock que cuestan menos de 50 €.

7. Dado un array de alumnos (nombre y nota):
    - Busca con find() al alumno "Carlos" y muestra su nota.
    - Obtén con findIndex() la posición de "Elena".
    - Obtén con findLast() el último alumno suspendido.
    - Comprueba con some() si hay algún sobresaliente y con every() si han aprobado todos.

8. Dado un carrito (nombre, precio y cantidad de cada producto), calcula con reduce()
   el número total de artículos y el importe total.

9. Ordenación:
    - Ordena el array [10, 1, 25, 3, 100] de menor a mayor. ¿Qué pasa si usas sort() sin argumentos?
    - Ordena un array de productos por precio sin modificar el original (toSorted()).
    - Obtén una copia del array invertida con toReversed().

10. Mini-tienda. Dado un catálogo de productos (nombre, categoría, precio y stock):
    - Crea un array con los nombres de los productos disponibles, en mayúsculas.
    - Calcula el valor total del inventario (precio × stock) encadenando métodos.
    - Agrupa los productos por categoría con Object.groupBy().
*/

// Cada ejercicio va dentro de su propia función. Así sus variables no chocan entre sí ni con las
// de js/app.js si copias alguna solución en la página de ejercicios, donde se cargan los dos archivos.

// Ejercicio 1
function ejercicio1() {
    console.log("--- Ejercicio 1 ---");
    const colores = ["rojo", "verde", "azul", "amarillo", "violeta"];

    console.log("Primero:", colores[0]);
    // El último índice es siempre length - 1, porque los índices empiezan en 0
    console.log("Último (length):", colores[colores.length - 1]);
    // at() admite índices negativos: -1 es el último, -2 el penúltimo...
    console.log("Último (at):", colores.at(-1));
    console.log("Cantidad:", colores.length);
}

// Ejercicio 2
function ejercicio2() {
    console.log("--- Ejercicio 2 ---");
    const compra = ["leche", "huevos", "arroz"];

    compra.push("tomates");        // al final
    console.log(compra);
    compra.unshift("café");        // al principio
    console.log(compra);
    // splice(posición, cuántos borrar, elementos a insertar)
    compra.splice(1, 0, "pan");    // en la posición 1, sin borrar nada
    console.log(compra);
    compra.pop();                  // quita el último
    console.log(compra);
    compra.shift();                // quita el primero
    console.log(compra);
}

// Ejercicio 3
function ejercicio3() {
    console.log("--- Ejercicio 3 ---");
    const invitados1 = ["Ana", "Luis", "Sara"];
    const invitados2 = ["Luis", "Pablo", "Marta", "Ana"];

    if (!invitados1.includes("Marta")) {
        invitados1.push("Marta");
    }
    console.log(invitados1);

    // Un Set no admite valores repetidos. Con spread lo convertimos de nuevo en array.
    const todos = [...new Set([...invitados1, ...invitados2])];
    console.log(todos); // ["Ana", "Luis", "Sara", "Marta", "Pablo"]
}

// Ejercicio 4
function ejercicio4() {
    console.log("--- Ejercicio 4 ---");
    const notas = [7, 5.5, 9, 6, 8.5];

    // Bucle for clásico: controlamos el índice
    let suma1 = 0;
    for (let i = 0; i < notas.length; i++) {
        suma1 += notas[i];
    }

    // for...of: recorre directamente los valores
    let suma2 = 0;
    for (const nota of notas) {
        suma2 += nota;
    }

    // forEach: ejecuta una función por cada elemento
    let suma3 = 0;
    notas.forEach((nota) => {
        suma3 += nota;
    });

    console.log("Media (for):", suma1 / notas.length);
    console.log("Media (for...of):", suma2 / notas.length);
    console.log("Media (forEach):", suma3 / notas.length);
}

// Ejercicio 5
function ejercicio5() {
    console.log("--- Ejercicio 5 ---");
    const preciosSinIva = [10, 24.99, 3.5, 100];

    // toFixed devuelve un string, así que lo convertimos de nuevo a número
    const preciosConIva = preciosSinIva.map((precio) => Number((precio * 1.21).toFixed(2)));

    console.log("Sin IVA:", preciosSinIva);  // el original no cambia
    console.log("Con IVA:", preciosConIva);  // [12.1, 30.24, 4.23, 121]

    // Curiosidad: 3.5 * 1.21 debería dar 4.235 y redondear a 4.24, pero da 4.23.
    // Los decimales se guardan en binario de forma aproximada y 4.235 queda como 4.2349999...
    // Por eso, para dinero, se suele trabajar en céntimos (números enteros).
}

// Ejercicio 6
function ejercicio6() {
    console.log("--- Ejercicio 6 ---");
    const productos = [
        { nombre: "Auriculares", precio: 35, stock: 10 },
        { nombre: "Webcam", precio: 60, stock: 0 },
        { nombre: "Alfombrilla", precio: 12, stock: 25 },
        { nombre: "Micrófono", precio: 85, stock: 3 },
        { nombre: "Hub USB", precio: 22, stock: 0 },
    ];

    const enStock = productos.filter((producto) => producto.stock > 0);
    const enStockBaratos = productos.filter((producto) => producto.stock > 0 && producto.precio < 50);

    console.table(enStock);
    console.table(enStockBaratos);
}

// Ejercicio 7
function ejercicio7() {
    console.log("--- Ejercicio 7 ---");
    const alumnos = [
        { nombre: "Laura", nota: 8 },
        { nombre: "Carlos", nota: 4 },
        { nombre: "Elena", nota: 9.5 },
        { nombre: "Jorge", nota: 3 },
        { nombre: "Nuria", nota: 6 },
    ];

    // find devuelve el primer elemento que cumple la condición (o undefined)
    const carlos = alumnos.find((alumno) => alumno.nombre === "Carlos");
    console.log(`Nota de Carlos: ${carlos.nota}`);

    // findIndex devuelve la posición (o -1 si no lo encuentra)
    console.log("Posición de Elena:", alumnos.findIndex((alumno) => alumno.nombre === "Elena"));

    // findLast busca empezando por el final
    const ultimoSuspenso = alumnos.findLast((alumno) => alumno.nota < 5);
    console.log("Último suspenso:", ultimoSuspenso.nombre); // Jorge

    // some: ¿al menos uno cumple? / every: ¿todos cumplen?
    console.log("¿Algún sobresaliente?", alumnos.some((alumno) => alumno.nota >= 9));  // true
    console.log("¿Han aprobado todos?", alumnos.every((alumno) => alumno.nota >= 5)); // false
}

// Ejercicio 8
function ejercicio8() {
    console.log("--- Ejercicio 8 ---");
    const carrito = [
        { nombre: "Camiseta", precio: 15, cantidad: 2 },
        { nombre: "Pantalón", precio: 35, cantidad: 1 },
        { nombre: "Calcetines", precio: 4.5, cantidad: 4 },
    ];

    // reduce(función, valorInicial): el acumulador empieza en 0 y en cada vuelta
    // le sumamos lo que aporta el producto actual
    const totalArticulos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    const importeTotal = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

    console.log(`Artículos: ${totalArticulos}`);          // 7
    console.log(`Total: ${importeTotal.toFixed(2)} €`);    // 83.00 €
}

// Ejercicio 9
function ejercicio9() {
    console.log("--- Ejercicio 9 ---");
    const numeros = [10, 1, 25, 3, 100];

    // Sin argumentos, sort() compara los elementos como TEXTO: "100" va antes que "25"
    console.log("sort() sin comparador:", [...numeros].sort()); // [1, 10, 100, 25, 3]

    // Con una función comparadora: si a - b es negativo, a va antes que b
    console.log("sort((a, b) => a - b):", [...numeros].sort((a, b) => a - b)); // [1, 3, 10, 25, 100]

    // sort() modifica el array original; por eso arriba lo hemos copiado con [...numeros].
    // toSorted() (ES2023) hace lo mismo pero devuelve un array nuevo.
    const productos = [
        { nombre: "Lámpara", precio: 40 },
        { nombre: "Silla", precio: 75 },
        { nombre: "Cojín", precio: 12 },
    ];
    const porPrecio = productos.toSorted((a, b) => a.precio - b.precio);

    console.log("Ordenados:", porPrecio.map((p) => p.nombre)); // ["Cojín", "Lámpara", "Silla"]
    console.log("Original:", productos.map((p) => p.nombre));  // sin cambios

    // toReversed() (ES2023): copia invertida sin tocar el original
    console.log("Invertido:", numeros.toReversed());
    console.log("Original:", numeros);
}

// Ejercicio 10
function ejercicio10() {
    console.log("--- Ejercicio 10 ---");
    const catalogo = [
        { nombre: "Portátil", categoria: "informática", precio: 800, stock: 4 },
        { nombre: "Ratón", categoria: "informática", precio: 20, stock: 0 },
        { nombre: "Sartén", categoria: "hogar", precio: 30, stock: 12 },
        { nombre: "Lámpara", categoria: "hogar", precio: 45, stock: 6 },
        { nombre: "Novela", categoria: "libros", precio: 18, stock: 20 },
    ];

    // Encadenamos métodos: cada uno recibe el array que devuelve el anterior
    const disponibles = catalogo
        .filter((producto) => producto.stock > 0)
        .map((producto) => producto.nombre.toUpperCase());
    console.log("Disponibles:", disponibles);

    const valorInventario = catalogo
        .map((producto) => producto.precio * producto.stock)
        .reduce((total, valor) => total + valor, 0);
    console.log(`Valor del inventario: ${valorInventario} €`); // 4190 €

    // Object.groupBy (ES2024) devuelve un objeto con una propiedad por cada categoría
    const porCategoria = Object.groupBy(catalogo, (producto) => producto.categoria);
    console.log(porCategoria);
    console.log("Productos de hogar:", porCategoria.hogar.map((p) => p.nombre));
}

ejercicio1();
ejercicio2();
ejercicio3();
ejercicio4();
ejercicio5();
ejercicio6();
ejercicio7();
ejercicio8();
ejercicio9();
ejercicio10();
