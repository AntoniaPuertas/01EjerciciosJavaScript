/*
Módulo de estadísticas (ejercicio 9)
Se carga con import() dinámico, solo cuando hace falta. Este mensaje aparece en la consola
la primera vez que se carga, y nunca antes de pulsar el botón.
*/

console.log("Módulo de estadísticas cargado");

export function calcularEstadisticas(numeros) {
    const total = numeros.reduce((suma, n) => suma + n, 0);
    return {
        minimo: Math.min(...numeros),
        maximo: Math.max(...numeros),
        media: Math.round((total / numeros.length) * 100) / 100,
    };
}
