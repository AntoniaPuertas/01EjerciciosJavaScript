/*
Módulo de saludo (ejercicios 2 y 8)
Un módulo solo puede tener una exportación por defecto (export default).
*/

export default function saludar(nombre = "invitado") {
    return `Hola, ${nombre}. Bienvenido a los módulos de JavaScript`;
}
