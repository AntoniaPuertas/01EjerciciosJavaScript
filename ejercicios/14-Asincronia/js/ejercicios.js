/*
Ejercicios de Asincronía
Estos ejercicios hacen que los elementos de la "Zona de prácticas" esperen, se repitan o carguen datos.
Escribe tu solución debajo de cada enunciado, guarda, recarga la página y prueba los botones.
Las soluciones están en soluciones/14-Asincronia/js/soluciones.js

¡Importante! Los ejercicios 6 a 9 cargan archivos con fetch. Para que funcionen, abre la página
desde un servidor (WAMP, XAMPP, la extensión Live Server de VS Code...), no con doble clic:
si la dirección del navegador empieza por file://, el navegador bloquea las peticiones.

Los datos están en la carpeta assets/datos/: productos.json y categorias.json.
Ábrelos en el editor para ver qué contienen antes de empezar.
*/

// Ejercicio 1
// Al pulsar #ej1-boton, muestra "Espera..." en #ej1-mensaje y, 3 segundos después,
// "¡Han pasado 3 segundos!". Desactiva el botón mientras se espera para que no se pueda
// pulsar varias veces seguidas (propiedad disabled).

// Escribe aquí tu solución


// Ejercicio 2
// Crea una cuenta atrás de 10 segundos en #ej2-tiempo:
//    - Iniciar (#ej2-iniciar) la pone en marcha y resta 1 cada segundo.
//      Si ya estaba en marcha, no hace nada. Si había terminado, vuelve a empezar desde 10.
//    - Detener (#ej2-detener) la para en el número en que esté.
//    - Al llegar a 0 se detiene sola y muestra "¡Tiempo!".
// Pista: guarda en una variable lo que devuelve setInterval para poder detenerlo con clearInterval.

// Escribe aquí tu solución


// Ejercicio 3
// Crea una función esperar(ms) que devuelva una promesa que se cumpla pasados ms milisegundos.
// Úsala con .then(): al pulsar #ej3-boton, muestra "Esperando..." en #ej3-mensaje y, cuando
// se cumpla la promesa de esperar(1500), "Promesa cumplida después de 1,5 segundos".
// (Volverás a usar esta función en los ejercicios 5 y 10).

// Escribe aquí tu solución


// Ejercicio 4
// Crea una función lanzarDado() que devuelva una promesa. Medio segundo después, "tira" un dado:
//    - Si sale 3 o más, la promesa se cumple con el número.
//    - Si sale 1 o 2, la promesa se rechaza con un Error: "Ha salido un 2: pierdes".
// Al pulsar #ej4-boton, muestra el resultado en #ej4-resultado usando .then(), .catch() y
// .finally(): "Ha salido un 5: ¡ganas!" con la clase "mensaje-exito", o el mensaje del error
// con la clase "mensaje-error". Desactiva el botón mientras se espera y reactívalo en .finally().

// Escribe aquí tu solución


// Ejercicio 5
// Al pulsar #ej5-boton, muestra en #ej5-luz la secuencia de un semáforo usando async/await
// y la función esperar del ejercicio 3. Recorre el array FASES_SEMAFORO: muestra el texto de
// cada fase durante su duración. Al terminar, muestra "Secuencia terminada".
// El botón debe estar desactivado mientras dura la secuencia.
const FASES_SEMAFORO = [
    { texto: "🟢 Verde", duracion: 1000 },
    { texto: "🟡 Ámbar", duracion: 1000 },
    { texto: "🔴 Rojo", duracion: 1000 },
];

// Escribe aquí tu solución


// Ejercicio 6
// Crea una función asíncrona cargarJSON(archivo) que cargue con fetch un archivo de la carpeta
// de datos (RUTA_DATOS + archivo) y devuelva su contenido convertido desde JSON.
// Si la respuesta no es correcta (response.ok es false), debe lanzar un Error.
// Al pulsar #ej6-boton, carga productos.json y muestra en #ej6-lista un elemento por producto:
// "Portátil: 799.00 €". Mientras carga, muestra "Cargando productos..." en #ej6-estado y,
// al terminar, "8 productos cargados". Si algo falla, muestra el error en #ej6-estado.
// (Volverás a usar cargarJSON en los ejercicios 7, 8 y 9).

// La ruta de fetch es relativa a la PÁGINA HTML (ejercicios/14-Asincronia/index.html), no a este archivo .js
const RUTA_DATOS = "../../assets/datos/";

// Escribe aquí tu solución


// Ejercicio 7
// Al pulsar #ej7-boton, intenta cargar con cargarJSON el archivo "no-existe.json".
// Como no existe, muestra en #ej7-resultado un mensaje pensado para el usuario:
// "No se han podido cargar los datos. Inténtalo de nuevo más tarde." (con la clase "mensaje-error"),
// y escribe el error técnico completo en la consola con console.error().

// Escribe aquí tu solución


// Ejercicio 8
// Al pulsar #ej8-boton, carga A LA VEZ productos.json y categorias.json con Promise.all.
// Muestra en #ej8-lista cada producto con el nombre de su categoría: "Portátil (Informática)".
// En #ej8-estado muestra "Cargados 8 productos y 3 categorías".
// Pista: cada producto tiene un categoriaId que coincide con el id de una categoría.

// Escribe aquí tu solución


// Ejercicio 9
// Crea un buscador de productos en #ej9-buscar:
//    - Al cargar la página, carga productos.json una sola vez. Mientras tanto, muestra
//      "Cargando productos..." en #ej9-estado y, al terminar, "Escribe para buscar".
//    - Al escribir, muestra en #ej9-resultados los productos cuyo nombre contenga el texto
//      (sin distinguir mayúsculas), y en #ej9-estado cuántos hay: "2 productos encontrados",
//      "1 producto encontrado" o "0 productos encontrados".
//    - No busques con cada tecla: espera a que el usuario deje de escribir 300 ms.
//      Pista: con cada tecla, cancela con clearTimeout la búsqueda programada y programa otra.

// Escribe aquí tu solución


// Ejercicio 10
// Simula peticiones a un servidor con un tiempo máximo de espera de 2 segundos:
//    - Crea simularPeticion(ms), que devuelve una promesa que se cumple pasados ms milisegundos
//      con el texto "Respuesta recibida en 1 s" (con los segundos que correspondan).
//    - Crea limiteDeTiempo(ms), que devuelve una promesa que se rechaza pasados ms milisegundos
//      con el Error "El servidor ha tardado más de 2 s".
//    - Con Promise.race, haz que gane la que termine antes. #ej10-rapida simula una petición
//      de 1 segundo y #ej10-lenta una de 3. Muestra el resultado en #ej10-resultado.
//    - Desactiva los dos botones mientras se espera.

// Escribe aquí tu solución

