// ====================
// Unidad 1 - Ejercicio 1
// ====================
function ejercicio1() {
    let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    alert(dias.join("\n"));
}

// ====================
// Unidad 1 - Ejercicio 2
// ====================

// a) Determinar cuál de los dos elementos de texto es mayor
function compararTextos() {
    var array = [true, 5, false, "hola", "adios", 2];
    let mayorTexto = array[3].length > array[4].length ? array[3] : array[4];
    alert("El texto mayor es: " + mayorTexto);
}

// b) Operaciones con valores booleanos
function operacionesBooleanas() {
    var array = [true, 5, false, "hola", "adios", 2];
    let resultadoTrue = array[0] || array[2];
    let resultadoFalse = array[0] && array[2];
    alert("Resultado True: " + resultadoTrue + "\nResultado False: " + resultadoFalse);
}

// c) Operaciones matemáticas con los números
function operacionesMatematicas() {
    var array = [true, 5, false, "hola", "adios", 2];
    let suma = array[1] + array[5];
    let resta = array[1] - array[5];
    let multiplicacion = array[1] * array[5];
    let division = array[1] / array[5];
    let modulo = array[1] % array[5];

    alert(`Suma: ${suma}, Resta: ${resta}, Multiplicación: ${multiplicacion}, División: ${division}, Módulo: ${modulo}`);
}

// ====================
// Unidad 1 - Ejercicio 3
// ====================
function ejercicio3() {
    let num1 = prompt("Introduce el primer número:");
    let num2 = prompt("Introduce el segundo número:");
    let num3 = prompt("Introduce el tercer número:");

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    let mayor = Math.max(num1, num2, num3);
    alert("El número mayor es: " + mayor);
}

// ====================
// Unidad 1 - Ejercicio 4
// ====================
function ejercicio4() {
    let numero = prompt("Introduce un número entero positivo:");

    if (numero > 0) {
        let tabla = "";
        for (let i = 1; i <= 10; i++) {
            tabla += numero + " x " + i + " = " + (numero * i) + "<br>";
        }
        document.getElementById("resultado").innerHTML = tabla;
    } else {
        alert("Por favor, ingresa un número entero positivo.");
    }
}

// ====================
// Unidad 1 - Ejercicio 5
// ====================
function unidad1_ejercicio5() {
    // Diccionario de colores válidos
    const colores = { "R": "red", "A": "blue", "Y": "yellow", "V": "green" };

    // Función para solicitar un color válido
    function obtenerColor(mensaje) {
        let color;
        do {
            color = prompt(mensaje).trim().toUpperCase();
        } while (!colores[color] && color !== ""); // Se repite hasta que sea válido o vacío
        return colores[color] || null;
    }

    // Pedir al usuario los colores con validación
    let colorFondo = obtenerColor("Elige el color de fondo (R=Rojo, A=Azul, Y=Amarillo, V=Verde):");
    let colorTexto = obtenerColor("Elige el color del texto (R=Rojo, A=Azul, Y=Amarillo, V=Verde):");

    // Asignar valores por defecto si están vacíos
    colorFondo = colorFondo || "lightgrey";
    colorTexto = colorTexto || "black";

    // Crear la tabla
    let tablaHTML = `
        <table style="width: 50%; margin: auto; border: 2px solid black; background-color: ${colorFondo}; color: ${colorTexto}; text-align: center; padding: 20px;">
            <tr>
                <td>Este es un ejemplo con los colores seleccionado</td>
            </tr>
        </table>
    `;

    // Insertar la tabla correctamente
    document.getElementById("resultado-ej5").innerHTML = tablaHTML;
}

