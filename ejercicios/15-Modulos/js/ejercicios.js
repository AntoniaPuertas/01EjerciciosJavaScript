/*
Ejercicios de Módulos
En este tema el código se reparte en varios archivos:
    - En la carpeta js/modulos/ escribes los módulos: lo que cada uno exporta.
    - En este archivo los importas y los usas.
Las soluciones están en soluciones/15-Modulos/js/ (soluciones.js y su carpeta modulos/).

¡Importante!
1. Abre la página desde un servidor (WAMP, XAMPP, Live Server...). Con doble clic
   (dirección file://), el navegador no carga los módulos.
2. Cada ejercicio tiene su línea import COMENTADA. Descoméntala solo cuando hayas escrito
   en el módulo lo que importa: si importas algo que todavía no existe, falla todo el archivo
   y no se ejecuta ningún ejercicio. Si pasa, la consola te dirá qué falta.
3. Las rutas de import son relativas a este archivo y llevan la extensión .js.
*/

// Ejercicio 1
// En modulos/matematicas.js, exporta la constante IVA (21) y las funciones sumar(a, b) y restar(a, b).
// Crea también una función conIva(precio) que devuelva el precio con IVA redondeado a 2 decimales,
// usando una función redondear() que NO se exporte. Después, descomenta el import y prueba
// lo exportado: sumar(8, 4), restar(8, 4), el valor de IVA y conIva(19.99).

// import { IVA, sumar, restar, conIva } from "./modulos/matematicas.js";

console.log("--- Ejercicio 1 ---");

// Escribe aquí tu solución


// Ejercicio 2
// En modulos/saludo.js, crea una exportación por defecto: una función que reciba un nombre
// y devuelva "Hola, <nombre>. Bienvenido a los módulos de JavaScript" ("invitado" si no hay nombre).
// Impórtala con el nombre darBienvenida (al importar por defecto se puede elegir cualquier nombre)
// y pruébala con y sin nombre.

// import darBienvenida from "./modulos/saludo.js";

console.log("--- Ejercicio 2 ---");

// Escribe aquí tu solución


// Ejercicio 3
// Añade a modulos/matematicas.js una función dividir(a, b) que devuelva null si b es 0.
// En este archivo ya existe una función llamada dividir (la de aquí abajo), así que al importarla
// tendrás que darle otro nombre: dividirSeguro. Completa tú la línea import usando as.
// Compara dividir(10, 0) con dividirSeguro(10, 0).

// import { ... } from "./modulos/matematicas.js";

function dividir(a, b) {
    return a / b; // versión local, sin control de la división entre 0
}

console.log("--- Ejercicio 3 ---");

// Escribe aquí tu solución


// Ejercicio 4
// Importa todo el módulo matematicas.js como un único objeto llamado mates (import * as).
// Muestra en la consola qué exporta el módulo (Object.keys) y usa mates.conIva(100).

// import * as mates from "./modulos/matematicas.js";

console.log("--- Ejercicio 4 ---");

// Escribe aquí tu solución


// Ejercicio 5
// En modulos/datos.js, exporta el array PRODUCTOS (ya está escrito) y una función buscarProducto(id)
// que devuelva el producto con ese id o null. Impórtalos y:
//    - Muestra los nombres de los productos que cuestan menos de 50 €.
//    - Busca el producto con id 4 y el de id 99.
//    - Intenta asignar un array nuevo a PRODUCTOS dentro de un try...catch y muestra el error.

// import { PRODUCTOS, buscarProducto } from "./modulos/datos.js";

console.log("--- Ejercicio 5 ---");

// Escribe aquí tu solución


// Ejercicio 6
// En modulos/formato.js, exporta las funciones formatearPrecio(numero) y formatearFecha(fecha).
// Pruébalas con los precios 12.5, 1299.5 y 12500, y con la fecha 29 de septiembre de 2026.
// ¿Por qué 1299,50 € no lleva punto de miles y 12.500,00 € sí? (La respuesta está en la solución).

// import { formatearPrecio, formatearFecha } from "./modulos/formato.js";

console.log("--- Ejercicio 6 ---");

// Escribe aquí tu solución


// Ejercicio 7
// En modulos/contador.js, crea una variable cuenta que NO se exporte y exporta incrementar()
// y obtenerValor(). En modulos/informe.js, importa obtenerValor y exporta generarInforme().
// Aquí, incrementa el contador 3 veces y muestra el informe: ¿qué valor aparece? ¿Por qué?

// import { incrementar } from "./modulos/contador.js";
// import { generarInforme } from "./modulos/informe.js";

console.log("--- Ejercicio 7 ---");

// Escribe aquí tu solución


// Ejercicio 8
// Crea en modulos/index.js un módulo "barril" que reexporte todo lo de matematicas.js y formato.js
// y la exportación por defecto de saludo.js con el nombre saludar.
// Importa desde index.js las funciones saludar y conIva. Como conIva ya se importó en el ejercicio 1,
// dale otro nombre: conIvaDesdeIndice.
// Muestra formatearPrecio(conIvaDesdeIndice(50)) y comprueba si saludar === darBienvenida.

// import { saludar, conIva as conIvaDesdeIndice } from "./modulos/index.js";

console.log("--- Ejercicio 8 ---");

// Escribe aquí tu solución


// Ejercicio 9
// Al pulsar #ej9-boton, carga modulos/estadisticas.js con import() dinámico y usa su función
// calcularEstadisticas(numeros) con los precios de PRODUCTOS. Muestra el resultado en
// #ej9-resultado: "Mínimo: 12,50 € · Máximo: 85,00 € · Media: 48,13 €".
// Comprueba en la consola que el módulo no se carga hasta pulsar el botón.
// (Aquí no hay línea import: la carga dinámica se hace dentro del listener con await import(...)).

// Escribe aquí tu solución


// Ejercicio 10
// En modulos/interfaz.js, exporta una función crearTarjeta(producto) que devuelva un article
// con la clase "tarjeta", el nombre en un h4 y el precio formateado en un párrafo.
// Aquí, crea una tarjeta por cada producto de PRODUCTOS y añádelas a #ej10-productos.

// import { crearTarjeta } from "./modulos/interfaz.js";

console.log("--- Ejercicio 10 ---");

// Escribe aquí tu solución

