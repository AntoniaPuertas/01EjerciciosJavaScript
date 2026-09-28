/*
Soluciones de los ejercicios de Bucles
Los enunciados están en ejercicios/10-Bucles/js/ejercicios.js
*/

// Ejercicio 1
// Muestra en la consola los números del 1 al 10 con un bucle for.
// Después, muestra la cuenta atrás del 10 al 1.
console.log("--- Ejercicio 1 ---");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Para contar hacia atrás: empezamos en 10, seguimos mientras i >= 1 y restamos 1 en cada vuelta
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Ejercicio 2
// Muestra la tabla de multiplicar del número guardado en la variable numero,
// con el formato "7 x 1 = 7".
console.log("--- Ejercicio 2 ---");
const numero = 7;

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// Ejercicio 3
// Calcula la suma de todos los números del 1 al 100.
// Después, calcula la suma solo de los números pares del 1 al 100 de dos formas:
// con continue y cambiando el paso del bucle.
console.log("--- Ejercicio 3 ---");

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(`Suma del 1 al 100: ${suma}`); // 5050

// Forma 1: continue salta a la siguiente vuelta cuando el número es impar
let sumaPares1 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    sumaPares1 += i;
}

// Forma 2: empezamos en 2 y avanzamos de 2 en 2, así solo pasamos por los pares
let sumaPares2 = 0;
for (let i = 2; i <= 100; i += 2) {
    sumaPares2 += i;
}

console.log(`Suma de los pares (continue): ${sumaPares1}`); // 2550
console.log(`Suma de los pares (paso 2): ${sumaPares2}`);   // 2550
// La segunda forma da menos vueltas (50 en lugar de 100)

// Ejercicio 4
// Crea una función que cuente cuántas cifras tiene un número entero positivo usando un bucle while.
// Pista: divide el número entre 10 (sin decimales) hasta que llegue a 0.
console.log("--- Ejercicio 4 ---");

function contarCifras(n) {
    // Caso especial: el 0 tiene una cifra, pero el bucle no daría ninguna vuelta
    if (n === 0) {
        return 1;
    }

    let cifras = 0;
    while (n > 0) {
        n = Math.floor(n / 10); // 1234 → 123 → 12 → 1 → 0
        cifras++;
    }
    return cifras;
}

console.log(contarCifras(7));       // 1
console.log(contarCifras(1234));    // 4
console.log(contarCifras(1000000)); // 7
console.log(contarCifras(0));       // 1

// Ejercicio 5
// Simula el lanzamiento de un dado (número aleatorio del 1 al 6) hasta que salga un 6,
// usando do...while. Muestra cada tirada y, al final, cuántas tiradas han hecho falta.
console.log("--- Ejercicio 5 ---");

let tirada;
let intentos = 0;

// do...while es la opción natural: hay que tirar el dado al menos una vez antes de comprobar
do {
    tirada = Math.floor(Math.random() * 6) + 1;
    intentos++;
    console.log(`Tirada ${intentos}: ${tirada}`);
} while (tirada !== 6);

console.log(`Ha salido un 6 después de ${intentos} tiradas`);

// Ejercicio 6
// Cuenta cuántas vocales tiene la frase guardada en la variable frase usando for...of.
// Ten en cuenta mayúsculas y vocales con tilde.
console.log("--- Ejercicio 6 ---");
const frase = "Aprender JavaScript es más fácil practicando cada día";

const VOCALES = "aeiouáéíóúü";
let totalVocales = 0;

// for...of recorre un string letra a letra
for (const letra of frase.toLowerCase()) {
    if (VOCALES.includes(letra)) {
        totalVocales++;
    }
}

console.log(`La frase tiene ${totalVocales} vocales`); // 18

// Ejercicio 7
// Recorre el objeto producto y muestra cada propiedad con el formato "clave: valor",
// primero con for...in y después con for...of y Object.entries().
console.log("--- Ejercicio 7 ---");
const producto = {
    nombre: "Teclado mecánico",
    precio: 79.9,
    stock: 12,
    disponible: true,
};

// for...in recorre las claves del objeto
for (const clave in producto) {
    console.log(`${clave}: ${producto[clave]}`);
}

// Object.entries convierte el objeto en un array de pares [clave, valor]
// y con desestructuración los guardamos en dos variables
for (const [clave, valor] of Object.entries(producto)) {
    console.log(`${clave}: ${valor}`);
}

// Ejercicio 8
// Busca en el array temperaturas la primera temperatura bajo cero.
// Muestra su valor y su posición, y detén el bucle en cuanto la encuentres (break).
// Si no hay ninguna, muestra un mensaje indicándolo.
console.log("--- Ejercicio 8 ---");
const temperaturas = [12, 8, 3, -2, 5, -4, 1];

let posicion = -1;

for (let i = 0; i < temperaturas.length; i++) {
    console.log(`Revisando posición ${i}: ${temperaturas[i]} °C`);
    if (temperaturas[i] < 0) {
        posicion = i;
        break; // no hace falta seguir: ya la hemos encontrado
    }
}

if (posicion !== -1) {
    console.log(`Primera temperatura bajo cero: ${temperaturas[posicion]} °C en la posición ${posicion}`);
} else {
    console.log("No hay temperaturas bajo cero");
}
// Con break solo se revisan 4 posiciones en lugar de las 7.
// El método de arrays findIndex() hace lo mismo: temperaturas.findIndex(t => t < 0)

// Ejercicio 9
// Crea una función que reciba un número de filas y dibuje en la consola un triángulo
// de asteriscos usando dos bucles anidados. Por ejemplo, con 4 filas:
// *
// **
// ***
// ****
console.log("--- Ejercicio 9 ---");

function triangulo(filas) {
    for (let fila = 1; fila <= filas; fila++) {
        let linea = "";
        // El bucle interior da tantas vueltas como el número de la fila
        for (let columna = 1; columna <= fila; columna++) {
            linea += "*";
        }
        console.log(linea);
    }
}

triangulo(4);
// Con el método repeat() de los strings bastaría un solo bucle: console.log("*".repeat(fila))

// Ejercicio 10
// Muestra todos los números primos entre 2 y 50.
// Un número es primo si solo es divisible entre 1 y entre sí mismo.
console.log("--- Ejercicio 10 ---");

function esPrimo(n) {
    if (n < 2) {
        return false;
    }
    // Basta con probar divisores hasta la raíz cuadrada de n:
    // si n tuviera un divisor mayor, tendría también otro menor que ya habríamos probado
    for (let divisor = 2; divisor * divisor <= n; divisor++) {
        if (n % divisor === 0) {
            return false; // return sale del bucle y de la función a la vez
        }
    }
    return true;
}

const primos = [];
for (let n = 2; n <= 50; n++) {
    if (esPrimo(n)) {
        primos.push(n);
    }
}

console.log(primos.join(", "));
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