// ====================
// UNIDAD 1 - EJERCICIO 6
// ====================
function unidad1_ejercicio6() {
    let numeros = [];

    // Pedir al usuario 10 números
    for (let i = 0; i < 10; i++) {
        let num = prompt(`Introduce el número ${i + 1}:`).trim();
        while (isNaN(num) || num === "") {
            num = prompt(`Entrada inválida. Introduce un número válido (${i + 1}/10):`).trim();
        }
        numeros.push(Number(num));
    }

    // Generar tabla con números ingresados
    let tablaOriginal = "<table class='tabla'><tr>";
    numeros.forEach(num => tablaOriginal += `<td>${num}</td>`);
    tablaOriginal += "</tr></table>";

    // Generar tabla con números en orden inverso
    let tablaInversa = "<table class='tabla'><tr>";
    [...numeros].reverse().forEach(num => tablaInversa += `<td>${num}</td>`);
    tablaInversa += "</tr></table>";

    // Mostrar resultados en el div correspondiente
    document.getElementById("resultado-ej6").innerHTML = `
        <h3>Números en orden de entrada:</h3>
        ${tablaOriginal}
        <h3>Números en orden inverso:</h3>
        ${tablaInversa}
    `;
}

// ====================
// UNIDAD 1 - EJERCICIO 7
// ====================
function unidad1_ejercicio7() {
    let oculto = Math.floor(Math.random() * 11); // Generar número aleatorio entre 0 y 10
    let intentos = 5;
    let adivinado = false;

    while (intentos > 0 && !adivinado) {
        let numero = prompt(`Adivina el número (0-10). Intentos restantes: ${intentos}`).trim();

        // Validar que el input es un número válido entre 0 y 10
        while (isNaN(numero) || numero === "" || numero < 0 || numero > 10) {
            numero = prompt("Entrada inválida. Introduce un número entre 0 y 10:").trim();
        }

        numero = Number(numero);

        if (numero === oculto) {
            adivinado = true;
            document.getElementById("resultado-ej7").innerHTML = `<p class="acierto">¡Felicidades! Has adivinado el número oculto: <strong>${oculto}</strong> 🎉</p>`;
        } else {
            intentos--;
            let mensaje = numero > oculto ? "El número es menor." : "El número es mayor.";
            alert(mensaje + ` Intentos restantes: ${intentos}`);
        }
    }

    if (!adivinado) {
        document.getElementById("resultado-ej7").innerHTML = `<p class="fallo">¡Has perdido! 😢 El número oculto era <strong>${oculto}</strong>.</p>`;
    }
}

// ====================
// UNIDAD 1 - EJERCICIO 8
// ====================
let imagenes = [
    "../../img/ejercicio8/img1.jpg",
    "../../img/ejercicio8/img2.webp",
    "../../img/ejercicio8/img3.jpeg"
];

let indiceImagen = 0;

function unidad1_ejercicio8(direccion) {
    indiceImagen += direccion;

    // Controlar los límites
    if (indiceImagen < 0) {
        indiceImagen = imagenes.length - 1; // Si va atrás en la primera imagen, salta a la última
    } else if (indiceImagen >= imagenes.length) {
        indiceImagen = 0; // Si pasa la última imagen, vuelve a la primera
    }

    // Actualizar la imagen mostrada
    document.getElementById("imagen-mostrada").src = imagenes[indiceImagen];
}

// ==============================
// Unidad 1 - Ejercicio 9
// ==============================

// Array de imágenes
let imagenesUnidad1Ej9 = [
    "../../img/ejercicio8/img1.jpg",
    "../../img/ejercicio8/img2.webp",
    "../../img/ejercicio8/img3.jpeg"
];

// Precargar imágenes en memoria
let imagenesPrecargadas = [];
imagenesUnidad1Ej9.forEach((src) => {
    let img = new Image();
    img.src = src;
    imagenesPrecargadas.push(img);
});

function unidad1_ejercicio9() {
    let imgElement = document.getElementById("imagen-mostrada");
    let nuevaImagen;

    do {
        nuevaImagen = Math.floor(Math.random() * imagenesUnidad1Ej9.length);
    } while (imgElement.src.includes(imagenesUnidad1Ej9[nuevaImagen])); // Evitar repetir imagen

    imgElement.src = imagenesUnidad1Ej9[nuevaImagen];
}

