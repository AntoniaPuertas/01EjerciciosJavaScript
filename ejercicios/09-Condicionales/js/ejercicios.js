/*
Ejercicios de Condicionales
Escribe tu solución debajo de cada enunciado y comprueba el resultado en la consola (F12).
Las soluciones están en soluciones/09-Condicionales/js/soluciones.js
*/

// Ejercicio 1
// Crea una función que reciba un número y devuelva "Positivo", "Negativo" o "Cero"
// utilizando if, else if y else.
console.log("--- Ejercicio 1 ---");

// Escribe aquí tu solución


// Ejercicio 2
// Crea una función que reciba una nota numérica (de 0 a 10) y devuelva la calificación:
//    - Menos de 5: "Suspenso"
//    - De 5 a menos de 7: "Aprobado"
//    - De 7 a menos de 9: "Notable"
//    - De 9 a 10: "Sobresaliente"
// Si la nota no es un número entre 0 y 10, devuelve "Nota no válida".
console.log("--- Ejercicio 2 ---");

// Escribe aquí tu solución


// Ejercicio 3
// Crea una función que reciba un número del 1 al 7 y devuelva el nombre del día de la semana
// utilizando switch. Si el número no es válido, devuelve "Día no válido".
console.log("--- Ejercicio 3 ---");

// Escribe aquí tu solución


// Ejercicio 4
// Crea una función que reciba el nombre de un día y devuelva "Laborable" o "Fin de semana"
// utilizando switch y agrupando varios case que comparten el mismo resultado.
console.log("--- Ejercicio 4 ---");

// Escribe aquí tu solución


// Ejercicio 5
// Crea una función que calcule el precio de una entrada de cine a partir de la edad y de si es miércoles:
//    - Los miércoles la entrada cuesta 4 € para todos.
//    - Menores de 12 años: 5 €.
//    - Mayores de 65 años (incluido): 6 €.
//    - Resto: 9 €.
// Si la edad no es válida (no es un número o es negativa), devuelve un mensaje de error.
console.log("--- Ejercicio 5 ---");

// Escribe aquí tu solución


// Ejercicio 6
// Crea una calculadora que reciba dos números y un operador ("+", "-", "*", "/") y devuelva
// el resultado utilizando switch. Controla la división entre 0 y los operadores no válidos.
console.log("--- Ejercicio 6 ---");

// Escribe aquí tu solución


// Ejercicio 7
// Crea una función que reciba cualquier valor y diga si es truthy o falsy.
// Pruébala con todos los valores de este array.
console.log("--- Ejercicio 7 ---");
const valores = [0, "", "0", null, undefined, NaN, [], {}, "hola"];

// Escribe aquí tu solución


// Ejercicio 8
// Una tienda online ofrece envío gratuito si el pedido es de 50 € o más, o si el cliente es premium.
// En caso contrario, el envío cuesta 4,99 €. Crea una función que reciba el importe y si el
// cliente es premium, y devuelva el coste del envío. Usa el operador ternario.
console.log("--- Ejercicio 8 ---");

// Escribe aquí tu solución


// Ejercicio 9
// Crea una función que reciba un objeto de configuración de usuario y devuelva la configuración
// final aplicando valores por defecto: volumen 50, tema "claro" y ciudad "Desconocida".
//    - El volumen puede ser 0 (silencio): compara el resultado de usar || y ??.
//    - La ciudad está dentro de usuario.direccion.ciudad, pero la dirección puede no existir.
// Pruébala con los dos usuarios de ejemplo.
console.log("--- Ejercicio 9 ---");
const usuarioCompleto = { volumen: 0, tema: "oscuro", direccion: { ciudad: "Sevilla" } };
const usuarioVacio = {};

// Escribe aquí tu solución


// Ejercicio 10
// Crea una función que reciba un número de mes (1-12) y devuelva la estación del año
// (en el hemisferio norte, simplificado por meses completos):
//    - Diciembre, enero y febrero: "Invierno"
//    - Marzo, abril y mayo: "Primavera"
//    - Junio, julio y agosto: "Verano"
//    - Septiembre, octubre y noviembre: "Otoño"
// Resuélvelo de dos formas: con switch y con un objeto como tabla de búsqueda.
console.log("--- Ejercicio 10 ---");

// Escribe aquí tu solución

