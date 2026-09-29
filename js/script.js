const inicio = document.getElementById("inicio");
const menu = document.getElementById("menu");
const botonEntrar = document.getElementById("entrar");

const opciones = document.querySelectorAll(".opcion");
const secciones = document.querySelectorAll(".seccion");
const botonesVolver = document.querySelectorAll(".volver");


// =========================
// BOTÓN ENTRAR
// =========================

botonEntrar.addEventListener("click", () => {

    inicio.classList.add("oculto");

    setTimeout(() => {

        inicio.style.display = "none";
        menu.classList.add("visible");

    }, 600);

});


// =========================
// ABRIR UNA SECCIÓN
// =========================

opciones.forEach((opcion) => {

    opcion.addEventListener("click", () => {

        const nombreSeccion = opcion.dataset.seccion;

        menu.classList.remove("visible");

        const seccion = document.getElementById(nombreSeccion);

        seccion.classList.add("visible");

    });

});


// =========================
// BOTÓN VOLVER
// =========================

botonesVolver.forEach((boton) => {

    boton.addEventListener("click", () => {

        const seccionActual = boton.closest(".seccion");

        seccionActual.classList.remove("visible");

        menu.classList.add("visible");

    });

});
// =========================
// REPRODUCTOR DE MÚSICA
// =========================

const audioCancion = document.getElementById("audioCancion");
const botonPlay = document.getElementById("botonPlay");
const barraProgreso = document.getElementById("barraProgreso");
const tiempo = document.getElementById("tiempo");


// PLAY / PAUSA

botonPlay.addEventListener("click", () => {

    if (audioCancion.paused) {

        audioCancion.play();

        botonPlay.textContent = "❚❚";

    } else {

        audioCancion.pause();

        botonPlay.textContent = "▶";

    }

});


// ACTUALIZAR BARRA

audioCancion.addEventListener("timeupdate", () => {

    const progreso =
        (audioCancion.currentTime / audioCancion.duration) * 100;

    barraProgreso.style.width = `${progreso}%`;

    const minutos =
        Math.floor(audioCancion.currentTime / 60);

    const segundos =
        Math.floor(audioCancion.currentTime % 60)
        .toString()
        .padStart(2, "0");

    tiempo.textContent =
        `${minutos}:${segundos}`;

});


// CUANDO TERMINA LA CANCIÓN

audioCancion.addEventListener("ended", () => {

    botonPlay.textContent = "▶";

    barraProgreso.style.width = "0%";

    tiempo.textContent = "0:00";

});