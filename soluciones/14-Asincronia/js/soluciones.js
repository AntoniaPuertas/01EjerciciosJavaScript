/*
Soluciones de los ejercicios de Asincronía
Los enunciados están en ejercicios/14-Asincronia/js/ejercicios.js

Los ejercicios 6 a 9 cargan archivos con fetch. Para que funcionen, la página tiene que abrirse
desde un servidor (WAMP, XAMPP, Live Server...), no con doble clic: con una dirección que empieza
por file:// el navegador bloquea las peticiones.
*/

// Ejercicio 1
// Al pulsar #ej1-boton, muestra "Espera..." en #ej1-mensaje y, 3 segundos después,
// "¡Han pasado 3 segundos!". Desactiva el botón mientras se espera para que no se pueda
// pulsar varias veces seguidas.
const ej1Boton = document.querySelector("#ej1-boton");
const ej1Mensaje = document.querySelector("#ej1-mensaje");

ej1Boton.addEventListener("click", () => {
    ej1Boton.disabled = true;
    ej1Mensaje.textContent = "Espera...";

    // setTimeout programa una función para más tarde y el programa sigue sin esperar
    setTimeout(() => {
        ej1Mensaje.textContent = "¡Han pasado 3 segundos!";
        ej1Boton.disabled = false;
    }, 3000);
});

// Ejercicio 2
// Crea una cuenta atrás de 10 segundos en #ej2-tiempo:
//    - Iniciar (#ej2-iniciar) la pone en marcha y resta 1 cada segundo.
//      Si ya estaba en marcha, no hace nada. Si había terminado, vuelve a empezar desde 10.
//    - Detener (#ej2-detener) la para en el número en que esté.
//    - Al llegar a 0 se detiene sola y muestra "¡Tiempo!".
const ej2Tiempo = document.querySelector("#ej2-tiempo");
let ej2Segundos = 10;
let ej2Intervalo = null; // guarda el identificador de setInterval para poder detenerlo

function ej2Parar() {
    clearInterval(ej2Intervalo);
    ej2Intervalo = null;
}

document.querySelector("#ej2-iniciar").addEventListener("click", () => {
    if (ej2Intervalo !== null) {
        return; // ya está en marcha: sin esta comprobación habría dos intervalos restando a la vez
    }
    if (ej2Segundos === 0) {
        ej2Segundos = 10;
    }
    ej2Tiempo.textContent = ej2Segundos;

    ej2Intervalo = setInterval(() => {
        ej2Segundos--;
        if (ej2Segundos === 0) {
            ej2Parar();
            ej2Tiempo.textContent = "¡Tiempo!";
        } else {
            ej2Tiempo.textContent = ej2Segundos;
        }
    }, 1000);
});

document.querySelector("#ej2-detener").addEventListener("click", ej2Parar);

// Ejercicio 3
// Crea una función esperar(ms) que devuelva una promesa que se cumpla pasados ms milisegundos.
// Úsala con .then(): al pulsar #ej3-boton, muestra "Esperando..." en #ej3-mensaje y, cuando
// se cumpla la promesa de esperar(1500), "Promesa cumplida después de 1,5 segundos".

// La reutilizaremos en los ejercicios 5 y 10
function esperar(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms); // pasado el tiempo, la promesa se cumple
    });
}

const ej3Mensaje = document.querySelector("#ej3-mensaje");

document.querySelector("#ej3-boton").addEventListener("click", () => {
    ej3Mensaje.textContent = "Esperando...";
    esperar(1500).then(() => {
        ej3Mensaje.textContent = "Promesa cumplida después de 1,5 segundos";
    });
});

