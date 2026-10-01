/*
Soluciones de los ejercicios de Módulos
Los enunciados están en ejercicios/15-Modulos/js/ejercicios.js
Los módulos resueltos están en la carpeta js/modulos/ de esta misma solución.

Este archivo se carga con <script type="module">. Por eso:
    - Puede usar import y export.
    - Funciona en modo estricto automáticamente.
    - Sus variables no son globales: solo existen dentro de este archivo.
    - Necesita que la página se abra desde un servidor (WAMP, XAMPP, Live Server...).

Las rutas de import son relativas a ESTE ARCHIVO .js (al contrario que las de fetch,
que son relativas a la página HTML) y tienen que incluir la extensión .js.
Los import se ejecutan antes que el resto del código, estén donde estén escritos.
*/

// Ejercicio 1
// En modulos/matematicas.js, exporta la constante IVA (21) y las funciones sumar(a, b) y restar(a, b).
// Crea también una función conIva(precio) que devuelva el precio con IVA redondeado a 2 decimales,
// usando una función redondear() que NO se exporte. Importa y prueba lo exportado.
import { IVA, sumar, restar, conIva } from "./modulos/matematicas.js";

console.log("--- Ejercicio 1 ---");
console.log(sumar(8, 4));     // 12
console.log(restar(8, 4));    // 4
console.log(`El IVA es del ${IVA} %`);
console.log(conIva(19.99));   // 24.19
// redondear() no se puede importar: es privada del módulo

// Ejercicio 2
// En modulos/saludo.js, crea una exportación por defecto: una función que reciba un nombre
// y devuelva "Hola, <nombre>. Bienvenido a los módulos de JavaScript" ("invitado" si no hay nombre).
// Impórtala con el nombre darBienvenida para comprobar que al importar por defecto
// se puede elegir cualquier nombre.
import darBienvenida from "./modulos/saludo.js";

console.log("--- Ejercicio 2 ---");
console.log(darBienvenida("Ana"));
console.log(darBienvenida());

// Ejercicio 3
// Añade a modulos/matematicas.js una función dividir(a, b) que devuelva null si b es 0.
// En este archivo ya existe una función llamada dividir, así que impórtala con otro nombre
// (dividirSeguro) usando as.
import { dividir as dividirSeguro } from "./modulos/matematicas.js";

function dividir(a, b) {
    return a / b; // versión local, sin control de la división entre 0
}

console.log("--- Ejercicio 3 ---");
console.log(dividir(10, 0));       // Infinity
console.log(dividirSeguro(10, 0)); // null
console.log(dividirSeguro(10, 4)); // 2.5

// Ejercicio 4
// Importa todo el módulo matematicas.js como un único objeto llamado mates (import * as).
// Muestra en la consola qué exporta el módulo (Object.keys) y usa mates.conIva().
import * as mates from "./modulos/matematicas.js";

console.log("--- Ejercicio 4 ---");
console.log("El módulo exporta:", Object.keys(mates)); // ['IVA', 'conIva', 'dividir', 'restar', 'sumar']
console.log(mates.conIva(100)); // 121
// Todos los import del mismo archivo comparten el módulo: se ha cargado una sola vez

// Ejercicio 5
// En modulos/datos.js, exporta el array PRODUCTOS y una función buscarProducto(id)
// que devuelva el producto con ese id o null. Impórtalos y:
//    - Muestra los nombres de los productos que cuestan menos de 50 €.
//    - Busca el producto con id 4 y el de id 99.
//    - Intenta asignar un array nuevo a PRODUCTOS dentro de un try...catch y muestra el error.
import { PRODUCTOS, buscarProducto } from "./modulos/datos.js";

console.log("--- Ejercicio 5 ---");
const baratos = PRODUCTOS.filter((p) => p.precio < 50).map((p) => p.nombre);
console.log("Menos de 50 €:", baratos); // ['Auriculares', 'Alfombrilla']
console.log(buscarProducto(4));  // { id: 4, nombre: 'Micrófono', precio: 85 }
console.log(buscarProducto(99)); // null

try {
    PRODUCTOS = []; // las importaciones son de solo lectura, aunque en el módulo no fueran const
} catch (error) {
    console.log(`No se puede reasignar una importación: ${error.name}`); // TypeError
}

