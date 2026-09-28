/*
Ejercicios de Eventos
Estos ejercicios hacen que los elementos de la "Zona de prácticas" respondan a lo que hace el usuario.
Escribe tu solución debajo de cada enunciado, guarda y recarga la página. Después, prueba a hacer
clic, escribir o pulsar teclas en la zona de prácticas para comprobar que funciona.
Las soluciones están en soluciones/13-Eventos/js/soluciones.js

A diferencia de otros temas, el código que escribas dentro de un listener no se ejecuta al cargar
la página, sino cada vez que ocurre el evento. Por eso aquí no hay encabezados en la consola:
si quieres comprobar que un listener se ejecuta, pon un console.log() dentro de su función.
*/

// Ejercicio 1
// Cuando se haga clic en el botón #ej1-boton, cambia el texto de #ej1-mensaje por
// "¡Has hecho clic!". Además, cuenta los clics y muestra el total: "¡Has hecho clic! (3 veces)".
// Detalle extra: con un solo clic debe poner "1 vez", no "1 veces".

// Escribe aquí tu solución


// Ejercicio 2
// Haz que funcione el contador: el botón + (#ej2-sumar) suma 1, el botón − (#ej2-restar)
// resta 1 y Reiniciar (#ej2-reiniciar) lo pone a 0.
// El valor se muestra en #ej2-valor y nunca puede bajar de 0.

// Escribe aquí tu solución


// Ejercicio 3
// El botón #ej3-boton muestra y oculta el panel #ej3-panel.
//    - Usa la propiedad hidden del panel.
//    - Cambia el texto del botón entre "Mostrar detalles" y "Ocultar detalles".
//    - Actualiza su atributo aria-expanded ("true" o "false") para los lectores de pantalla.

// Escribe aquí tu solución


// Ejercicio 4
// Mientras se escribe en el campo #ej4-nombre, muestra en #ej4-saludo "Hola, <nombre>".
// Si el campo se queda vacío (o solo tiene espacios), vuelve a mostrar "Escribe tu nombre".
// Pista: el evento input se lanza cada vez que cambia el contenido del campo.

// Escribe aquí tu solución


// Ejercicio 5
// Muestra en #ej5-contador cuántos caracteres lleva escritos el área de texto #ej5-texto,
// con el formato "25 / 100". Cuando queden 10 caracteres o menos, añade al contador
// la clase "cerca-limite"; quítasela si vuelve a haber más espacio.

// Escribe aquí tu solución


// Ejercicio 6
// Cuando se elija un tipo de envío en #ej6-envio, muestra su coste en #ej6-precio:
// "Coste del envío: 4.99 €", o "Coste del envío: gratis" si cuesta 0.
// Los precios están en el objeto PRECIOS_ENVIO (el valor de cada opción del select es una de sus claves).
// Muestra también el coste inicial, el de la opción que aparece seleccionada al cargar la página.
const PRECIOS_ENVIO = {
    estandar: 4.99,
    urgente: 9.99,
    recogida: 0,
};

// Escribe aquí tu solución


// Ejercicio 7
// Cada tarea de #ej7-lista tiene un botón Eliminar. Haz que al pulsarlo se elimine su tarea
// usando UN SOLO listener en la lista (delegación de eventos), no uno por botón.
// Actualiza #ej7-total con las tareas que quedan ("Quedan 3 tareas", "Queda 1 tarea",
// "No quedan tareas").

// Escribe aquí tu solución


// Ejercicio 8
// Cuando se pulse una tecla en cualquier parte de la página, muestra en #ej8-tecla
// la tecla pulsada: "Has pulsado: a". Para la barra espaciadora muestra "Espacio".
// No hagas nada si la tecla se pulsa mientras se escribe en un campo (input, textarea o select).

// Escribe aquí tu solución


// Ejercicio 9
// Valida el formulario #ej9-form al enviarlo, sin que la página se recargue:
//    - El nombre es obligatorio.
//    - El correo debe tener un formato válido.
// Si hay errores, muéstralos en #ej9-resultado (con la clase "mensaje-error").
// Si todo es correcto, muestra "Gracias, <nombre>. Te escribiremos a <correo>."
// (con la clase "mensaje-exito") y vacía el formulario.

// Escribe aquí tu solución


// Ejercicio 10
// Haz que funcionen las pestañas de #ej10-pestanas: al pulsar una pestaña se muestra su panel
// y se ocultan los demás. Cada pestaña guarda el id de su panel en data-panel.
//    - Usa un solo listener en el contenedor de las pestañas (delegación).
//    - La pestaña activa debe tener aria-selected="true" y las demás "false".

// Escribe aquí tu solución

