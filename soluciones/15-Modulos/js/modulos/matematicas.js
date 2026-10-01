/*
Módulo de matemáticas (ejercicios 1, 3 y 4)
Solo se puede usar desde fuera lo que lleva export. Lo demás es privado del módulo.
*/

export const IVA = 21;

export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

// Función privada: no se exporta, así que solo se puede usar dentro de este archivo
function redondear(numero) {
    return Math.round(numero * 100) / 100;
}

export function conIva(precio) {
    return redondear(precio * (1 + IVA / 100));
}

// Ejercicio 3: división que no falla con 0
export function dividir(a, b) {
    if (b === 0) {
        return null;
    }
    return redondear(a / b);
}
