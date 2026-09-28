/*
Ejercicios del DOM
Estos ejercicios modifican los elementos de la "Zona de prácticas" que hay al final de la página.
Escribe tu solución debajo de cada enunciado, guarda y recarga la página para ver el resultado.
Las soluciones están en soluciones/12-DOM/js/soluciones.js

Este archivo se carga al final del <body>, así que cuando se ejecuta todos los elementos de la
página ya existen y puedes seleccionarlos. Si document.querySelector() te devuelve null,
revisa que el selector está bien escrito (¿has puesto # para los id y . para las clases?).
*/

// Ejercicio 1
// Cambia el texto del párrafo #ej1-texto por "¡He cambiado este texto con JavaScript!".
console.log("--- Ejercicio 1 ---");

// Escribe aquí tu solución


// Ejercicio 2
// Cuenta cuántos párrafos con la clase ej2-parrafo hay dentro de #ej2.
// Muestra el número en la consola y escríbelo en el span #ej2-total.
console.log("--- Ejercicio 2 ---");

// Escribe aquí tu solución


// Ejercicio 3
// Modifica la caja #ej3-caja:
//    - Con la propiedad style, aumenta su tamaño de letra a 1.6rem.
//    - Con classList, añádele la clase "destacado" (ya está definida en la hoja de estilos).
//    - Comprueba en la consola si la caja tiene la clase "destacado".
console.log("--- Ejercicio 3 ---");

// Escribe aquí tu solución


// Ejercicio 4
// En la lista #ej4-tareas, cada tarea tiene un atributo data-completada.
// Añade la clase "completada" a las tareas con data-completada="true"
// y escribe en #ej4-resumen un texto como "2 de 4 tareas completadas".
console.log("--- Ejercicio 4 ---");

// Escribe aquí tu solución


// Ejercicio 5
// Convierte el enlace #ej5-enlace en un enlace a la documentación del DOM en MDN:
//    - href: https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model
//    - texto: "Documentación del DOM en MDN"
//    - que se abra en una pestaña nueva de forma segura (target y rel).
// Muestra en la consola el valor del atributo href antes y después del cambio.
console.log("--- Ejercicio 5 ---");

// Escribe aquí tu solución


// Ejercicio 6
// Dentro de #ej6, crea con createElement un título h4 con el texto "Frutas de temporada"
// y, debajo, una lista ul con un li por cada fruta del array frutas.
console.log("--- Ejercicio 6 ---");
const frutas = ["Naranja", "Mandarina", "Granada", "Caqui", "Kiwi"];

// Escribe aquí tu solución


// Ejercicio 7
// Dentro de #ej7-productos, crea una tarjeta (article con la clase "tarjeta") por cada producto
// del array productos, con su nombre en un h4 y su precio en un párrafo.
// Si un producto no tiene stock, añade a su tarjeta la clase "agotado" y un párrafo "Agotado".
// Pista: una función crearTarjeta(producto) que devuelva el article hará el código más claro.
console.log("--- Ejercicio 7 ---");
const productos = [
    { nombre: "Auriculares", precio: 35, stock: 10 },
    { nombre: "Webcam", precio: 60, stock: 0 },
    { nombre: "Micrófono", precio: 85, stock: 3 },
];

// Escribe aquí tu solución


// Ejercicio 8
// Elimina de la lista #ej8-lista todos los productos que tienen la clase "agotado".
// Escribe en #ej8-resultado cuántos se han eliminado y cuántos quedan.
console.log("--- Ejercicio 8 ---");

// Escribe aquí tu solución


// Ejercicio 9
// Rellena el cuerpo (tbody) de la tabla #ej9-tabla con una fila por cada alumno del array alumnos.
// Añade la clase "suspenso" a las filas de los alumnos con nota menor que 5.
console.log("--- Ejercicio 9 ---");
const alumnos = [
    { nombre: "Laura", nota: 8 },
    { nombre: "Carlos", nota: 4 },
    { nombre: "Elena", nota: 9.5 },
    { nombre: "Jorge", nota: 3 },
];

// Escribe aquí tu solución


// Ejercicio 10
// Partiendo del elemento #ej10-actual y sin usar más selectores:
//    - Añade la clase "vecino" al elemento anterior y al siguiente.
//    - Averigua cuántos elementos tiene la lista en la que está (su elemento padre).
//    - Añade la clase "resuelto" al contenedor .ejercicio que lo rodea.
// Escribe en #ej10-resultado un texto como "Martes está en una lista de 4 días"
// (para esta última parte sí puedes seleccionar #ej10-resultado).
console.log("--- Ejercicio 10 ---");

// Escribe aquí tu solución

