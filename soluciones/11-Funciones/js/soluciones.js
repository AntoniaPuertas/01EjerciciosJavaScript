/*
Soluciones de los ejercicios de Funciones
Los enunciados están en ejercicios/11-Funciones/js/ejercicios.js
*/

// Ejercicio 1
// Crea una función saludar que reciba un nombre y devuelva "Hola, <nombre>".
// Si no se le pasa ningún nombre, debe saludar a "invitado".
console.log("--- Ejercicio 1 ---");

// El valor por defecto se usa cuando el argumento no se pasa (o es undefined)
function saludar(nombre = "invitado") {
    return `Hola, ${nombre}`;
}

console.log(saludar("Lucía")); // Hola, Lucía
console.log(saludar());        // Hola, invitado

// Ejercicio 2
// Escribe una función que calcule el área de un rectángulo (base × altura) de tres formas:
// como declaración de función, como expresión de función y como función flecha.
console.log("--- Ejercicio 2 ---");

// 1. Declaración
function areaDeclaracion(base, altura) {
    return base * altura;
}

// 2. Expresión: la función se guarda en una constante
const areaExpresion = function (base, altura) {
    return base * altura;
};

// 3. Flecha: si el cuerpo es una sola expresión, se puede omitir { } y return
const areaFlecha = (base, altura) => base * altura;

console.log(areaDeclaracion(4, 3)); // 12
console.log(areaExpresion(4, 3));   // 12
console.log(areaFlecha(4, 3));      // 12

// Ejercicio 3
// Crea una función precioFinal que reciba un precio y un porcentaje de descuento
// y devuelva el precio con el descuento aplicado, redondeado a 2 decimales.
// Si el precio es negativo o el descuento no está entre 0 y 100, devuelve null.
console.log("--- Ejercicio 3 ---");

function precioFinal(precio, descuento = 0) {
    // Cláusulas de guarda: si algo no es válido, salimos cuanto antes
    if (precio < 0) {
        return null;
    }
    if (descuento < 0 || descuento > 100) {
        return null;
    }

    const resultado = precio - (precio * descuento) / 100;
    return Math.round(resultado * 100) / 100;
}

console.log(precioFinal(80, 25));  // 60
console.log(precioFinal(19.99));   // 19.99 (sin descuento)
console.log(precioFinal(-5, 10));  // null
console.log(precioFinal(50, 150)); // null

// Ejercicio 4
// Crea una función sumarTodos que reciba cualquier cantidad de números y devuelva su suma.
// Después, crea una función media que use sumarTodos para calcular la media.
console.log("--- Ejercicio 4 ---");

// ...numeros (parámetro rest) reúne todos los argumentos en un array
function sumarTodos(...numeros) {
    let total = 0;
    for (const n of numeros) {
        total += n;
    }
    return total;
}

function media(...numeros) {
    if (numeros.length === 0) {
        return 0;
    }
    // Con spread (...) volvemos a pasar el array como argumentos separados
    return sumarTodos(...numeros) / numeros.length;
}

console.log(sumarTodos(1, 2, 3));        // 6
console.log(sumarTodos(10, 20, 30, 40)); // 100
console.log(sumarTodos());               // 0
console.log(media(4, 8, 6));             // 6

// Ejercicio 5
// Crea una función estadisticas que reciba un array de números y devuelva a la vez
// el mínimo, el máximo y la media. Recoge el resultado con desestructuración.
console.log("--- Ejercicio 5 ---");

// Una función solo puede devolver un valor, pero ese valor puede ser un objeto con varios datos
function estadisticas(numeros) {
    return {
        minimo: Math.min(...numeros),
        maximo: Math.max(...numeros),
        media: sumarTodos(...numeros) / numeros.length,
    };
}

const notas = [6.5, 9, 4, 7.5, 8];
const { minimo, maximo, media: notaMedia } = estadisticas(notas); // media se renombra a notaMedia

console.log(`Mínimo: ${minimo}, máximo: ${maximo}, media: ${notaMedia}`); // Mínimo: 4, máximo: 9, media: 7

