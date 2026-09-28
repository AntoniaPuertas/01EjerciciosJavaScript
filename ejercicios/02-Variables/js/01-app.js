//Mensajes para mostrar en la consola

console.log("Hola Mundo desde el archivo app.js");  

//Mostrando un array
console.log([1,2,3,4,5]);

//Mostrando un objeto
console.log({nombre: "Juan", edad: 30, profesion: "Desarrollador"});

//De esta forma se muestra como tabla, lo que hace más legible el contenido
console.table([1,2,3,4,5]);
console.table({nombre: "Juan", edad: 30, profesion: "Desarrollador"});


console.warn("Esto es una advertencia");

console.error("Esto es un error");

console.info("Esto es un mensaje informativo");

console.assert(1 === 2, "Esto es una afirmación falsa");

//console.clear(); // Limpiar la consola

console.time("Tiempo de ejecución"); // Iniciar el temporizador
console.log("Esto es un mensaje de prueba");    
console.timeEnd("Tiempo de ejecución"); // Detener el temporizador y mostrar el tiempo transcurrido

//como crear variables con var, let y const
//No se debe utilizar var, está considerado una mala práctica
var nombre = "Juan"; // Variable global 
var edad = 30; // Variable global
var profesion = "Desarrollador"; // Variable global

let nombre2 = "Pedro"; // Variable local
let edad2 = 25; // Variable local

const nombre3 = "Maria"; // Variable constante
const edad3 = 28; // Variable constante

//reasignar variables

nombre = "Carlos"; // Reasignar variable global
edad = 35; // Reasignar variable global

nombre2 = "Luis"; // Reasignar variable local
edad2 = 27; // Reasignar variable local

//nombre3 = "Ana"; // No se puede reasignar una variable constante (descomentar para ver el error)

//Para declarar una variable no se pone el tipo de dato, ya que JavaScript es un lenguaje de tipado dinámico.
//Se puede declarar una variable sin inicializarla, pero no se puede usar antes de declararla.  