// Ejercicio 4
// Crea una función lanzarDado() que devuelva una promesa. Medio segundo después, "tira" un dado:
//    - Si sale 3 o más, la promesa se cumple con el número.
//    - Si sale 1 o 2, la promesa se rechaza con un Error: "Ha salido un 2: pierdes".
// Al pulsar #ej4-boton, muestra el resultado en #ej4-resultado usando .then(), .catch() y
// .finally(): "Ha salido un 5: ¡ganas!" con la clase "mensaje-exito", o el mensaje del error
// con la clase "mensaje-error". Desactiva el botón mientras se espera y reactívalo en .finally().
function lanzarDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numero = Math.floor(Math.random() * 6) + 1;
            if (numero >= 3) {
                resolve(numero);
            } else {
                reject(new Error(`Ha salido un ${numero}: pierdes`));
            }
        }, 500);
    });
}

const ej4Boton = document.querySelector("#ej4-boton");
const ej4Resultado = document.querySelector("#ej4-resultado");

ej4Boton.addEventListener("click", () => {
    ej4Boton.disabled = true;
    ej4Resultado.textContent = "Lanzando...";
    ej4Resultado.className = "";

    lanzarDado()
        .then((numero) => {
            ej4Resultado.textContent = `Ha salido un ${numero}: ¡ganas!`;
            ej4Resultado.className = "mensaje-exito";
        })
        .catch((error) => {
            ej4Resultado.textContent = error.message;
            ej4Resultado.className = "mensaje-error";
        })
        .finally(() => {
            // finally se ejecuta siempre, tanto si la promesa se cumple como si se rechaza
            ej4Boton.disabled = false;
        });
});

// Ejercicio 5
// Al pulsar #ej5-boton, muestra en #ej5-luz la secuencia de un semáforo usando async/await
// y la función esperar del ejercicio 3: "🟢 Verde" durante 1 segundo, "🟡 Ámbar" durante
// 1 segundo y "🔴 Rojo" durante 1 segundo. Al terminar, muestra "Secuencia terminada".
// El botón debe estar desactivado mientras dura la secuencia.
const FASES_SEMAFORO = [
    { texto: "🟢 Verde", duracion: 1000 },
    { texto: "🟡 Ámbar", duracion: 1000 },
    { texto: "🔴 Rojo", duracion: 1000 },
];

const ej5Boton = document.querySelector("#ej5-boton");
const ej5Luz = document.querySelector("#ej5-luz");

// Con async/await el código asíncrono se lee de arriba abajo, como si fuera normal
ej5Boton.addEventListener("click", async () => {
    ej5Boton.disabled = true;

    for (const fase of FASES_SEMAFORO) {
        ej5Luz.textContent = fase.texto;
        await esperar(fase.duracion); // la función se pausa aquí sin bloquear la página
    }

    ej5Luz.textContent = "Secuencia terminada";
    ej5Boton.disabled = false;
});

// Ejercicio 6
// Crea una función asíncrona cargarJSON(archivo) que cargue con fetch un archivo de la carpeta
// assets/datos/ y devuelva su contenido convertido desde JSON. Si la respuesta no es correcta
// (response.ok es false), debe lanzar un Error.
// Al pulsar #ej6-boton, carga productos.json y muestra en #ej6-lista un elemento por producto:
// "Portátil: 799.00 €". Mientras carga, muestra "Cargando productos..." en #ej6-estado y,
// al terminar, "8 productos cargados". Si algo falla, muestra el error en #ej6-estado.

// La ruta de fetch es relativa a la PÁGINA HTML, no a este archivo .js
const RUTA_DATOS = "../../assets/datos/";

// La reutilizaremos en los ejercicios 7, 8 y 9
async function cargarJSON(archivo) {
    const respuesta = await fetch(RUTA_DATOS + archivo);

    // fetch solo falla si no hay conexión. Un error 404 (no encontrado) o 500 (error del servidor)
    // llega como una respuesta normal: hay que comprobarlo con response.ok
    if (!respuesta.ok) {
        throw new Error(`No se ha podido cargar ${archivo} (error ${respuesta.status})`);
    }

    return respuesta.json(); // convierte el texto JSON en objetos y arrays de JavaScript
}

// Mensaje de error comprensible, con una pista si la página se ha abierto con doble clic
function mensajeDeError(error) {
    if (location.protocol === "file:") {
        return "No se pueden cargar datos abriendo la página con doble clic. Ábrela desde un servidor (WAMP, Live Server...).";
    }
    return error.message;
}