// Ejercicio 6
// En modulos/formato.js, exporta dos funciones:
//    - formatearPrecio(numero): devuelve el precio en euros con formato español, usando Intl.NumberFormat.
//    - formatearFecha(fecha): devuelve la fecha en formato largo, usando Intl.DateTimeFormat.
// Pruébalas con los precios 12.5, 1299.5 y 12500, y con la fecha 29 de septiembre de 2026.
import { formatearPrecio, formatearFecha } from "./modulos/formato.js";

console.log("--- Ejercicio 6 ---");
console.log(formatearPrecio(12.5));   // 12,50 €
console.log(formatearPrecio(1299.5)); // 1299,50 € → en español, los números de 4 cifras no llevan punto de miles
console.log(formatearPrecio(12500));  // 12.500,00 €
console.log(formatearFecha(new Date(2026, 8, 29))); // 29 de septiembre de 2026 (los meses empiezan en 0)

// Ejercicio 7
// En modulos/contador.js, crea una variable cuenta que NO se exporte y exporta dos funciones:
// incrementar() y obtenerValor(). En modulos/informe.js, importa obtenerValor y exporta una
// función generarInforme() que devuelva "Informe: el contador vale <valor>".
// Aquí, incrementa el contador 3 veces y muestra el informe: ¿qué valor aparece?
import { incrementar } from "./modulos/contador.js";
import { generarInforme } from "./modulos/informe.js";

console.log("--- Ejercicio 7 ---");
incrementar();
incrementar();
incrementar();
console.log(generarInforme()); // Informe: el contador vale 3
// informe.js ve el valor 3 porque los dos archivos importan el mismo módulo contador.js:
// un módulo se ejecuta una sola vez y su estado se comparte

// Ejercicio 8
// Crea modulos/index.js, un módulo "barril" que reexporte todo lo de matematicas.js y formato.js
// y la exportación por defecto de saludo.js con el nombre saludar.
// Importa desde index.js las funciones saludar y conIva, y usa también formatearPrecio.
// Comprueba si saludar es la misma función que darBienvenida (ejercicio 2).
import { saludar, conIva as conIvaDesdeIndice } from "./modulos/index.js";

console.log("--- Ejercicio 8 ---");
console.log(saludar("Luis"));
console.log(formatearPrecio(conIvaDesdeIndice(50))); // 60,50 €
console.log("¿Es la misma función?", saludar === darBienvenida); // true: es el mismo módulo

// Ejercicio 9
// Al pulsar #ej9-boton, carga modulos/estadisticas.js con import() dinámico y usa su función
// calcularEstadisticas(numeros) con los precios de PRODUCTOS. Muestra el resultado en
// #ej9-resultado: "Mínimo: 12,50 € · Máximo: 85,00 € · Media: 48,13 €".
// Comprueba en la consola que el módulo no se carga hasta pulsar el botón.
const ej9Resultado = document.querySelector("#ej9-resultado");

document.querySelector("#ej9-boton").addEventListener("click", async () => {
    ej9Resultado.textContent = "Cargando módulo...";
    ej9Resultado.className = "";

    try {
        // import() devuelve una promesa con el módulo. Solo se descarga la primera vez
        const { calcularEstadisticas } = await import("./modulos/estadisticas.js");
        const precios = PRODUCTOS.map((producto) => producto.precio);
        const { minimo, maximo, media } = calcularEstadisticas(precios);

        ej9Resultado.textContent =
            `Mínimo: ${formatearPrecio(minimo)} · Máximo: ${formatearPrecio(maximo)} · Media: ${formatearPrecio(media)}`;
    } catch (error) {
        ej9Resultado.textContent = "No se ha podido cargar el módulo de estadísticas";
        ej9Resultado.className = "mensaje-error";
        console.error(error);
    }
});

// Ejercicio 10
// En modulos/interfaz.js, exporta una función crearTarjeta(producto) que devuelva un article
// con la clase "tarjeta", el nombre en un h4 y el precio formateado en un párrafo
// (importa formatearPrecio desde formato.js). Aquí, crea una tarjeta por cada producto
// de PRODUCTOS y añádelas a #ej10-productos.
import { crearTarjeta } from "./modulos/interfaz.js";

console.log("--- Ejercicio 10 ---");
const ej10Contenedor = document.querySelector("#ej10-productos");
ej10Contenedor.append(...PRODUCTOS.map(crearTarjeta));
console.log(`${ej10Contenedor.children.length} tarjetas creadas`); // 4
