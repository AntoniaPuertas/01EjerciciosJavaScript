/*
Módulo de interfaz (ejercicio 10)
Agrupa las funciones que crean elementos de la página. Usa el módulo de formato para los precios.
*/

import { formatearPrecio } from "./formato.js";

export function crearTarjeta(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    const nombre = document.createElement("h4");
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = formatearPrecio(producto.precio);

    tarjeta.append(nombre, precio);
    return tarjeta;
}
