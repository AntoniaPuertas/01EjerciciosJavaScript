/*
Ejercicio 1:
Crea un objeto llamado "persona" con las propiedades: nombre, edad y profesión. 
Luego, muestra cada propiedad en la consola.

Ejercicio 2:
Añade un método al objeto "persona" que devuelva una presentación en forma de string, 
por ejemplo: "Hola, me llamo Juan, tengo 30 años y soy ingeniero."

Ejercicio 3:
Crea un objeto llamado "coche" con las propiedades: marca, modelo y año. 
Añade un método que calcule cuántos años tiene el coche basado en el año actual.

Ejercicio 4:
Crea un objeto llamado "tienda" que contenga un array de productos. 
Cada producto debe ser un objeto con las propiedades: nombre y precio. 
Añade un método para calcular el precio total de todos los productos.

Ejercicio 5:
Crea un objeto llamado "biblioteca" que contenga un array de libros. 
Cada libro debe tener las propiedades: título, autor y leído (booleano). 
Añade un método que liste los libros leídos.

Ejercicio 6:
Crea un objeto llamado "usuario" con las propiedades: nombre, email y contraseña. 
Añade un método para validar si una contraseña proporcionada coincide con la del usuario.

Ejercicio 7:
Crea un objeto llamado "calculadora" con métodos para sumar, restar, multiplicar y dividir dos números. 
Prueba cada método con diferentes valores.

Ejercicio 8:
Crea un objeto llamado "agenda" que permita agregar, eliminar y buscar contactos. 
Cada contacto debe tener las propiedades: nombre, teléfono y email.

Ejercicio 9:
Crea un objeto llamado "clima" con las propiedades: temperatura, humedad y ciudad. 
Añade un método que devuelva una descripción del clima en formato de string.

*/

// Nota: en los nombres de propiedades evitamos tildes y la ñ (profesion, anio, titulo, leido,
// contrasena, telefono). JavaScript las admite, pero es una convención habitual para evitar
// problemas de codificación y de escritura en otros teclados.

// Ejercicio 1
console.log("--- Ejercicio 1 ---");
const persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "ingeniero",
};

// Notación de punto
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.profesion);

// Recorriendo el objeto con for...in (notación de corchetes para leer cada clave)
for (const clave in persona) {
    console.log(`${clave}: ${persona[clave]}`);
}

// Ejercicio 2
// Añadimos el método al objeto que ya existe. Usamos una función normal (no flecha)
// porque dentro de ella "this" hace referencia al objeto persona.
console.log("--- Ejercicio 2 ---");
persona.presentarse = function () {
    return `Hola, me llamo ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`;
};

console.log(persona.presentarse());

// Ejercicio 3
// new Date().getFullYear() devuelve el año actual, así el resultado siempre está al día
console.log("--- Ejercicio 3 ---");
const coche = {
    marca: "Seat",
    modelo: "León",
    anio: 2018,
    calcularAntiguedad() {
        const anioActual = new Date().getFullYear();
        return anioActual - this.anio;
    },
};

console.log(`El ${coche.marca} ${coche.modelo} tiene ${coche.calcularAntiguedad()} años`);

// Ejercicio 4
console.log("--- Ejercicio 4 ---");
const tienda = {
    productos: [
        { nombre: "Teclado", precio: 45 },
        { nombre: "Ratón", precio: 20 },
        { nombre: "Monitor", precio: 180 },
    ],
    calcularTotal() {
        // reduce recorre el array acumulando un valor: empieza en 0
        // y en cada vuelta suma el precio del producto al total
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    },
};

console.log(`Total: ${tienda.calcularTotal()} €`); // 245 €

// Ejercicio 5
console.log("--- Ejercicio 5 ---");
const biblioteca = {
    libros: [
        { titulo: "Cien años de soledad", autor: "Gabriel García Márquez", leido: true },
        { titulo: "El Quijote", autor: "Miguel de Cervantes", leido: false },
        { titulo: "La casa de Bernarda Alba", autor: "Federico García Lorca", leido: true },
    ],
    listarLeidos() {
        // filter se queda con los libros leídos y map extrae solo el título
        return this.libros
            .filter((libro) => libro.leido)
            .map((libro) => libro.titulo);
    },
};

console.log("Libros leídos:", biblioteca.listarLeidos());

// Ejercicio 6
// Solo es un ejercicio de objetos: en una aplicación real nunca se guarda una
// contraseña en texto plano, sino un hash, y la validación se hace en el servidor.
console.log("--- Ejercicio 6 ---");
const usuario = {
    nombre: "Ana",
    email: "ana@ejemplo.com",
    contrasena: "Secreta123",
    validarContrasena(contrasenaIntroducida) {
        return contrasenaIntroducida === this.contrasena;
    },
};

console.log(usuario.validarContrasena("Secreta123")); // true
console.log(usuario.validarContrasena("secreta123")); // false (distingue mayúsculas)

// Ejercicio 7
console.log("--- Ejercicio 7 ---");
const calculadora = {
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    },
    multiplicar(a, b) {
        return a * b;
    },
    dividir(a, b) {
        if (b === 0) {
            return "No se puede dividir entre 0";
        }
        return a / b;
    },
};

console.log(calculadora.sumar(8, 4));       // 12
console.log(calculadora.restar(8, 4));      // 4
console.log(calculadora.multiplicar(8, 4)); // 32
console.log(calculadora.dividir(8, 4));     // 2
console.log(calculadora.sumar(-3, 2.5));    // -0.5
console.log(calculadora.dividir(7, 0));     // No se puede dividir entre 0

// Ejercicio 8
console.log("--- Ejercicio 8 ---");
const agenda = {
    contactos: [],

    agregar(nombre, telefono, email) {
        this.contactos.push({ nombre, telefono, email });
        return `Contacto ${nombre} añadido`;
    },

    // Buscamos sin distinguir mayúsculas y minúsculas
    buscar(nombre) {
        const contacto = this.contactos.find(
            (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
        );
        return contacto ?? `No existe ningún contacto llamado ${nombre}`;
    },

    // Forma declarativa: filter crea un nuevo array sin el contacto a eliminar
    eliminar(nombre) {
        const totalAntes = this.contactos.length;
        this.contactos = this.contactos.filter(
            (c) => c.nombre.toLowerCase() !== nombre.toLowerCase()
        );
        return this.contactos.length < totalAntes
            ? `Contacto ${nombre} eliminado`
            : `No existe ningún contacto llamado ${nombre}`;
    },
};

console.log(agenda.agregar("Lucía", "600111222", "lucia@ejemplo.com"));
console.log(agenda.agregar("Pedro", "600333444", "pedro@ejemplo.com"));
console.table(agenda.contactos);
console.log(agenda.buscar("lucía"));
console.log(agenda.eliminar("Pedro"));
console.log(agenda.buscar("Pedro"));
console.table(agenda.contactos);

// Ejercicio 9
console.log("--- Ejercicio 9 ---");
const clima = {
    temperatura: 24,
    humedad: 40,
    ciudad: "Madrid",
    describir() {
        let sensacion;
        if (this.temperatura >= 30) {
            sensacion = "hace calor";
        } else if (this.temperatura >= 15) {
            sensacion = "la temperatura es agradable";
        } else {
            sensacion = "hace frío";
        }
        return `En ${this.ciudad} hay ${this.temperatura} °C y un ${this.humedad} % de humedad: ${sensacion}.`;
    },
};

console.log(clima.describir());