// ==============================
// Unidad 1 - Ejercicio 10
// ==============================

// Array de imágenes
let imagenesUnidad1Ej10 = [
    "../../img/ejercicio8/img1.jpg",
    "../../img/ejercicio8/img2.webp",
    "../../img/ejercicio8/img3.jpeg"
];

// Precargar imágenes en memoria
let imagenesPrecargadasUnidad1Ej10 = [];
imagenesUnidad1Ej10.forEach((src) => {
    let img = new Image();
    img.src = src;
    imagenesPrecargadasUnidad1Ej10.push(img);
});

// Función para seleccionar imagen desde la lista
function unidad1_ejercicio10_seleccionar() {
    let indice = document.getElementById("lista-imagenes").value;
    let imgElement = document.getElementById("imagen-mostrada");

    imgElement.src = imagenesUnidad1Ej10[indice];
}

// Función para mostrar una imagen aleatoria y actualizar el select
function unidad1_ejercicio10_aleatoria() {
    let imgElement = document.getElementById("imagen-mostrada");
    let lista = document.getElementById("lista-imagenes");
    let nuevaImagen;

    do {
        nuevaImagen = Math.floor(Math.random() * imagenesUnidad1Ej10.length);
    } while (imgElement.src.includes(imagenesUnidad1Ej10[nuevaImagen])); // Evitar repetir imagen

    imgElement.src = imagenesUnidad1Ej10[nuevaImagen];
    lista.selectedIndex = nuevaImagen; // Actualizar la lista con la imagen seleccionada
}

// ==============================
// Unidad 1 - Ejercicio 11
// ==============================

function unidad1_ejercicio11_validar() {
    let nombre = document.getElementById("nombre").value.trim();
    let edad = document.getElementById("edad").value.trim();
    let codigoPostal = document.getElementById("codigo_postal").value.trim();
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Solo letras y espacios
    let regexCodigoPostal = /^\d{5}$/; // Exactamente 5 números

    // Validar Nombre y Apellidos (obligatorio y sin números)
    if (!nombre || !regexNombre.test(nombre)) {
        alert("Error: El nombre y apellidos son obligatorios y no pueden contener números.");
        return false;
    }

    // Validar Edad (opcional pero debe estar entre 0 y 120 si se proporciona)
    if (edad !== "" && (isNaN(edad) || edad < 0 || edad > 120)) {
        alert("Error: La edad debe ser un número entre 0 y 120.");
        return false;
    }

    // Validar Código Postal (opcional pero debe ser de 5 dígitos)
    if (codigoPostal !== "" && !regexCodigoPostal.test(codigoPostal)) {
        alert("Error: El código postal debe contener exactamente 5 dígitos.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}

// ==============================
// Unidad 2 - Ejercicio 1
// ==============================
document.addEventListener("DOMContentLoaded", function () {

    // Obtener todos los enlaces de la página
    let enlaces = document.getElementsByTagName("a");

    // 1. Número total de enlaces
    document.getElementById("num-enlaces").textContent = enlaces.length;

    // 2. Dirección del penúltimo enlace
    if (enlaces.length > 1) {
        document.getElementById("penultimo-enlace").textContent = enlaces[enlaces.length - 2].href;
    } else {
        document.getElementById("penultimo-enlace").textContent = "No hay suficientes enlaces.";
    }

    // 3. Número de enlaces que enlazan a "http://prueba"
    let contadorPrueba = 0;
    for (let enlace of enlaces) {
        if (enlace.href === "http://prueba/") {
            contadorPrueba++;
        }
    }
    document.getElementById("num-prueba").textContent = contadorPrueba;

    // 4. Número de enlaces dentro del tercer párrafo
    let parrafos = document.getElementsByTagName("p");
    if (parrafos.length >= 3) {
        let enlacesTercerParrafo = parrafos[2].getElementsByTagName("a").length;
        document.getElementById("num-tercer-parrafo").textContent = enlacesTercerParrafo;
    } else {
        document.getElementById("num-tercer-parrafo").textContent = "No hay suficiente texto.";
    }
});


// ==============================
// Unidad 2 - Ejercicio 2
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    // Función para mostrar el contenido oculto
    function muestra() {
        let adicional = document.getElementById("adicional");
        let enlace = document.getElementById("enlace");

        // Si el texto adicional está oculto, lo mostramos
        if (adicional.classList.contains("oculto")) {
            adicional.classList.remove("oculto");
            adicional.classList.add("visible");

            // Ocultar el enlace después de hacer clic
            enlace.style.display = "none";
        }
    }

    // Asignar el evento al enlace
    let enlace = document.getElementById("enlace");
    if (enlace) {
        enlace.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que el enlace recargue la página
            muestra();
        });
    }
});

