/*
Ejercicios para practicar con Condicionales:

1. Crea una función que reciba un número y devuelva "Positivo", "Negativo" o "Cero"
   utilizando if, else if y else.

2. Crea una función que reciba una nota numérica (de 0 a 10) y devuelva la calificación:
    - Menos de 5: "Suspenso"
    - De 5 a menos de 7: "Aprobado"
    - De 7 a menos de 9: "Notable"
    - De 9 a 10: "Sobresaliente"
   Si la nota no es un número entre 0 y 10, devuelve "Nota no válida".

3. Crea una función que reciba un número del 1 al 7 y devuelva el nombre del día de la semana
   utilizando switch. Si el número no es válido, devuelve "Día no válido".

4. Crea una función que reciba el nombre de un día y devuelva "Laborable" o "Fin de semana"
   utilizando switch y agrupando varios case que comparten el mismo resultado.

5. Crea una función que calcule el precio de una entrada de cine a partir de la edad y de si es miércoles:
    - Los miércoles la entrada cuesta 4 € para todos.
    - Menores de 12 años: 5 €.
    - Mayores de 65 años (incluido): 6 €.
    - Resto: 9 €.
   Si la edad no es válida (no es un número o es negativa), devuelve un mensaje de error.

6. Crea una calculadora que reciba dos números y un operador ("+", "-", "*", "/") y devuelva
   el resultado utilizando switch. Controla la división entre 0 y los operadores no válidos.

7. Crea una función que reciba cualquier valor y diga si es truthy o falsy.
   Pruébala con: 0, "", "0", null, undefined, NaN, [], {} y "hola".

8. Una tienda online ofrece envío gratuito si el pedido es de 50 € o más, o si el cliente es premium.
   En caso contrario, el envío cuesta 4,99 €. Crea una función que reciba el importe y si el
   cliente es premium, y devuelva el coste del envío. Usa el operador ternario.

9. Crea una función que reciba un objeto de configuración de usuario y devuelva la configuración
   final aplicando valores por defecto: volumen 50, tema "claro" y ciudad "Desconocida".
    - El volumen puede ser 0 (silencio): compara el resultado de usar || y ??.
    - La ciudad está dentro de usuario.direccion.ciudad, pero la dirección puede no existir.

10. Crea una función que reciba un número de mes (1-12) y devuelva la estación del año
    (en el hemisferio norte, simplificado por meses completos):
    - Diciembre, enero y febrero: "Invierno"
    - Marzo, abril y mayo: "Primavera"
    - Junio, julio y agosto: "Verano"
    - Septiembre, octubre y noviembre: "Otoño"
    Resuélvelo de dos formas: con switch y con un objeto como tabla de búsqueda.
*/

// Ejercicio 1
console.log("--- Ejercicio 1 ---");
function signoNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

console.log(signoNumero(8));  // Positivo
console.log(signoNumero(-2)); // Negativo
console.log(signoNumero(0));  // Cero

// Ejercicio 2
// Las condiciones se evalúan en orden y se ejecuta solo la primera que se cumple.
// Por eso en cada else if no hace falta comprobar el límite inferior: si hemos llegado
// hasta ahí, ya sabemos que la nota no cumplía las condiciones anteriores.
console.log("--- Ejercicio 2 ---");
function calificacion(nota) {
    // Cláusula de guarda: descartamos primero los casos no válidos
    if (typeof nota !== "number" || Number.isNaN(nota) || nota < 0 || nota > 10) {
        return "Nota no válida";
    }

    if (nota < 5) {
        return "Suspenso";
    } else if (nota < 7) {
        return "Aprobado";
    } else if (nota < 9) {
        return "Notable";
    } else {
        return "Sobresaliente";
    }
}

console.log(calificacion(3.5)); // Suspenso
console.log(calificacion(5));   // Aprobado
console.log(calificacion(7.8)); // Notable
console.log(calificacion(10));  // Sobresaliente
console.log(calificacion(12));  // Nota no válida
console.log(calificacion("8")); // Nota no válida (es un string)

// Ejercicio 3
// Dentro de una función, return sale del switch y de la función, así que no hace falta break
console.log("--- Ejercicio 3 ---");
function nombreDia(numero) {
    switch (numero) {
        case 1:
            return "Lunes";
        case 2:
            return "Martes";
        case 3:
            return "Miércoles";
        case 4:
            return "Jueves";
        case 5:
            return "Viernes";
        case 6:
            return "Sábado";
        case 7:
            return "Domingo";
        default:
            return "Día no válido";
    }
}

console.log(nombreDia(1)); // Lunes
console.log(nombreDia(7)); // Domingo
console.log(nombreDia(9)); // Día no válido

// Ejercicio 4
// Los case sin código "caen" al siguiente: así varios valores comparten el mismo bloque.
// switch compara con ===, por eso pasamos el día a minúsculas antes de comparar.
console.log("--- Ejercicio 4 ---");
function tipoDia(dia) {
    let tipo;

    switch (dia.toLowerCase()) {
        case "lunes":
        case "martes":
        case "miércoles":
        case "jueves":
        case "viernes":
            tipo = "Laborable";
            break; // sin break seguiría ejecutando el bloque siguiente
        case "sábado":
        case "domingo":
            tipo = "Fin de semana";
            break;
        default:
            tipo = "Día no válido";
    }

    return tipo;
}

