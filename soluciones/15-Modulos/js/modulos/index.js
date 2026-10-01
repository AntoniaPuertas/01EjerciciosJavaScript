/*
Módulo índice o "barril" (ejercicio 8)
Reúne en un solo punto las exportaciones de otros módulos. Quien lo use puede importar
todo desde aquí, sin necesidad de saber en qué archivo está cada cosa.
*/

export * from "./matematicas.js";
export * from "./formato.js";
// export * no incluye la exportación por defecto: hay que reexportarla con un nombre
export { default as saludar } from "./saludo.js";