// ==============================
// Unidad 2 - Ejercicio 3
// ==============================

function anade() {
    // 1. Obtener la lista donde vamos a añadir el nuevo elemento
    var lista = document.getElementById("lista");
    
    // 2. Crear un nuevo nodo <li>
    var nuevoElemento = document.createElement("li");
    
    // 3. Crear el contenido del nuevo <li>
    var contenido = document.createTextNode("Nuevo elemento de la lista");
    
    // 4. Añadir el contenido al nuevo <li>
    nuevoElemento.appendChild(contenido);
    
    // 5. Añadir el nuevo <li> a la lista existente
    lista.appendChild(nuevoElemento);
}

// ==============================
// Unidad 2 - Ejercicio 4
// ==============================

function muestraOculta(num) {
    var contenido = document.getElementById("contenidos_" + num);
    var enlace = document.getElementById("enlace_" + num);

    // Verificamos el estado de la sección
    if (contenido.style.display === "none" || contenido.style.display === "") {
        // Si está oculta, la mostramos
        contenido.style.display = "block";
        enlace.innerHTML = "Ocultar contenidos";
    } else {
        // Si está visible, la ocultamos
        contenido.style.display = "none";
        enlace.innerHTML = "Mostrar contenidos";
    }
}

// ==============================
// Unidad 2 - Ejercicio 5
// ==============================

function muestraInformacion(evento) {
    let ratónX = evento.clientX;  // Posición del ratón respecto al navegador
    let ratónY = evento.clientY;  // Posición del ratón respecto al navegador

    // Si el ratón está en la página, calculamos la posición respecto a la página
    let paginaX = evento.pageX;
    let paginaY = evento.pageY;

    // Actualizamos los mensajes de información del ratón
    document.getElementById("infoRatón").innerHTML = `Posición del ratón:<br>
        - Respecto al navegador: X = ${ratónX}, Y = ${ratónY}<br>
        - Respecto a la página: X = ${paginaX}, Y = ${paginaY}`;
}

// Función para manejar el evento del teclado
function muestraTeclado(evento) {
    let tecla = evento.key; // Obtenemos la tecla presionada
    let codigoTecla = evento.keyCode; // Código de la tecla presionada

    // Mostramos la información sobre la tecla
    document.getElementById("infoTeclado").innerHTML = `Tecla presionada: ${tecla}<br>Codigo de la tecla: ${codigoTecla}`;
}

// Añadir los eventos al cargar la página
window.onload = function() {
    // Evento para el movimiento del ratón
    document.addEventListener("mousemove", muestraInformacion);

    // Evento para el teclado
    document.addEventListener("keydown", muestraTeclado);
};

// ==============================
// Unidad 3 - Ejercicio 2
// ==============================

