//alert("Hola Mundo");

const nombre = prompt("¿Cuál es tu nombre?"); 

/* A este archivo se hace referencia desde el archivo 01-Introduccion/index.html
   La referencia es la etiqueta <script src="js/01JavaScript.js"></script>, justo antes de cerrar el body
   Se puede poner la referencia en la cabecera o en el body del html
   Es bastante habitual encontrarse la referencia al final del body para que el código de JavaScript empiece a ejecutarse una vez cargado el html
*/

/**
 * En el html, debajo del h1, tenemos la siguiente etiqueta:
 * <p id="saludo"></p>
 * Es un elemento de párrafo sin contenido que tiene un id
 * El siguiente código hace referencia a ese párrafo
 *  document.querySelector('#saludo') selecciona el elemento con id saludo
 * Accediendo a su propiedad innerHTML le agregamos contenido a la etiqueta
 * 
 *  */

let saludo = "Hola "+ nombre +" Vamos a aprender JavaScript."
document.querySelector('#saludo').innerHTML = saludo;
