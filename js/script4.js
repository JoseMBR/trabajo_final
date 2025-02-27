// ==============================
// Unidad 4 - Ejercicio 3: Recortar una cadena de texto
// ==============================

// Extender el prototipo de la clase String para incluir el método "recortar"
String.prototype.recortar = function(longitud, textoIndicativo = '') {
    // Verificar si la longitud es mayor que el tamaño de la cadena
    if (this.length > longitud) {
        return this.substring(0, longitud) + textoIndicativo; // Recortar la cadena y agregar el textoIndicativo
    } else {
        return this; // Si la longitud es menor o igual, no se modifica
    }
};

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de uso
    var cadena = "hola mundo, esta es una cadena de texto larga para recortar";
    var cadenaRecortada = cadena.recortar(20, '...');  // Recorta la cadena a 20 caracteres y agrega "..."

    // Mostrar en la página
    document.getElementById('original-text').textContent = cadena;  // Muestra la cadena original
    document.getElementById('recortado-text').textContent = cadenaRecortada;  // Muestra la cadena recortada
    document.getElementById('explicacion').textContent = `La cadena original se recorta a 20 caracteres, y el texto excedente se sustituye por "..."`;  // Explicación del recorte
});

// ==============================
// Unidad 4 - Ejercicio 4: Filtrar elementos en un array
// ==============================

// Extender la clase Array para añadir el método sin()
Array.prototype.sin = function(valor) {
    return this.filter(elemento => elemento !== valor);
};

// Función para mostrar los resultados en la página
document.addEventListener("DOMContentLoaded", () => {
    const array1 = [1, 2, 3, 4, 5];
    const elementoAEliminar = 4;
    const arrayFiltrado = array1.sin(elementoAEliminar);

    // Mostrar en el HTML
    document.getElementById("arrayOriginal").textContent = `[${array1.join(", ")}]`;
    document.getElementById("elementoEliminar").textContent = elementoAEliminar;
    document.getElementById("arrayFiltrado").textContent = `[${arrayFiltrado.join(", ")}]`;
});

// ==============================
// Unidad 4 - Ejercicio 5: Comprobar si un objeto tiene un método
// ==============================

// Sobrescribimos Object para incluir el método implementa()
Object.prototype.implementa = function(metodo) {
    return typeof this[metodo] === "function";
};

// Función para mostrar los resultados en la página
document.addEventListener("DOMContentLoaded", () => {
    // Objeto de prueba
    const objetoEjemplo = {
        nombre: "Ejemplo",
        saludar: function() {
            return "¡Hola!";
        }
    };

    const metodoABuscar = "saludar";
    const resultado = objetoEjemplo.implementa(metodoABuscar);

    // Mostrar en el HTML
    document.getElementById("objetoPrueba").textContent = JSON.stringify(objetoEjemplo);
    document.getElementById("metodoVerificar").textContent = metodoABuscar;
    document.getElementById("resultado").textContent = resultado ? "Sí, el método existe" : "No, el método no existe";
});
