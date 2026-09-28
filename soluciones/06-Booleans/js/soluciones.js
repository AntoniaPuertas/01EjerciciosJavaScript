/*
Ejercicios para practicar con Booleanos:

1. Declara dos variables booleanas `isSunny` e `isWeekend`. Escribe una condición que imprima "Vamos a la playa" si ambas son verdaderas.

2. Crea una función `isAdult` que reciba un número como edad y devuelva `true` si la edad es mayor o igual a 18, y `false` en caso contrario.

3. Declara una variable `hasLicense` y otra `isSober`. Escribe una condición que imprima "Puedes conducir" si ambas son verdaderas.

4. Escribe una función `isEligibleToVote` que reciba dos parámetros: `age` y `isCitizen`. Devuelve `true` si la persona tiene al menos 18 años y es ciudadana.

5. Declara una variable `isRaining`. Escribe una condición que imprima "Lleva paraguas" si es verdadera, y "No necesitas paraguas" si es falsa.

6. Crea una función `isEven` que reciba un número y devuelva `true` si el número es par, y `false` si es impar.

7. Declara dos variables booleanas `hasJob` y `hasSavings`. Escribe una condición que imprima "Estás listo para comprar una casa" si al menos una de ellas es verdadera.

8. Escribe una función `canEnterClub` que reciba dos parámetros: `age` y `hasInvitation`. Devuelve `true` si la edad es mayor o igual a 21 o si tiene invitación.

9. Declara una variable `isOnline` y otra `isAvailable`. Escribe una condición que imprima "Puedes chatear" si ambas son verdaderas.

10. Crea una función `isLeapYear` que reciba un año como parámetro y devuelva `true` si el año es bisiesto, y `false` en caso contrario.
*/

// Ejercicio 1
// && (AND) solo es true si las dos condiciones son true.
// Con booleanos no hace falta escribir "isSunny === true": la variable ya es true o false.
console.log("--- Ejercicio 1 ---");
const isSunny = true;
const isWeekend = true;

if (isSunny && isWeekend) {
    console.log("Vamos a la playa");
}

// Ejercicio 2
// Una comparación ya devuelve un booleano, así que podemos devolverla directamente
// en lugar de escribir if (edad >= 18) { return true } else { return false }
console.log("--- Ejercicio 2 ---");
function isAdult(edad) {
    return edad >= 18;
}

console.log(isAdult(20)); // true
console.log(isAdult(15)); // false
console.log(isAdult(18)); // true

// Ejercicio 3
console.log("--- Ejercicio 3 ---");
const hasLicense = true;
const isSober = true;

if (hasLicense && isSober) {
    console.log("Puedes conducir");
}

// Ejercicio 4
console.log("--- Ejercicio 4 ---");
function isEligibleToVote(age, isCitizen) {
    return age >= 18 && isCitizen;
}

console.log(isEligibleToVote(25, true));  // true
console.log(isEligibleToVote(25, false)); // false
console.log(isEligibleToVote(16, true));  // false

// Ejercicio 5
console.log("--- Ejercicio 5 ---");
const isRaining = false;

if (isRaining) {
    console.log("Lleva paraguas");
} else {
    console.log("No necesitas paraguas");
}

// La misma condición con el operador ternario:
console.log(isRaining ? "Lleva paraguas" : "No necesitas paraguas");

// Ejercicio 6
// Un número es par si el resto de dividirlo entre 2 es 0
console.log("--- Ejercicio 6 ---");
function isEven(numero) {
    return numero % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(0)); // true

// Ejercicio 7
// || (OR) es true si al menos una de las condiciones es true
console.log("--- Ejercicio 7 ---");
const hasJob = false;
const hasSavings = true;

if (hasJob || hasSavings) {
    console.log("Estás listo para comprar una casa");
}

// Ejercicio 8
console.log("--- Ejercicio 8 ---");
function canEnterClub(age, hasInvitation) {
    return age >= 21 || hasInvitation;
}

console.log(canEnterClub(22, false)); // true  (tiene la edad)
console.log(canEnterClub(19, true));  // true  (tiene invitación)
console.log(canEnterClub(19, false)); // false (ni edad ni invitación)

// Ejercicio 9
console.log("--- Ejercicio 9 ---");
const isOnline = true;
const isAvailable = true;

if (isOnline && isAvailable) {
    console.log("Puedes chatear");
}

// Ejercicio 10
// Un año es bisiesto si:
//   - es divisible entre 4 y NO es divisible entre 100, o
//   - es divisible entre 400
console.log("--- Ejercicio 10 ---");
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2026)); // false
console.log(isLeapYear(1900)); // false (divisible entre 100 pero no entre 400)
console.log(isLeapYear(2000)); // true  (divisible entre 400)