document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.getElementById("formulario");
    let botonEnviar = document.getElementById("enviar");
    let mensajeError = document.getElementById("mensaje-error");

    function validarEntero(valor) {
        let numero = parseInt(valor, 10);
        return !isNaN(numero) && numero > 18;
    }

    function validacion() {
        let nombre = document.getElementById("nombre").value.trim();
        let edad = document.getElementById("edad").value.trim();
        let interes = document.getElementById("interes").value;

        let errores = [];

        if (nombre === "") {
            errores.push("El campo 'Nombre' es obligatorio.");
        }

        if (!validarEntero(edad)) {
            errores.push("La 'Edad' debe ser un número mayor a 18.");
        }

        if (interes === "Elegir") {
            errores.push("Debes seleccionar un 'Interés' válido.");
        }

        if (errores.length > 0) {
            mensajeError.innerHTML = errores.join("<br>");
            mensajeError.classList.remove("oculto");
        } else {
            mensajeError.classList.add("oculto");
            alert("Formulario enviado correctamente.");
            formulario.submit();
        }
    }

    botonEnviar.addEventListener("click", validacion);
});

// ==============================
// Unidad 3 - Ejercicio 3
// ==============================

document.addEventListener("DOMContentLoaded", function () {
    let botonValidar = document.getElementById("validar");
    let inputFecha = document.getElementById("fecha");
    let mensajeError = document.getElementById("mensaje-error");

    function validacion() {
        let fecha = inputFecha.value.trim();
        let regexFecha = /^(\d{2})-(\d{2})-(\d{4})$/;
        let anioActual = new Date().getFullYear();

        if (!regexFecha.test(fecha)) {
            mostrarError("Formato incorrecto. Usa dd-mm-aaaa.");
            return;
        }

        let [, dia, mes, anio] = fecha.match(regexFecha);
        dia = parseInt(dia, 10);
        mes = parseInt(mes, 10);
        anio = parseInt(anio, 10);

        if (anio < 1900 || anio > anioActual) {
            mostrarError(`El año debe estar entre 1900 y ${anioActual}.`);
            return;
        }

        if (mes < 1 || mes > 12) {
            mostrarError("El mes debe estar entre 1 y 12.");
            return;
        }

        let diasPorMes = {
            1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30,
            7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31
        };

        if (dia < 1 || dia > diasPorMes[mes]) {
            mostrarError(`Día inválido para el mes ${mes}.`);
            return;
        }

        mostrarError("Fecha válida.", true);
    }

    function mostrarError(mensaje, esValido = false) {
        mensajeError.innerHTML = mensaje;
        mensajeError.classList.remove("oculto");
        mensajeError.style.color = esValido ? "green" : "red";
    }

    botonValidar.addEventListener("click", validacion);
});

// ==============================
// Unidad 3 - Ejercicio 4: Cuenta regresiva
// ==============================

document.addEventListener("DOMContentLoaded", function () {
    let contadorElemento = document.getElementById("contador");
    if (contadorElemento) {
        iniciarCuentaRegresiva(contadorElemento);
    }
});

function iniciarCuentaRegresiva(elemento) {
    // Definir la fecha objetivo (Ajusta la fecha según sea necesario)
    let fechaObjetivo = new Date("2025-12-31T23:59:59").getTime();

    function actualizarContador() {
        let ahora = new Date().getTime();
        let tiempoRestante = fechaObjetivo - ahora;

        if (tiempoRestante <= 0) {
            elemento.innerHTML = "¡El tiempo ha finalizado!";
            clearInterval(intervalo);
            return;
        }

        let dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        let horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        let segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        elemento.innerHTML = `Quedan ${dias} Días, ${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`;
    }

    // Llamar inmediatamente para evitar el retraso inicial
    actualizarContador();
    let intervalo = setInterval(actualizarContador, 1000);
}

// ==============================
// Unidad 3 - Ejercicio 5: Tooltip Mejorado
// ==============================

