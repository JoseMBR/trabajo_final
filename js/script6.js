// ==============================
// Ejercicio 6 - Zona de la pantalla
// ==============================

// Función para obtener el tamaño de la ventana del navegador
function tamanoVentanaNavegador() {
    let ancho = window.innerWidth;
    let alto = window.innerHeight;
    return { ancho, alto };
}

// Función para mostrar en qué zona de la pantalla se hace clic
function zonaPantalla(event) {
    let ventana = tamanoVentanaNavegador();
    let x = event.clientX;
    let y = event.clientY;
    let zona = "";

    // Definimos las zonas
    if (x < ventana.ancho / 2) {
        if (y < ventana.alto / 2) {
            zona = "Izquierda Arriba";
        } else {
            zona = "Izquierda Abajo";
        }
    } else {
        if (y < ventana.alto / 2) {
            zona = "Derecha Arriba";
        } else {
            zona = "Derecha Abajo";
        }
    }

    // Mostrar en el elemento correspondiente
    document.getElementById("informacionZona").innerHTML = `Zona donde se hizo clic: ${zona}`;
}

// Registrar el evento de clic para detectar la zona
document.addEventListener("click", zonaPantalla);

// ==============================
// Unidad 4 - Ejercicio 6: AJAX y peticiones HTTP
// ==============================

document.addEventListener("DOMContentLoaded", () => {
    const inputURL = document.getElementById("recurso");
    const btnEnviar = document.getElementById("enviar");
    const divContenidos = document.getElementById("contenidos");
    const divEstados = document.getElementById("estados");
    const divCabeceras = document.getElementById("cabeceras");
    const divCodigo = document.getElementById("codigo");

    // a) Mostrar por defecto la URL actual en el cuadro de texto
    inputURL.value = window.location.href;

    // b) Evento para hacer la petición AJAX
    btnEnviar.addEventListener("click", () => {
        const url = inputURL.value;
        if (!url) {
            alert("Por favor, introduce una URL válida.");
            return;
        }

        // Crear objeto XMLHttpRequest
        const xhr = new XMLHttpRequest();

        // c) Actualizar estado de la petición
        xhr.onreadystatechange = () => {
            let estadoTexto;
            switch (xhr.readyState) {
                case 0: estadoTexto = "No inicializada"; break;
                case 1: estadoTexto = "Conexión establecida"; break;
                case 2: estadoTexto = "Petición recibida"; break;
                case 3: estadoTexto = "Procesando"; break;
                case 4: estadoTexto = "Completada"; break;
            }
            divEstados.textContent = estadoTexto;
        };

        // d) Cuando la respuesta está lista
        xhr.onload = () => {
            divContenidos.textContent = xhr.responseText; // Mostrar contenido de la respuesta

            // e) Mostrar código de estado
            divCodigo.textContent = `${xhr.status} - ${xhr.statusText}`;

            // d) Mostrar cabeceras HTTP
            divCabeceras.textContent = xhr.getAllResponseHeaders();
        };

        xhr.onerror = () => {
            divCodigo.textContent = "Error al realizar la petición.";
        };

        // Abrir la conexión y enviar la petición
        xhr.open("GET", url, true);
        xhr.send();
    });
});

