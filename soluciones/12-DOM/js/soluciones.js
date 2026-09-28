/*
Soluciones de los ejercicios del DOM
Los enunciados están en ejercicios/12-DOM/js/ejercicios.js

Los resultados se ven en la "Zona de prácticas" de la página y, algunos, también en la consola.
*/

// Ejercicio 1
// Cambia el texto del párrafo #ej1-texto por "¡He cambiado este texto con JavaScript!".
console.log("--- Ejercicio 1 ---");

const ej1Texto = document.querySelector("#ej1-texto");
console.log("Antes:", ej1Texto.textContent);
ej1Texto.textContent = "¡He cambiado este texto con JavaScript!";
console.log("Después:", ej1Texto.textContent);

// Ejercicio 2
// Cuenta cuántos párrafos con la clase ej2-parrafo hay dentro de #ej2.
// Muestra el número en la consola y escríbelo en el span #ej2-total.
console.log("--- Ejercicio 2 ---");

// querySelectorAll devuelve una NodeList con todos los elementos que coinciden
const ej2Parrafos = document.querySelectorAll("#ej2 .ej2-parrafo");
console.log(`Hay ${ej2Parrafos.length} párrafos`);
document.querySelector("#ej2-total").textContent = ej2Parrafos.length;

// Ejercicio 3
// Modifica la caja #ej3-caja:
//    - Con la propiedad style, aumenta su tamaño de letra a 1.6rem.
//    - Con classList, añádele la clase "destacado" (ya está definida en la hoja de estilos).
//    - Comprueba en la consola si la caja tiene la clase "destacado".
console.log("--- Ejercicio 3 ---");

const ej3Caja = document.querySelector("#ej3-caja");
// En style, las propiedades CSS con guion se escriben en camelCase: font-size → fontSize
ej3Caja.style.fontSize = "1.6rem";
ej3Caja.classList.add("destacado");
console.log("¿Tiene la clase destacado?", ej3Caja.classList.contains("destacado")); // true
// Normalmente es mejor usar clases que style: los estilos quedan en el CSS y se adaptan al tema claro y oscuro

// Ejercicio 4
// En la lista #ej4-tareas, cada tarea tiene un atributo data-completada.
// Añade la clase "completada" a las tareas con data-completada="true"
// y escribe en #ej4-resumen un texto como "2 de 4 tareas completadas".
console.log("--- Ejercicio 4 ---");

const ej4Tareas = document.querySelectorAll("#ej4-tareas li");
let ej4Completadas = 0;

// Una NodeList se puede recorrer con forEach o con for...of
ej4Tareas.forEach((tarea) => {
    // Los atributos data-* se leen con dataset. Siempre devuelven texto, por eso comparamos con "true"
    if (tarea.dataset.completada === "true") {
        tarea.classList.add("completada");
        ej4Completadas++;
    }
});

const ej4Texto = `${ej4Completadas} de ${ej4Tareas.length} tareas completadas`;
document.querySelector("#ej4-resumen").textContent = ej4Texto;
console.log(ej4Texto); // 2 de 4 tareas completadas

// Ejercicio 5
// Convierte el enlace #ej5-enlace en un enlace a la documentación del DOM en MDN:
//    - href: https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model
//    - texto: "Documentación del DOM en MDN"
//    - que se abra en una pestaña nueva de forma segura (target y rel).
// Muestra en la consola el valor del atributo href antes y después del cambio.
console.log("--- Ejercicio 5 ---");

const ej5Enlace = document.querySelector("#ej5-enlace");
console.log("href antes:", ej5Enlace.getAttribute("href")); // #

ej5Enlace.setAttribute("href", "https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model");
ej5Enlace.textContent = "Documentación del DOM en MDN";
ej5Enlace.target = "_blank";
// rel="noopener noreferrer" impide que la página nueva pueda controlar la nuestra
ej5Enlace.rel = "noopener noreferrer";

console.log("href después:", ej5Enlace.getAttribute("href"));

// Ejercicio 6
// Dentro de #ej6, crea con createElement un título h4 con el texto "Frutas de temporada"
// y, debajo, una lista ul con un li por cada fruta del array frutas.
console.log("--- Ejercicio 6 ---");
const frutas = ["Naranja", "Mandarina", "Granada", "Caqui", "Kiwi"];

const ej6Contenedor = document.querySelector("#ej6");

const ej6Titulo = document.createElement("h4");
ej6Titulo.textContent = "Frutas de temporada";

const ej6Lista = document.createElement("ul");
for (const fruta of frutas) {
    const li = document.createElement("li");
    li.textContent = fruta;
    ej6Lista.append(li);
}

