document.addEventListener("DOMContentLoaded", function () {
    // Obtener la URL actual
    let path = window.location.pathname;
    let unidadActual = path.includes("unidad2") ? 2 :
                       path.includes("unidad3") ? 3 :
                       path.includes("unidad4") ? 4 :
                       path.includes("unidad5") ? 5 : 1; // Por defecto, Unidad 1

    // Definir los menús de cada unidad
    let menus = {
        1: [
            { nombre: "Ejercicio 1", url: "ejercicio1.html" },
            { nombre: "Ejercicio 2", url: "ejercicio2.html" },
            { nombre: "Ejercicio 3", url: "ejercicio3.html" },
            { nombre: "Ejercicio 4", url: "ejercicio4.html" },
            { nombre: "Ejercicio 5", url: "ejercicio5.html" },
            { nombre: "Ejercicio 6", url: "ejercicio6.html" },
            { nombre: "Ejercicio 7", url: "ejercicio7.html" },
            { nombre: "Ejercicio 8", url: "ejercicio8.html" },
            { nombre: "Ejercicio 9", url: "ejercicio9.html" },
            { nombre: "Ejercicio 10", url: "ejercicio10.html" },
            { nombre: "Ejercicio 11", url: "ejercicio11.html"}
        ],
        2: [
            { nombre: "Ejercicio 1", url: "ejercicio1.html" },
            { nombre: "Ejercicio 2", url: "ejercicio2.html" },
            { nombre: "Ejercicio 3", url: "ejercicio3.html" },
            { nombre: "Ejercicio 4", url: "ejercicio4.html" },
            { nombre: "Ejercicio 5", url: "ejercicio5.html" },
            { nombre: "Ejercicio 6", url: "ejercicio6.html" }
        ],
        3: [
            { nombre: "Ejercicio 1", url: "ejercicio1.html" },
            { nombre: "Ejercicio 2", url: "ejercicio2.html" },
            { nombre: "Ejercicio 3", url: "ejercicio3.html" },
            { nombre: "Ejercicio 4", url: "ejercicio4.html" },
            { nombre: "Ejercicio 5", url: "ejercicio5.html"}
        ],
        4: [
            { nombre: "Ejercicio 1", url: "ejercicio1.html" },
            { nombre: "Ejercicio 2", url: "ejercicio2.html" },
            { nombre: "Ejercicio 3", url: "ejercicio3.html" },
            { nombre: "Ejercicio 4", url: "ejercicio4.html" },
            { nombre: "Ejercicio 5", url: "ejercicio5.html" },
            { nombre: "Ejercicio 6", url: "ejercicio6.html"}
        ],
        5: [
            { nombre: "Ejercicio 1", url: "ejercicio1.html" }
        ]
    };

    // Construir el HTML del menú
    let menuHTML = `
        <ul class="menu">
            <li><a href="../../index.html">Inicio</a></li>
            <li class="submenu">
                <a href="#">Unidad ${unidadActual}</a>
                <ul class="sub-menu">
                    ${menus[unidadActual].map(ej => `<li><a href="${ej.url}">${ej.nombre}</a></li>`).join("")}
                </ul>
            </li>
        </ul>
    `;

    // Insertar el menú en el <nav>
    document.querySelector("nav").innerHTML = menuHTML;
});
