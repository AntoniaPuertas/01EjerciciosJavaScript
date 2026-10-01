/*
Módulo informe (ejercicio 7)
Un módulo puede importar otros módulos. Este importa el mismo contador que soluciones.js.
*/

import { obtenerValor } from "./contador.js";

export function generarInforme() {
    return `Informe: el contador vale ${obtenerValor()}`;
}
