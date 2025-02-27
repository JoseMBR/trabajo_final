// ==============================
// Unidad 3 - Ejercicio 1
// ==============================

document.addEventListener("DOMContentLoaded", function () {
    let textarea = document.getElementById("texto");
    let contador = document.getElementById("contador");
    let maximoCaracteres = 100;

    function limita(event) {
        // Teclas permitidas: Backspace (8), Supr (46), Izquierda (37), Derecha (39)
        let teclasEspeciales = [8, 46, 37, 39];

        // Permitir teclas especiales o cortar texto si supera el límite
        if (!teclasEspeciales.includes(event.keyCode) && textarea.value.length >= maximoCaracteres) {
            event.preventDefault();
        }
    }

    function actualizaInfo() {
        let caracteresRestantes = maximoCaracteres - textarea.value.length;
        contador.textContent = caracteresRestantes >= 0 ? caracteresRestantes : 0;
    }

    textarea.addEventListener("keydown", limita);
    textarea.addEventListener("keyup", actualizaInfo);

    // Iniciar contador al cargar la página
    actualizaInfo();
});