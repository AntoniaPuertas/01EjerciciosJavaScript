/*
Forma imperativa de manipular arrays
Cuando añadimos o eliminamos elementos a un array modificando el array original
*/

const carrito = [];

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 500
}

carrito.push(producto); // Agregar un elemento al array
carrito.push({
    nombre: "Television",
    precio: 1000
});
carrito.push({
    nombre: "Tablet",
    precio: 300
});

console.log(carrito);

carrito.unshift({
    nombre: "Celular",
    precio: 700
}); // Agregar un elemento al inicio del array

//Eliminar
carrito.pop(); // Eliminar el último elemento del array
carrito.shift(); // Eliminar el primer elemento del array
carrito.splice(0, 1); // Eliminar el primer elemento del array
carrito.splice(0, 2); // Eliminar los dos primeros elementos del array
carrito.splice(0, carrito.length); // Eliminar todos los elementos del array
carrito.splice(0, carrito.length - 1); // Eliminar todos los elementos menos el último



/*
Forma declarativa de manipular arrays
Cuando añadimos o eliminamos elementos a un array creando un nuevo array    ES6
*/
let carrito2 = []; // let porque más abajo se reasigna con spread y filter
const producto2 = {
    nombre: "Monitor 20 pulgadas",
    precio: 500
}
const producto3 = {
    nombre: "Television",
    precio: 1000
}
const producto4 = {
    nombre: "Tablet",
    precio: 300
}

carrito2 = [...carrito2, producto2]; // Agregar un elemento al array
carrito2 = [producto3, ...carrito2]; // Agregar un elemento al array    

//Eliminar elementos
carrito2 = carrito2.filter(producto => producto.nombre !== "Tablet"); // Eliminar un elemento del array

//Destructuring con arrays
const numeros = [10, 20, 30, 40, 50];   
const [primero, segundo, ...resto] = numeros; // Destructuring de arrays
console.log(primero); // 10
console.log(segundo); // 20
console.log(resto); // [30, 40, 50]
console.log(numeros); // [10, 20, 30, 40, 50]


//recorrer un array con forEach
const frutas = ["manzana", "banana", "naranja", "uva"];
frutas.forEach((fruta, index) => {
    console.log(`Fruta ${index + 1}: ${fruta}`);
});
// Fruta 1: manzana
// Fruta 2: banana  
// Fruta 3: naranja
// Fruta 4: uva

//recorrer un array con map
const numeros2 = [1, 2, 3, 4, 5];
const numerosCuadrados = numeros2.map(numero => numero * numero); // Crear un nuevo array con los cuadrados de los números
// La función map itera sobre cada elemento del array y aplica la función proporcionada, devolviendo un nuevo array con los resultados. En este caso, estamos multiplicando cada número por sí mismo para obtener su cuadrado.


// La diferencia entre forEach y map es que forEach se utiliza para iterar sobre un array y realizar una acción por cada elemento, pero no devuelve un nuevo array. En cambio, map también itera sobre un array, pero devuelve un nuevo array con los resultados de aplicar una función a cada elemento.

console.log(numerosCuadrados); // [1, 4, 9, 16, 25]

// Ejemplo adicional para ilustrar la diferencia:
const numeros3 = [1, 2, 3, 4, 5];

// Usando forEach (no devuelve un nuevo array)
const resultadoForEach = [];
numeros3.forEach(numero => resultadoForEach.push(numero * 2));
console.log(resultadoForEach); // [2, 4, 6, 8, 10]

// Usando map (devuelve un nuevo array)
const resultadoMap = numeros3.map(numero => numero * 2);
console.log(resultadoMap); // [2, 4, 6, 8, 10]

// En resumen, forEach se utiliza para realizar acciones secundarias (side effects) en cada elemento del array, mientras que map se utiliza para transformar los elementos y crear un nuevo array con los resultados de esa transformación.


