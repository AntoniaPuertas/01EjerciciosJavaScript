/*
Tema claro / oscuro

Este script se carga en el <head> de todas las páginas, antes de que se dibuje el contenido,
para que la página aparezca directamente con el tema correcto (sin un parpadeo del otro tema).

Cómo decide el tema:
  1. Si el usuario ya eligió uno con el botón, se usa ese (se guarda en localStorage).
  2. Si no, se usa el que tenga configurado el sistema operativo (prefers-color-scheme).

El tema se aplica con el atributo data-tema en la etiqueta <html>: <html data-tema="claro">.
En style.css, la regla :root[data-tema="claro"] cambia los valores de las variables de color.
*/

(function () {
    const CLAVE = "tema";
    const raiz = document.documentElement;
    const temaSistema = window.matchMedia("(prefers-color-scheme: dark)");
    let boton = null;

    // localStorage puede no estar disponible (por ejemplo, con algunas opciones de privacidad),
    // por eso se usa dentro de try...catch: si falla, la página sigue funcionando.
    function leerTemaGuardado() {
        try {
            return localStorage.getItem(CLAVE);
        } catch {
            return null;
        }
    }

    function guardarTema(tema) {
        try {
            localStorage.setItem(CLAVE, tema);
        } catch {
            // Sin almacenamiento, el tema elegido solo dura hasta cambiar de página
        }
    }

    function temaDelSistema() {
        return temaSistema.matches ? "oscuro" : "claro";
    }

    function aplicarTema(tema) {
        raiz.dataset.tema = tema;
        actualizarBoton();
    }

    function actualizarBoton() {
        if (!boton) {
            return;
        }
        const esOscuro = raiz.dataset.tema === "oscuro";
        const siguiente = esOscuro ? "claro" : "oscuro";
        // El icono muestra el tema al que se va a cambiar: sol en modo oscuro, luna en modo claro
        boton.innerHTML = `<i class="fa-solid ${esOscuro ? "fa-sun" : "fa-moon"}" aria-hidden="true"></i>`;
        boton.setAttribute("aria-label", `Cambiar a tema ${siguiente}`);
        boton.title = `Cambiar a tema ${siguiente}`;
    }

    function crearBoton() {
        boton = document.createElement("button");
        boton.type = "button";
        boton.className = "boton-tema";
        boton.addEventListener("click", () => {
            const nuevoTema = raiz.dataset.tema === "oscuro" ? "claro" : "oscuro";
            guardarTema(nuevoTema);
            aplicarTema(nuevoTema);
        });
        document.body.appendChild(boton);
        actualizarBoton();
    }

    // 1. Aplicar el tema en cuanto se carga el script (todavía no existe el <body>)
    aplicarTema(leerTemaGuardado() ?? temaDelSistema());

    // 2. Si el usuario no ha elegido tema, seguir los cambios del sistema operativo en directo
    temaSistema.addEventListener("change", () => {
        if (!leerTemaGuardado()) {
            aplicarTema(temaDelSistema());
        }
    });

    // 3. Crear el botón cuando el HTML ya está disponible
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", crearBoton);
    } else {
        crearBoton();
    }
})();
