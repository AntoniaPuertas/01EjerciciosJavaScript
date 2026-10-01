/*
Módulo de datos (ejercicios 5, 9 y 10)
Tener los datos en su propio módulo permite usarlos desde varios archivos sin copiarlos.
*/

export const PRODUCTOS = [
    { id: 1, nombre: "Auriculares", precio: 35 },
    { id: 2, nombre: "Webcam", precio: 60 },
    { id: 3, nombre: "Alfombrilla", precio: 12.5 },
    { id: 4, nombre: "Micrófono", precio: 85 },
];

export function buscarProducto(id) {
    return PRODUCTOS.find((producto) => producto.id === id) ?? null;
}