// append admite varios elementos a la vez. La lista se añade a la página ya completa:
// así el navegador solo tiene que redibujar una vez
ej6Contenedor.append(ej6Titulo, ej6Lista);
console.log(`Lista creada con ${ej6Lista.children.length} frutas`); // 5

// Ejercicio 7
// Dentro de #ej7-productos, crea una tarjeta (article con la clase "tarjeta") por cada producto
// del array productos, con su nombre en un h4 y su precio en un párrafo.
// Si un producto no tiene stock, añade a su tarjeta la clase "agotado" y un párrafo "Agotado".
console.log("--- Ejercicio 7 ---");
const productos = [
    { nombre: "Auriculares", precio: 35, stock: 10 },
    { nombre: "Webcam", precio: 60, stock: 0 },
    { nombre: "Micrófono", precio: 85, stock: 3 },
];

// Una función que crea una tarjeta hace el código más fácil de leer
function crearTarjeta(producto) {
    const tarjeta = document.createElement("article");
    tarjeta.classList.add("tarjeta");

    const nombre = document.createElement("h4");
    // textContent es seguro: si el nombre tuviera etiquetas HTML, se mostrarían como texto
    nombre.textContent = producto.nombre;

    const precio = document.createElement("p");
    precio.textContent = `${producto.precio} €`;

    tarjeta.append(nombre, precio);

    if (producto.stock === 0) {
        tarjeta.classList.add("agotado");
        const aviso = document.createElement("p");
        aviso.textContent = "Agotado";
        tarjeta.append(aviso);
    }

    return tarjeta;
}

const ej7Contenedor = document.querySelector("#ej7-productos");
ej7Contenedor.append(...productos.map(crearTarjeta)); // spread: cada tarjeta como un argumento
console.log(`${ej7Contenedor.children.length} tarjetas creadas`); // 3

// Ejercicio 8
// Elimina de la lista #ej8-lista todos los productos que tienen la clase "agotado".
// Escribe en #ej8-resultado cuántos se han eliminado y cuántos quedan.
console.log("--- Ejercicio 8 ---");

const ej8Agotados = document.querySelectorAll("#ej8-lista .agotado");
ej8Agotados.forEach((elemento) => elemento.remove());

const ej8Quedan = document.querySelectorAll("#ej8-lista li").length;
const ej8Texto = `Se han eliminado ${ej8Agotados.length} productos. Quedan ${ej8Quedan}.`;
document.querySelector("#ej8-resultado").textContent = ej8Texto;
console.log(ej8Texto); // Se han eliminado 3 productos. Quedan 2.

// Ejercicio 9
// Rellena el cuerpo (tbody) de la tabla #ej9-tabla con una fila por cada alumno del array alumnos.
// Añade la clase "suspenso" a las filas de los alumnos con nota menor que 5.
console.log("--- Ejercicio 9 ---");
const alumnos = [
    { nombre: "Laura", nota: 8 },
    { nombre: "Carlos", nota: 4 },
    { nombre: "Elena", nota: 9.5 },
    { nombre: "Jorge", nota: 3 },
];

const ej9Cuerpo = document.querySelector("#ej9-tabla tbody");

for (const alumno of alumnos) {
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = alumno.nombre;

    const celdaNota = document.createElement("td");
    celdaNota.textContent = alumno.nota;

    fila.append(celdaNombre, celdaNota);

    if (alumno.nota < 5) {
        fila.classList.add("suspenso");
    }

    ej9Cuerpo.append(fila);
}

console.log(`Filas: ${ej9Cuerpo.rows.length}, suspensos: ${ej9Cuerpo.querySelectorAll(".suspenso").length}`); // Filas: 4, suspensos: 2

// Ejercicio 10
// Partiendo del elemento #ej10-actual y sin usar más selectores:
//    - Añade la clase "vecino" al elemento anterior y al siguiente.
//    - Averigua cuántos elementos tiene la lista en la que está (su elemento padre).
//    - Añade la clase "resuelto" al contenedor .ejercicio que lo rodea.
// Escribe en #ej10-resultado un texto como "Martes está en una lista de 4 días".
console.log("--- Ejercicio 10 ---");

const ej10Actual = document.querySelector("#ej10-actual");

ej10Actual.previousElementSibling.classList.add("vecino");
ej10Actual.nextElementSibling.classList.add("vecino");

const ej10Lista = ej10Actual.parentElement;              // el <ul>
const ej10Total = ej10Lista.children.length;             // sus hijos <li>

// closest sube por los antepasados hasta encontrar el primero que coincide con el selector
ej10Actual.closest(".ejercicio").classList.add("resuelto");

const ej10Texto = `${ej10Actual.textContent} está en una lista de ${ej10Total} días`;
document.querySelector("#ej10-resultado").textContent = ej10Texto;
console.log(ej10Texto); // Martes está en una lista de 4 días
