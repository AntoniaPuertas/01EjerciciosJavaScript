/*
Módulo de formato (ejercicios 6, 8 y 10)
Intl.NumberFormat e Intl.DateTimeFormat dan formato a números y fechas según el idioma.
Los formateadores se crean una sola vez, al cargar el módulo, y se reutilizan en cada llamada.
*/

const formateadorPrecio = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
});

const formateadorFecha = new Intl.DateTimeFormat("es-ES", {
    dateStyle: "long",
});

export function formatearPrecio(numero) {
    return formateadorPrecio.format(numero);
}

export function formatearFecha(fecha) {
    return formateadorFecha.format(fecha);
}