console.log(tipoDia("Martes"));  // Laborable
console.log(tipoDia("domingo")); // Fin de semana
console.log(tipoDia("festivo")); // Día no válido

// Ejercicio 5
// El orden importa: el miércoles se comprueba primero porque tiene prioridad sobre la edad
console.log("--- Ejercicio 5 ---");
function precioEntrada(edad, esMiercoles) {
    if (typeof edad !== "number" || Number.isNaN(edad) || edad < 0) {
        return "Edad no válida";
    }

    if (esMiercoles) {
        return 4;
    } else if (edad < 12) {
        return 5;
    } else if (edad >= 65) {
        return 6;
    } else {
        return 9;
    }
}

console.log(precioEntrada(30, true));  // 4
console.log(precioEntrada(8, false));  // 5
console.log(precioEntrada(70, false)); // 6
console.log(precioEntrada(30, false)); // 9
console.log(precioEntrada(-5, false)); // Edad no válida

// Ejercicio 6
console.log("--- Ejercicio 6 ---");
function calcular(a, b, operador) {
    switch (operador) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            if (b === 0) {
                return "No se puede dividir entre 0";
            }
            return a / b;
        default:
            return `Operador "${operador}" no válido`;
    }
}

console.log(calcular(6, 3, "+")); // 9
console.log(calcular(6, 3, "-")); // 3
console.log(calcular(6, 3, "*")); // 18
console.log(calcular(6, 3, "/")); // 2
console.log(calcular(6, 0, "/")); // No se puede dividir entre 0
console.log(calcular(6, 3, "%")); // Operador "%" no válido

// Ejercicio 7
// En una condición, JavaScript convierte cualquier valor a booleano.
// Solo hay unos pocos valores falsy: false, 0, "", null, undefined y NaN. Todo lo demás es truthy.
console.log("--- Ejercicio 7 ---");
function truthyOFalsy(valor) {
    return valor ? "truthy" : "falsy";
}

const valores = [0, "", "0", null, undefined, NaN, [], {}, "hola"];
valores.forEach((valor) => {
    // JSON.stringify muestra los strings entre comillas (para distinguir "0" de 0) y los arrays y objetos
    // como [] y {}. Para el resto (null, undefined, NaN) usamos String()
    const esObjetoOTexto = typeof valor === "string" || (typeof valor === "object" && valor !== null);
    const texto = esObjetoOTexto ? JSON.stringify(valor) : String(valor);
    console.log(`${texto} es ${truthyOFalsy(valor)}`);
});
// "0" es truthy porque es un string no vacío; [] y {} son truthy aunque estén vacíos

// Ejercicio 8
console.log("--- Ejercicio 8 ---");
function costeEnvio(importe, esPremium) {
    return importe >= 50 || esPremium ? 0 : 4.99;
}

console.log(costeEnvio(60, false)); // 0
console.log(costeEnvio(20, true));  // 0
console.log(costeEnvio(20, false)); // 4.99

// Ejercicio 9
// || usa el valor por defecto si el valor es falsy (también con 0 o "").
// ?? solo lo usa si el valor es null o undefined.
// ?. (encadenamiento opcional) devuelve undefined en lugar de dar error si algo intermedio no existe.
console.log("--- Ejercicio 9 ---");
function configuracionFinal(usuario) {
    return {
        volumenConOr: usuario.volumen || 50,
        volumen: usuario.volumen ?? 50,
        tema: usuario.tema ?? "claro",
        ciudad: usuario.direccion?.ciudad ?? "Desconocida",
    };
}

console.log(configuracionFinal({ volumen: 0, tema: "oscuro", direccion: { ciudad: "Sevilla" } }));
// { volumenConOr: 50, volumen: 0, tema: 'oscuro', ciudad: 'Sevilla' } → || pierde el 0 que eligió el usuario
console.log(configuracionFinal({}));
// { volumenConOr: 50, volumen: 50, tema: 'claro', ciudad: 'Desconocida' }
// Sin ?. , usuario.direccion.ciudad daría TypeError porque direccion es undefined

// Ejercicio 10
console.log("--- Ejercicio 10 ---");

// Forma 1: switch agrupando case
function estacionSwitch(mes) {
    switch (mes) {
        case 12:
        case 1:
        case 2:
            return "Invierno";
        case 3:
        case 4:
        case 5:
            return "Primavera";
        case 6:
        case 7:
        case 8:
            return "Verano";
        case 9:
        case 10:
        case 11:
            return "Otoño";
        default:
            return "Mes no válido";
    }
}

// Forma 2: objeto como tabla de búsqueda. Cuando cada caso solo devuelve un valor,
// un objeto es más corto y fácil de mantener que un switch o una cadena de if.
const ESTACIONES = {
    1: "Invierno", 2: "Invierno", 3: "Primavera", 4: "Primavera",
    5: "Primavera", 6: "Verano", 7: "Verano", 8: "Verano",
    9: "Otoño", 10: "Otoño", 11: "Otoño", 12: "Invierno",
};

function estacionObjeto(mes) {
    return ESTACIONES[mes] ?? "Mes no válido";
}

[1, 4, 8, 10, 13].forEach((mes) => {
    console.log(`Mes ${mes}: ${estacionSwitch(mes)} / ${estacionObjeto(mes)}`);
});
