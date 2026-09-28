/*
Soluciones de los ejercicios de Eventos
Los enunciados están en ejercicios/13-Eventos/js/ejercicios.js

Cada ejercicio prepara uno o varios "escuchadores" (listeners) con addEventListener.
El código de dentro de cada función no se ejecuta al cargar la página, sino cuando ocurre el evento.
*/

// Ejercicio 1
// Cuando se haga clic en el botón #ej1-boton, cambia el texto de #ej1-mensaje por
// "¡Has hecho clic!". Además, cuenta los clics y muestra el total: "¡Has hecho clic! (3 veces)".
const ej1Boton = document.querySelector("#ej1-boton");
const ej1Mensaje = document.querySelector("#ej1-mensaje");
let ej1Clics = 0;

ej1Boton.addEventListener("click", () => {
    ej1Clics++;
    const veces = ej1Clics === 1 ? "vez" : "veces";
    ej1Mensaje.textContent = `¡Has hecho clic! (${ej1Clics} ${veces})`;
});

// Ejercicio 2
// Haz que funcione el contador: el botón + suma 1, el botón − resta 1 y Reiniciar lo pone a 0.
// El valor se muestra en #ej2-valor y nunca puede bajar de 0.
const ej2Valor = document.querySelector("#ej2-valor");
let ej2Cuenta = 0;

// Una sola función para actualizar la pantalla evita repetir código en los tres botones
function ej2Mostrar() {
    ej2Valor.textContent = ej2Cuenta;
}

document.querySelector("#ej2-sumar").addEventListener("click", () => {
    ej2Cuenta++;
    ej2Mostrar();
});

document.querySelector("#ej2-restar").addEventListener("click", () => {
    if (ej2Cuenta > 0) {
        ej2Cuenta--;
    }
    ej2Mostrar();
});

document.querySelector("#ej2-reiniciar").addEventListener("click", () => {
    ej2Cuenta = 0;
    ej2Mostrar();
});

// Ejercicio 3
// El botón #ej3-boton muestra y oculta el panel #ej3-panel.
//    - Usa la propiedad hidden del panel.
//    - Cambia el texto del botón entre "Mostrar detalles" y "Ocultar detalles".
//    - Actualiza su atributo aria-expanded ("true" o "false") para los lectores de pantalla.
const ej3Boton = document.querySelector("#ej3-boton");
const ej3Panel = document.querySelector("#ej3-panel");

ej3Boton.addEventListener("click", () => {
    ej3Panel.hidden = !ej3Panel.hidden; // invierte el valor: true ↔ false
    const abierto = !ej3Panel.hidden;

    ej3Boton.textContent = abierto ? "Ocultar detalles" : "Mostrar detalles";
    ej3Boton.setAttribute("aria-expanded", abierto);
});

// Ejercicio 4
// Mientras se escribe en el campo #ej4-nombre, muestra en #ej4-saludo "Hola, <nombre>".
// Si el campo se queda vacío (o solo tiene espacios), vuelve a mostrar "Escribe tu nombre".
const ej4Nombre = document.querySelector("#ej4-nombre");
const ej4Saludo = document.querySelector("#ej4-saludo");

// El evento input se lanza con cada cambio del campo: cada tecla, pegar, borrar...
ej4Nombre.addEventListener("input", (evento) => {
    const nombre = evento.target.value.trim();
    ej4Saludo.textContent = nombre ? `Hola, ${nombre}` : "Escribe tu nombre";
});

// Ejercicio 5
// Muestra en #ej5-contador cuántos caracteres lleva escritos el área de texto #ej5-texto,
// con el formato "25 / 100". Cuando queden 10 caracteres o menos, añade al contador
// la clase "cerca-limite"; quítasela si vuelve a haber más espacio.
const ej5Texto = document.querySelector("#ej5-texto");
const ej5Contador = document.querySelector("#ej5-contador");

ej5Texto.addEventListener("input", () => {
    const maximo = ej5Texto.maxLength; // lee el atributo maxlength del HTML (100)
    const escritos = ej5Texto.value.length;

    ej5Contador.textContent = `${escritos} / ${maximo}`;
    // toggle con un segundo argumento: añade la clase si es true y la quita si es false
    ej5Contador.classList.toggle("cerca-limite", maximo - escritos <= 10);
});

// Ejercicio 6
// Cuando se elija un tipo de envío en #ej6-envio, muestra su coste en #ej6-precio.
// Los precios están en el objeto PRECIOS_ENVIO. Muestra también el coste inicial,
// el de la opción que aparece seleccionada al cargar la página.
const PRECIOS_ENVIO = {
    estandar: 4.99,
    urgente: 9.99,
    recogida: 0,
};

const ej6Envio = document.querySelector("#ej6-envio");
const ej6Precio = document.querySelector("#ej6-precio");

