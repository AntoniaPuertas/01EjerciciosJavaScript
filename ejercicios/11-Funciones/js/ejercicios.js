/*
Ejercicios de Funciones
Escribe tu solución debajo de cada enunciado y comprueba el resultado en la consola (F12).
Las soluciones están en soluciones/11-Funciones/js/soluciones.js

Recuerda: después de crear cada función, llámala con varios valores distintos
y muestra el resultado con console.log() para comprobar que funciona.
*/

// Ejercicio 1
// Crea una función saludar que reciba un nombre y devuelva "Hola, <nombre>".
// Si no se le pasa ningún nombre, debe saludar a "invitado".
console.log("--- Ejercicio 1 ---");

// Escribe aquí tu solución


// Ejercicio 2
// Escribe una función que calcule el área de un rectángulo (base × altura) de tres formas:
// como declaración de función, como expresión de función y como función flecha.
// Usa un nombre distinto para cada una (por ejemplo areaDeclaracion, areaExpresion y areaFlecha).
console.log("--- Ejercicio 2 ---");

// Escribe aquí tu solución


// Ejercicio 3
// Crea una función precioFinal que reciba un precio y un porcentaje de descuento
// y devuelva el precio con el descuento aplicado, redondeado a 2 decimales.
// Si no se indica descuento, se considera 0.
// Si el precio es negativo o el descuento no está entre 0 y 100, devuelve null.
console.log("--- Ejercicio 3 ---");

// Escribe aquí tu solución


// Ejercicio 4
// Crea una función sumarTodos que reciba cualquier cantidad de números y devuelva su suma,
// por ejemplo sumarTodos(1, 2, 3) → 6 y sumarTodos(10, 20, 30, 40) → 100.
// Después, crea una función media que use sumarTodos para calcular la media.
// Pista: busca en la teoría el parámetro rest (...).
console.log("--- Ejercicio 4 ---");

// Escribe aquí tu solución


// Ejercicio 5
// Crea una función estadisticas que reciba un array de números y devuelva a la vez
// el mínimo, el máximo y la media. Pruébala con el array notas y recoge el resultado
// con desestructuración.
// Pista: una función solo devuelve un valor, pero puede ser un objeto con varias propiedades.
console.log("--- Ejercicio 5 ---");
const notas = [6.5, 9, 4, 7.5, 8];

// Escribe aquí tu solución


// Ejercicio 6
// Crea una función operar(a, b, operacion) que reciba dos números y una función,
// y devuelva el resultado de aplicar esa función a los dos números.
// Pruébala pasando funciones para sumar, multiplicar y calcular la potencia.
console.log("--- Ejercicio 6 ---");

// Escribe aquí tu solución


// Ejercicio 7
// Crea una función crearMultiplicador(n) que devuelva otra función.
// La función devuelta recibe un número y lo multiplica por n.
// Úsala para crear las funciones doble y triple: doble(5) → 10, triple(5) → 15.
console.log("--- Ejercicio 7 ---");

// Escribe aquí tu solución


// Ejercicio 8
// Crea una función crearContador() que devuelva un objeto con tres métodos:
// incrementar(), decrementar() y valor(). La cuenta debe empezar en 0 y no debe
// poder modificarse desde fuera si no es con esos métodos.
// Comprueba que dos contadores creados con crearContador() son independientes.
console.log("--- Ejercicio 8 ---");

// Escribe aquí tu solución


// Ejercicio 9
// La función anadirProductoImpura modifica un array que está fuera de ella.
// Escribe una versión pura, anadirProducto(carrito, producto), que no modifique
// el array recibido y devuelva uno nuevo. Comprueba que el array original no cambia.
console.log("--- Ejercicio 9 ---");
const carritoGlobal = ["pan"];

function anadirProductoImpura(producto) {
    carritoGlobal.push(producto);
}

anadirProductoImpura("leche");
console.log(carritoGlobal); // ["pan", "leche"] → se ha modificado el original

// Escribe aquí tu solución


// Ejercicio 10
// Calcula el factorial de un número (5! = 5 × 4 × 3 × 2 × 1 = 120) de dos formas:
// con un bucle y con una función recursiva (una función que se llama a sí misma).
// Recuerda que, por definición, 0! = 1.
console.log("--- Ejercicio 10 ---");

// Escribe aquí tu solución