// Ejercicio 6
// Crea una función operar(a, b, operacion) que reciba dos números y una función,
// y devuelva el resultado de aplicar esa función a los dos números.
// Pruébala pasando funciones para sumar, multiplicar y calcular la potencia.
console.log("--- Ejercicio 6 ---");

// operacion es un callback: una función que se pasa como argumento a otra
function operar(a, b, operacion) {
    return operacion(a, b);
}

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log(operar(5, 3, sumar));                 // 8
console.log(operar(5, 3, multiplicar));           // 15
console.log(operar(2, 10, (a, b) => a ** b));     // 1024 (función flecha escrita en la propia llamada)
// Ojo: se pasa sumar, no sumar(). Con paréntesis se pasaría el resultado, no la función.

// Ejercicio 7
// Crea una función crearMultiplicador(n) que devuelva otra función.
// La función devuelta recibe un número y lo multiplica por n.
// Úsala para crear las funciones doble y triple.
console.log("--- Ejercicio 7 ---");

function crearMultiplicador(n) {
    // La función interior "recuerda" el valor de n aunque crearMultiplicador ya haya terminado
    return (numero) => numero * n;
}

const doble = crearMultiplicador(2);
const triple = crearMultiplicador(3);

console.log(doble(5));  // 10
console.log(triple(5)); // 15
console.log([1, 2, 3].map(triple)); // [3, 6, 9] → se puede usar como callback

// Ejercicio 8
// Crea una función crearContador() que devuelva un objeto con tres métodos:
// incrementar(), decrementar() y valor(). La cuenta debe empezar en 0 y no debe
// poder modificarse desde fuera si no es con esos métodos.
console.log("--- Ejercicio 8 ---");

function crearContador() {
    // cuenta es una variable local: desde fuera no se puede leer ni cambiar directamente.
    // Los métodos la siguen viendo gracias al closure.
    let cuenta = 0;

    return {
        incrementar() {
            cuenta++;
        },
        decrementar() {
            cuenta--;
        },
        valor() {
            return cuenta;
        },
    };
}

const visitas = crearContador();
visitas.incrementar();
visitas.incrementar();
visitas.incrementar();
visitas.decrementar();
console.log(visitas.valor()); // 2
console.log(visitas.cuenta);  // undefined → no se puede acceder desde fuera

// Cada llamada crea un contador independiente
const otro = crearContador();
otro.incrementar();
console.log(otro.valor(), visitas.valor()); // 1 2

// Ejercicio 9
// La función anadirProductoImpura modifica un array que está fuera de ella.
// Escribe una versión pura, anadirProducto(carrito, producto), que no modifique
// el array recibido y devuelva uno nuevo.
console.log("--- Ejercicio 9 ---");

const carritoGlobal = ["pan"];

function anadirProductoImpura(producto) {
    carritoGlobal.push(producto); // modifica algo de fuera: efecto secundario
}

anadirProductoImpura("leche");
console.log(carritoGlobal); // ["pan", "leche"] → se ha modificado el original

// Versión pura: con los mismos argumentos devuelve siempre lo mismo y no cambia nada de fuera
function anadirProducto(carrito, producto) {
    return [...carrito, producto];
}

const carritoInicial = ["pan"];
const carritoNuevo = anadirProducto(carritoInicial, "leche");
console.log(carritoInicial); // ["pan"] → sin cambios
console.log(carritoNuevo);   // ["pan", "leche"]

// Ejercicio 10
// Calcula el factorial de un número (5! = 5 × 4 × 3 × 2 × 1 = 120) de dos formas:
// con un bucle y con una función recursiva (una función que se llama a sí misma).
console.log("--- Ejercicio 10 ---");

function factorialBucle(n) {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

function factorialRecursivo(n) {
    // Caso base: detiene la recursión. Sin él, la función se llamaría a sí misma sin fin
    if (n <= 1) {
        return 1;
    }
    // Caso recursivo: 5! = 5 × 4!
    return n * factorialRecursivo(n - 1);
}

console.log(factorialBucle(5));      // 120
console.log(factorialRecursivo(5));  // 120
console.log(factorialRecursivo(0));  // 1 (por definición, 0! = 1)
console.log(factorialRecursivo(10)); // 3628800