function ej6Mostrar() {
    const precio = PRECIOS_ENVIO[ej6Envio.value];
    ej6Precio.textContent = precio === 0
        ? "Coste del envío: gratis"
        : `Coste del envío: ${precio.toFixed(2)} €`;
}

// En un select, el evento change se lanza al elegir otra opción
ej6Envio.addEventListener("change", ej6Mostrar); // se pasa la función, sin paréntesis
ej6Mostrar(); // y se llama una vez para mostrar el coste inicial

// Ejercicio 7
// Cada tarea de #ej7-lista tiene un botón Eliminar. Haz que al pulsarlo se elimine su tarea
// usando UN SOLO listener en la lista (delegación de eventos), no uno por botón.
// Actualiza #ej7-total con las tareas que quedan ("Quedan 3 tareas", "Queda 1 tarea",
// "No quedan tareas").
const ej7Lista = document.querySelector("#ej7-lista");
const ej7Total = document.querySelector("#ej7-total");

ej7Lista.addEventListener("click", (evento) => {
    // El clic "sube" desde el botón hasta la lista. evento.target es el elemento pulsado de verdad
    const boton = evento.target.closest("button");
    if (!boton) {
        return; // se ha hecho clic en la lista, pero no en un botón
    }

    boton.closest("li").remove();

    const quedan = ej7Lista.children.length;
    if (quedan === 0) {
        ej7Total.textContent = "No quedan tareas";
    } else if (quedan === 1) {
        ej7Total.textContent = "Queda 1 tarea";
    } else {
        ej7Total.textContent = `Quedan ${quedan} tareas`;
    }
});
// Ventaja de la delegación: si se añaden tareas nuevas a la lista, sus botones funcionan sin hacer nada más

// Ejercicio 8
// Cuando se pulse una tecla en cualquier parte de la página, muestra en #ej8-tecla
// la tecla pulsada: "Has pulsado: a". Para la barra espaciadora muestra "Espacio".
// No hagas nada si la tecla se pulsa mientras se escribe en un campo (input, textarea o select).
const ej8Tecla = document.querySelector("#ej8-tecla");

document.addEventListener("keydown", (evento) => {
    if (evento.target.matches("input, textarea, select")) {
        return;
    }
    // event.key dice qué tecla es: "a", "A", "Enter", "Escape", "ArrowUp", " " (espacio)...
    const nombre = evento.key === " " ? "Espacio" : evento.key;
    ej8Tecla.textContent = `Has pulsado: ${nombre}`;
});

// Ejercicio 9
// Valida el formulario #ej9-form al enviarlo, sin que la página se recargue:
//    - El nombre es obligatorio.
//    - El correo debe tener un formato válido.
// Si hay errores, muéstralos en #ej9-resultado (con la clase "mensaje-error").
// Si todo es correcto, muestra "Gracias, <nombre>. Te escribiremos a <correo>."
// (con la clase "mensaje-exito") y vacía el formulario.
const ej9Form = document.querySelector("#ej9-form");
const ej9Resultado = document.querySelector("#ej9-resultado");

ej9Form.addEventListener("submit", (evento) => {
    // Por defecto, enviar un formulario recarga la página. preventDefault lo impide
    evento.preventDefault();

    // FormData recoge todos los campos que tienen atributo name
    const datos = Object.fromEntries(new FormData(ej9Form));
    const nombre = datos.nombre.trim();
    const email = datos.email.trim();

    const errores = [];
    if (nombre === "") {
        errores.push("El nombre es obligatorio.");
    }
    // El propio campo type="email" sabe si su contenido tiene formato de correo
    if (email === "" || !ej9Form.elements.email.validity.valid) {
        errores.push("Escribe un correo electrónico válido.");
    }

    if (errores.length > 0) {
        ej9Resultado.textContent = errores.join(" ");
        ej9Resultado.className = "mensaje-error";
        return;
    }

    ej9Resultado.textContent = `Gracias, ${nombre}. Te escribiremos a ${email}.`;
    ej9Resultado.className = "mensaje-exito";
    ej9Form.reset(); // vacía todos los campos
});

// Ejercicio 10
// Haz que funcionen las pestañas de #ej10-pestanas: al pulsar una pestaña se muestra su panel
// y se ocultan los demás. Cada pestaña guarda el id de su panel en data-panel.
//    - Usa un solo listener en el contenedor de las pestañas (delegación).
//    - La pestaña activa debe tener aria-selected="true" y las demás "false".
const ej10Pestanas = document.querySelector("#ej10-pestanas");

ej10Pestanas.addEventListener("click", (evento) => {
    const pulsada = evento.target.closest(".pestana");
    if (!pulsada) {
        return;
    }

    for (const pestana of ej10Pestanas.querySelectorAll(".pestana")) {
        const activa = pestana === pulsada;
        pestana.setAttribute("aria-selected", activa);
        // Cada pestaña sabe qué panel le corresponde gracias a data-panel
        document.getElementById(pestana.dataset.panel).hidden = !activa;
    }
});