let tooltip;

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.tooltip-instruccion');
    tooltip = document.createElement('div');
    tooltip.className = 'tooltip';

    document.body.appendChild(tooltip);

    elements.forEach(function (element) {
        element.addEventListener('mouseenter', function (e) {
            setTimeout(function () {
                tooltip.classList.add('tooltip-show');
                tooltip.textContent = "Este es un tooltip con retraso.";
                tooltip.style.left = e.pageX + 15 + 'px'; // Separación de 15px
                tooltip.style.top = e.pageY - tooltip.offsetHeight - 10 + 'px'; // Mostrar arriba
            }, 250); // Retraso de 0.25 segundos
        });

        element.addEventListener('mouseleave', function () {
            tooltip.classList.remove('tooltip-show');
        });
    });
});


// ==============================
// Unidad 4 - Ejercicio 1: Detalles factura
// ==============================

// Definimos el objeto factura
const factura = {
    // Información de la empresa
    empresa: {
        nombre: "Empresa XYZ",
        direccion: "Calle Ejemplo 123, Ciudad",
        telefono: "123-456-789",
        nif: "X12345678"
    },

    // Información del cliente
    cliente: {
        nombre: "Juan Pérez",
        direccion: "Avenida de la Libertad 456, Ciudad",
        telefono: "987-654-321",
        nif: "Y98765432"
    },

    // Lista de elementos (productos) en la factura
    elementos: [
        { descripcion: "Producto A", precio: 20, cantidad: 2 },
        { descripcion: "Producto B", precio: 15, cantidad: 3 },
        { descripcion: "Producto C", precio: 30, cantidad: 1 }
    ],

    // Información básica de la factura
    iva: 21, // IVA al 21%
    formaPago: "Transferencia bancaria",
    importeTotal: 0, // Este valor lo actualizaremos

    // Método para calcular el importe total
    calcularTotal: function () {
        let subtotal = 0;

        // Sumamos el precio de cada producto (precio * cantidad)
        this.elementos.forEach(function (producto) {
            subtotal += producto.precio * producto.cantidad;
        });

        // Calculamos el IVA
        let ivaTotal = (subtotal * this.iva) / 100;

        // El importe total es la suma del subtotal + IVA
        this.importeTotal = subtotal + ivaTotal;
    },

    // Método para mostrar el importe total
    mostrarTotal: function () {
        // Muestra el importe total en el HTML
        document.getElementById('importeTotal').textContent = `${this.importeTotal} €`;

        // Mostrar el total por cada producto
        document.getElementById('totalA').textContent = this.elementos[0].precio * this.elementos[0].cantidad + " €";
        document.getElementById('totalB').textContent = this.elementos[1].precio * this.elementos[1].cantidad + " €";
        document.getElementById('totalC').textContent = this.elementos[2].precio * this.elementos[2].cantidad + " €";
    }
};

// Calcular el total
factura.calcularTotal();

// Mostrar el total en la página
factura.mostrarTotal();

// ==============================
// Unidad 4 - Ejercicio 2: Añadir elementos 
// ==============================

// Extender el prototipo de Array para incluir el método "anadir"
Array.prototype.anadir = function(elemento, permitirDuplicado = true) {
    // Si permitirDuplicado es false, verificamos si el elemento ya está en el array
    if (!permitirDuplicado && this.includes(elemento)) {
        console.log('El elemento ya existe y no se permiten duplicados.');
    } else {
        // Si se permite duplicado o no existe el elemento, lo añadimos
        this.push(elemento);
        console.log('Elemento añadido:', elemento);
    }
    console.log('Array actual:', this);
};

// Ejemplo de uso
var array1 = [0, 1, 2];
console.log('Array inicial:', array1);

// Añadir un nuevo elemento
array1.anadir(3); // Permitir duplicados por defecto
array1.anadir(2, false); // No permitir duplicados
array1.anadir(2); // Permitir duplicados

