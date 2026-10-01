/*
Módulo contador (ejercicio 7)
La variable cuenta no se exporta: solo se puede cambiar con las funciones que sí se exportan.
Un módulo se ejecuta una sola vez, aunque lo importen varios archivos, así que todos comparten
la misma cuenta.
*/

let cuenta = 0;

export function incrementar() {
    cuenta++;
}

export function obtenerValor() {
    return cuenta;
}
