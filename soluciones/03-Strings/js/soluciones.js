// 1. Escribe un programa que convierta una cadena de texto a mayúsculas utilizando un método de String.

let cadenaTexto = "Estamos aprendiendo JavaScript en clase virtual";
console.log(cadenaTexto.toUpperCase());

// 2. Dado el texto "JavaScript es un lenguaje de programación", extrae la palabra "lenguaje" utilizando un método de String.

//Substring(caracterInicial,caracterFinal)
let cadenaTexto2 = "JavaScript es un lenguaje de programación";
let textoExtraido = cadenaTexto2.substring(17,25);
console.log(textoExtraido);

let inicio = cadenaTexto2.indexOf("lenguaje");
let final = "lenguaje".length + inicio;
let textoExtraido2 = cadenaTexto2.substring(inicio, final);
console.log(textoExtraido2);


let textoExtraido3 = cadenaTexto2.substring(cadenaTexto2.indexOf("lenguaje"),"lenguaje".length + inicio);
console.log(textoExtraido3);

// 3. Muestra por consola el siguiente valor de texto sin los espacios en blanco del inicio y final
let texto = "   La vida en la Selva   ";
console.log(texto.trim());

// 4. Comprueba si las siguientes cadenas de texto terminan con la palabra "programación".
// Muestra el resultado por consola
const texto1 = "Estoy estudiando JavaScript";
const texto2 = "JavaScript es un lenguaje de programación";

let array1 = texto1.split(" ");
let array2 = texto2.split(" ");

console.log(array1);
console.log(array2);

let ultimaPalabra1 = (array1[array1.length - 1]);
let ultimaPalabra2 = (array2[array2.length - 1]);

if(ultimaPalabra1 === "programación"){
    console.log("Es texto 1 termina en programación");
}else{
    console.log("El texto 1 no termina en programación")
}

if(ultimaPalabra2 === "programación"){
    console.log("Es texto 2 termina en programación");
}else{
    console.log("El texto 2 no termina en programación")
}

// 5. Dado el texto "Aprender JavaScript es divertido", reemplaza la palabra "divertido" por "fascinante" utilizando un método de String.

let reemplazar = "Aprender JavaScript es divertido";
console.log(reemplazar.replace("divertido", "fascinante"));


// 6. Muestra por consola la cantidad de caracteres que contiene la variable texto3.
let texto3 = "  Me lo paso muy bien   ";
console.log(texto3.length); // Sin quitar los espacios


// Muestra la cantidad de caracteres que contiene sin contar los espacios del principio y final

let texto3recortado = texto3.trim();
console.log(texto3recortado.length); // Con los espacios quitados

// 7. Dado el texto "Hola, mundo", verifica si contiene la palabra "mundo" utilizando un método de String.

let holaMundo = "Hola, mundo";
console.log(holaMundo.includes("mundo"));

// 8. Escribe un programa que divida la frase "HTML, CSS, JavaScript, React" en un array de palabras.

let webTools = "HTML, CSS, JavaScript, React";
let arrayWebTools = webTools.split(", ");
console.log(arrayWebTools);

// 9. Devuelve los 5 primeros caracteres de la variable texto4
let texto4 = "Escribiendo código";
console.log(texto4.substring(0,5));

// 10. Dado el texto "JavaScript es genial", encuentra la posición de la palabra "genial" utilizando un método de String.
let texto5 = "JavaScript es genial";
console.log(texto5.indexOf("genial"));