// ==============================
// Unidad 5 - Ejercicio 1: Movimiento de Avión
// ==============================

let avion = document.getElementById("avion");
let velocidad = 250; // Velocidad inicial
let intervalo;
let posicionInicial = 0;
let limitePantalla = window.innerWidth - avion.clientWidth; // Ajuste del límite de pantalla

// Actualizar el límite si la ventana cambia de tamaño
window.addEventListener("resize", () => {
    limitePantalla = window.innerWidth - avion.clientWidth;
});

// Función para arrancar el avión
function arrancar() {
    parar(); // Evita acumulación de intervalos
    intervalo = setInterval(() => {
        if (posicionInicial < limitePantalla) {
            posicionInicial += 10;
            avion.style.left = `${posicionInicial}px`;
        } else {
            parar(); // Se detiene si llega al final
        }
    }, velocidad);
}

// Función para detener el avión
function parar() {
    clearInterval(intervalo);
}

// Función para cambiar la velocidad del avión
function cambiarVelocidad() {
    velocidad = parseInt(document.getElementById("velocidad").value);
    if (intervalo) {
        parar();
        arrancar(); // Reiniciar con la nueva velocidad
    }
}

// Función para reiniciar la posición del avión
function reiniciar() {
    parar();
    posicionInicial = 0;
    avion.style.left = "0px";
}