const ej6Estado = document.querySelector("#ej6-estado");
const ej6Lista = document.querySelector("#ej6-lista");

document.querySelector("#ej6-boton").addEventListener("click", async () => {
    ej6Estado.textContent = "Cargando productos...";
    ej6Estado.className = "";
    ej6Lista.replaceChildren(); // vacía la lista por si se pulsa el botón más de una vez

    try {
        const productos = await cargarJSON("productos.json");

        const elementos = productos.map((producto) => {
            const li = document.createElement("li");
            li.textContent = `${producto.nombre}: ${producto.precio.toFixed(2)} €`;
            return li;
        });
        ej6Lista.append(...elementos);

        ej6Estado.textContent = `${productos.length} productos cargados`;
    } catch (error) {
        ej6Estado.textContent = mensajeDeError(error);
        ej6Estado.className = "mensaje-error";
    }
});

// Ejercicio 7
// Al pulsar #ej7-boton, intenta cargar con cargarJSON el archivo "no-existe.json".
// Como no existe, muestra en #ej7-resultado un mensaje pensado para el usuario:
// "No se han podido cargar los datos. Inténtalo de nuevo más tarde." (con la clase "mensaje-error"),
// y escribe el error técnico completo en la consola con console.error().
const ej7Resultado = document.querySelector("#ej7-resultado");

document.querySelector("#ej7-boton").addEventListener("click", async () => {
    ej7Resultado.textContent = "Cargando...";
    ej7Resultado.className = "";

    try {
        await cargarJSON("no-existe.json");
        ej7Resultado.textContent = "Datos cargados"; // no llegará a ejecutarse
    } catch (error) {
        // Al usuario, un mensaje claro; los detalles técnicos, a la consola para quien programa
        ej7Resultado.textContent = "No se han podido cargar los datos. Inténtalo de nuevo más tarde.";
        ej7Resultado.className = "mensaje-error";
        console.error("Detalle del error:", error.message);
    }
});

// Ejercicio 8
// Al pulsar #ej8-boton, carga A LA VEZ productos.json y categorias.json con Promise.all.
// Muestra en #ej8-lista cada producto con el nombre de su categoría: "Portátil (Informática)".
// En #ej8-estado muestra "Cargados 8 productos y 3 categorías".
const ej8Estado = document.querySelector("#ej8-estado");
const ej8Lista = document.querySelector("#ej8-lista");

document.querySelector("#ej8-boton").addEventListener("click", async () => {
    ej8Estado.textContent = "Cargando...";
    ej8Estado.className = "";
    ej8Lista.replaceChildren();

    try {
        // Las dos peticiones empiezan a la vez. Promise.all espera a que terminen ambas
        // y devuelve sus resultados en el mismo orden (desestructuración de arrays)
        const [productos, categorias] = await Promise.all([
            cargarJSON("productos.json"),
            cargarJSON("categorias.json"),
        ]);

        // Objeto { 1: "Informática", 2: "Hogar", 3: "Libros" } para buscar cada nombre por su id
        const nombreCategoria = Object.fromEntries(
            categorias.map((categoria) => [categoria.id, categoria.nombre])
        );

        ej8Lista.append(...productos.map((producto) => {
            const li = document.createElement("li");
            li.textContent = `${producto.nombre} (${nombreCategoria[producto.categoriaId]})`;
            return li;
        }));

        ej8Estado.textContent = `Cargados ${productos.length} productos y ${categorias.length} categorías`;
    } catch (error) {
        ej8Estado.textContent = mensajeDeError(error);
        ej8Estado.className = "mensaje-error";
    }
});

