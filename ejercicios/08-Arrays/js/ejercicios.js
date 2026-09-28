/*
Ejercicios de Arrays
Escribe tu solución dentro de cada función y comprueba el resultado en la consola (F12).
Las soluciones están en soluciones/08-Arrays/js/soluciones.js

¿Por qué cada ejercicio está dentro de una función?
Este archivo se carga en la misma página que js/app.js, que ya declara variables como
carrito o numeros con const. Si declaras una variable con el mismo nombre fuera de una función,
el navegador da un error (SyntaxError: Identifier has already been declared) y no se ejecuta nada.
Dentro de una función, las variables son locales y no chocan con las de otros archivos.
*/

// Ejercicio 1
// Crea un array con 5 colores. Muestra en la consola el primer color, el último
// (de dos formas: con length y con at()) y cuántos colores hay.
function ejercicio1() {
    console.log("--- Ejercicio 1 ---");

    // Escribe aquí tu solución

}

// Ejercicio 2
// Crea una lista de la compra con 3 productos y, mostrando la lista después de cada paso:
//    - Añade un producto al final y otro al principio.
//    - Inserta "pan" en la segunda posición con splice().
//    - Elimina el último y el primer producto.
function ejercicio2() {
    console.log("--- Ejercicio 2 ---");

    // Escribe aquí tu solución

}

// Ejercicio 3
// Tienes dos listas de invitados a una fiesta. Comprueba con includes() si "Marta" está
// en la primera lista y, si no está, añádela. Después une las dos listas en una sola
// sin nombres repetidos.
function ejercicio3() {
    console.log("--- Ejercicio 3 ---");
    const invitados1 = ["Ana", "Luis", "Sara"];
    const invitados2 = ["Luis", "Pablo", "Marta", "Ana"];

    // Escribe aquí tu solución

}

// Ejercicio 4
// Dado un array de notas, calcula la media recorriéndolo de tres formas distintas:
// con un bucle for, con for...of y con forEach().
function ejercicio4() {
    console.log("--- Ejercicio 4 ---");
    const notas = [7, 5.5, 9, 6, 8.5];

    // Escribe aquí tu solución

}

// Ejercicio 5
// Dado un array de precios sin IVA, crea con map() un nuevo array con los precios
// con un 21 % de IVA, redondeados a 2 decimales. El array original no debe cambiar.
function ejercicio5() {
    console.log("--- Ejercicio 5 ---");
    const preciosSinIva = [10, 24.99, 3.5, 100];

    // Escribe aquí tu solución

}

// Ejercicio 6
// Dado un array de productos (nombre, precio y stock), obtén con filter():
//    - Los productos que están en stock.
//    - Los productos en stock que cuestan menos de 50 €.
function ejercicio6() {
    console.log("--- Ejercicio 6 ---");
    const productos = [
        { nombre: "Auriculares", precio: 35, stock: 10 },
        { nombre: "Webcam", precio: 60, stock: 0 },
        { nombre: "Alfombrilla", precio: 12, stock: 25 },
        { nombre: "Micrófono", precio: 85, stock: 3 },
        { nombre: "Hub USB", precio: 22, stock: 0 },
    ];

    // Escribe aquí tu solución

}

// Ejercicio 7
// Dado un array de alumnos (nombre y nota):
//    - Busca con find() al alumno "Carlos" y muestra su nota.
//    - Obtén con findIndex() la posición de "Elena".
//    - Obtén con findLast() el último alumno suspendido.
//    - Comprueba con some() si hay algún sobresaliente y con every() si han aprobado todos.
function ejercicio7() {
    console.log("--- Ejercicio 7 ---");
    const alumnos = [
        { nombre: "Laura", nota: 8 },
        { nombre: "Carlos", nota: 4 },
        { nombre: "Elena", nota: 9.5 },
        { nombre: "Jorge", nota: 3 },
        { nombre: "Nuria", nota: 6 },
    ];

    // Escribe aquí tu solución

}

// Ejercicio 8
// Dado un carrito (nombre, precio y cantidad de cada producto), calcula con reduce()
// el número total de artículos y el importe total.
function ejercicio8() {
    console.log("--- Ejercicio 8 ---");
    const carrito = [
        { nombre: "Camiseta", precio: 15, cantidad: 2 },
        { nombre: "Pantalón", precio: 35, cantidad: 1 },
        { nombre: "Calcetines", precio: 4.5, cantidad: 4 },
    ];

    // Escribe aquí tu solución

}

// Ejercicio 9
// Ordenación:
//    - Ordena el array numeros de menor a mayor. ¿Qué pasa si usas sort() sin argumentos?
//    - Ordena el array productos por precio sin modificar el original (toSorted()).
//    - Obtén una copia del array numeros invertida con toReversed().
function ejercicio9() {
    console.log("--- Ejercicio 9 ---");
    const numeros = [10, 1, 25, 3, 100];
    const productos = [
        { nombre: "Lámpara", precio: 40 },
        { nombre: "Silla", precio: 75 },
        { nombre: "Cojín", precio: 12 },
    ];

    // Escribe aquí tu solución

}

// Ejercicio 10
// Mini-tienda. Dado un catálogo de productos (nombre, categoría, precio y stock):
//    - Crea un array con los nombres de los productos disponibles, en mayúsculas.
//    - Calcula el valor total del inventario (precio × stock) encadenando métodos.
//    - Agrupa los productos por categoría con Object.groupBy().
function ejercicio10() {
    console.log("--- Ejercicio 10 ---");
    const catalogo = [
        { nombre: "Portátil", categoria: "informática", precio: 800, stock: 4 },
        { nombre: "Ratón", categoria: "informática", precio: 20, stock: 0 },
        { nombre: "Sartén", categoria: "hogar", precio: 30, stock: 12 },
        { nombre: "Lámpara", categoria: "hogar", precio: 45, stock: 6 },
        { nombre: "Novela", categoria: "libros", precio: 18, stock: 20 },
    ];

    // Escribe aquí tu solución

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
