/*
Ejercicios para practicar con números y sus métodos:

1. Escribe una función que solicite al usuario un número decimal y lo redondee al entero más cercano utilizando `Math.round()`.

2. Escribe una función que reciba un número y devuelva su valor absoluto utilizando `Math.abs()`.

3. Genera un número aleatorio entre 1 y 100 utilizando `Math.random()` y redondea el resultado al número entero más cercano.

4. Escribe una función que convierta un número en formato string a un número decimal utilizando `parseFloat()`.

5. Escribe una función que reciba un número y determine si es un número finito utilizando `Number.isFinite()`.

6. Calcula la raíz cuadrada de un número ingresado por el usuario utilizando `Math.sqrt()`.

7. Escribe una función que convierta un número a notación exponencial con dos decimales utilizando el método `toExponential()`.

8. Escribe una función que reciba un número y lo formatee con dos decimales utilizando `toFixed()`.

9. Calcula el valor máximo y mínimo de un conjunto de números utilizando `Math.max()` y `Math.min()`.

10. Escribe una función que determine si un valor ingresado es un número entero utilizando `Number.isInteger()`.

*/

// Las llamadas a los métodos están comentadas para que no pida todos los prompts de golpe

//Ejercicio 1

function redondeoMasCercano(){
    let numero = prompt("Escribe un número decimal");
    let numeroRedondeado = Math.round(numero);
    console.log("El número entero más cercano es: " + numeroRedondeado);
}

//ahora llamo a la función
//redondeoMasCercano();

//Ejercicio 2

function valorAbsoluto(){
    let numero = prompt("Escribe un número");
    let numeroAbsoluto = Math.abs(numero);
    console.log("El valor absoluto del número es: " + numeroAbsoluto);
}

function valorAbsoluto2(valor) {
    return Math.abs(valor);
}

//console.log("El valor absoluto es: " + valorAbsoluto2(-9.4));

//valorAbsoluto();

// Ejercicio 3

function numeroAleatorio(){
    let numero = Math.floor((Math.random() * 100) + 1);
    console.log(numero);
}

numeroAleatorio();

// Ejercicio 4

function stringNumero(){
    let cadena = "1.5";
    let numero = parseFloat(cadena);
    console.log(numero);
}

function stringNumero2(num){
    return parseFloat(num)
}

stringNumero();
console.log(stringNumero2("3.45"));

// Ejercicio 5

function esFinito(){
    // prompt() siempre devuelve un string: lo convertimos a número antes de comprobarlo
    const numero = Number(prompt("Escribe un número"));
    console.log(Number.isFinite(numero));
}

//esFinito();

// Ejercicio 6

function raizCuadrada(){
    let numero = prompt("Escribe un número");
    console.log(Math.sqrt(numero));
}

function raizCuadrada2(numero) {
    //Pasamos el valor recibido a un tipo numérico
    const valor = parseFloat(numero);

    //Compruebo si el valor es un número finito válido
    if(!Number.isFinite(valor)){
        return "Por favor, ingresa un núimero válido"
    }

    //Si hemos llegado hasta aquí tenemos un número finito válido
    //Comprobar que sea un número positivo

    if(valor < 0) {
        return "No existe la raiz cuadrada de un número negativo"
    }

    return Math.sqrt(valor);
}

// raizCuadrada();
console.log(raizCuadrada2("25"));
console.log(raizCuadrada2("22"));
console.log(raizCuadrada2("-2"));
console.log(raizCuadrada2("ABC"));
// Ejercicio 7

function notacionExponencial() {
    let numero = prompt("Escribe un número");
    numero = parseFloat(numero); // lo convertimos a entero ya que el prompt lo lee como cadena
    let notacion = numero.toExponential(2);
    console.log(notacion);
}

//notacionExponencial();

// Ejercicio 8

function dosDecimales() {
    let numero = prompt("Escribe un número");
    numero = parseFloat(numero);

    console.log(numero.toFixed(2));
}

//dosDecimales();

// Ejercicio 9

function minimosMaximos() {
    let array = [1,2,3,4,5,6,7,8,9,10];
    console.log(Math.max(...array));
    console.log(Math.min(...array)); // Duda porque hay que usar "..."
}

function calcularMaxMin(numeros) {
    //comprobar que tenemos un array
    if(!Array.isArray(numeros) || numeros.length === 0){
        return "Por favor, ingresa un array con al menos un número"
    }

    //comprobar que los elementos del array sean número
    //numeros.every() es uina función para los arrays que es un bucle que implementa para cada elemento del array lo que haya entre los paréntesis
    if(!numeros.every(Number.isFinite)){
        return "El array contiene valores no numéricos";
    }

    // ... es el valor spread
    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);

    //return "El máximo es: " + maximo + " y el mínimo es: " + minimo;
    return [maximo,minimo];
}

console.log(calcularMaxMin([1,2,3,4,5,6,7,8]));
console.log(calcularMaxMin([-3,2,9]));
console.log(calcularMaxMin([84]));
console.log(calcularMaxMin([]));
console.log(calcularMaxMin([5, "Hola"]));
console.log(calcularMaxMin(5));
//minimosMaximos();

// Ejercicio 10

function esEntero() {
    // prompt() siempre devuelve un string: lo convertimos a número antes de comprobarlo
    const numero = Number(prompt("Escribe un número"));
    console.log(Number.isInteger(numero));
}

//esEntero();