// Ejercicio 9
// Crea un buscador de productos en #ej9-buscar:
//    - Al cargar la página, carga productos.json una sola vez. Mientras tanto, muestra
//      "Cargando productos..." en #ej9-estado y, al terminar, "Escribe para buscar".
//    - Al escribir, muestra en #ej9-resultados los productos cuyo nombre contenga el texto
//      (sin distinguir mayúsculas), y en #ej9-estado cuántos hay: "2 productos encontrados",
//      "1 producto encontrado" o "0 productos encontrados".
//    - No busques con cada tecla: espera a que el usuario deje de escribir 300 ms (debounce).
const ej9Buscar = document.querySelector("#ej9-buscar");
const ej9Estado = document.querySelector("#ej9-estado");
const ej9Resultados = document.querySelector("#ej9-resultados");

let ej9Productos = [];
let ej9Temporizador = null;

ej9Estado.textContent = "Cargando productos...";
cargarJSON("productos.json")
    .then((productos) => {
        ej9Productos = productos;
        ej9Estado.textContent = "Escribe para buscar";
    })
    .catch((error) => {
        ej9Estado.textContent = mensajeDeError(error);
        ej9Estado.className = "mensaje-error";
    });

function ej9Filtrar(texto) {
    const busqueda = texto.trim().toLowerCase();
    ej9Resultados.replaceChildren();

    if (busqueda === "") {
        ej9Estado.textContent = "Escribe para buscar";
        return;
    }

    const encontrados = ej9Productos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda)
    );

    ej9Resultados.append(...encontrados.map((producto) => {
        const li = document.createElement("li");
        li.textContent = producto.nombre;
        return li;
    }));

    ej9Estado.textContent = encontrados.length === 1
        ? "1 producto encontrado"
        : `${encontrados.length} productos encontrados`;
}

ej9Buscar.addEventListener("input", () => {
    // Cada tecla cancela la búsqueda programada y programa otra: solo se busca
    // cuando pasan 300 ms sin escribir
    clearTimeout(ej9Temporizador);
    ej9Temporizador = setTimeout(() => ej9Filtrar(ej9Buscar.value), 300);
});

// Ejercicio 10
// Simula peticiones a un servidor con un tiempo máximo de espera de 2 segundos:
//    - Crea simularPeticion(ms), que devuelve una promesa que se cumple pasados ms milisegundos
//      con el texto "Respuesta recibida en 1 s" (con los segundos que correspondan).
//    - Crea limiteDeTiempo(ms), que devuelve una promesa que se rechaza pasados ms milisegundos
//      con el Error "El servidor ha tardado más de 2 s".
//    - Con Promise.race, haz que gane la que termine antes. #ej10-rapida simula una petición
//      de 1 segundo y #ej10-lenta una de 3. Muestra el resultado en #ej10-resultado.
//    - Desactiva los dos botones mientras se espera.
function simularPeticion(ms) {
    return esperar(ms).then(() => `Respuesta recibida en ${ms / 1000} s`);
}

function limiteDeTiempo(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`El servidor ha tardado más de ${ms / 1000} s`));
        }, ms);
    });
}

const ej10Botones = document.querySelectorAll("#ej10 button");
const ej10Resultado = document.querySelector("#ej10-resultado");

async function ej10Probar(duracion) {
    ej10Botones.forEach((boton) => (boton.disabled = true));
    ej10Resultado.textContent = "Esperando respuesta...";
    ej10Resultado.className = "";

    try {
        // Promise.race termina en cuanto termina la primera promesa, se cumpla o se rechace
        const respuesta = await Promise.race([simularPeticion(duracion), limiteDeTiempo(2000)]);
        ej10Resultado.textContent = respuesta;
        ej10Resultado.className = "mensaje-exito";
    } catch (error) {
        ej10Resultado.textContent = error.message;
        ej10Resultado.className = "mensaje-error";
    } finally {
        ej10Botones.forEach((boton) => (boton.disabled = false));
    }
}

document.querySelector("#ej10-rapida").addEventListener("click", () => ej10Probar(1000));
document.querySelector("#ej10-lenta").addEventListener("click", () => ej10Probar(3000));
// Con fetch real no hace falta programarlo a mano: fetch(url, { signal: AbortSignal.timeout(2000) })
// cancela la petición si tarda más de 2 segundos
