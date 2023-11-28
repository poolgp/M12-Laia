// Ajustes.js

var traducciones = {
    'es': {
        'titulo': 'Bienvenido',
        'parrafoLabel': 'Seleccione el idioma.'
    },
    'ca': {
        'titulo': 'Benvingut',
        'parrafoLabel': 'Selecciona el idioma.'
    },
    'en': {
        'titulo': 'Setings',
        'parrafoLabel': 'Select the idioma.'
    }
};

// Función para obtener el idioma guardado en localStorage o un valor predeterminado
function obtenerIdioma() {
    return localStorage.getItem("idioma") || "es";
}

// Función para cambiar el idioma de la aplicación
function cambiarIdioma(idioma) {
    // Cambiar el título de la página
    document.getElementById("titulo").innerText = traducciones[idioma]['titulo'];
    // Cambiar el texto del label por su id
    document.getElementById("parrafoLabel").innerText = traducciones[idioma]['parrafoLabel'];

    // Obtener todos los elementos que deben cambiar de idioma
    var elementosCambiados = document.querySelectorAll('[data-lang]');

    // Iterar sobre los elementos y cambiar su contenido según el idioma
    elementosCambiados.forEach(function (elemento) {
        var claveTraduccion = elemento.getAttribute('data-lang');
        elemento.innerText = traducciones[idioma][claveTraduccion];
    });
}

// Función para inicializar la aplicación
function inicializarApp() {
    // Obtener el idioma actual
    var idiomaActual = obtenerIdioma();

    // Cambiar el idioma al cargar la aplicación
    cambiarIdioma(idiomaActual);
}

// Función para guardar los ajustes y cambiar dinámicamente el idioma
function guardarAjustes() {
    var selectedLanguage = document.getElementById("language").value;

    // Guardar el idioma seleccionado en localStorage
    localStorage.setItem("idioma", selectedLanguage);

    // Cambiar dinámicamente el idioma
    cambiarIdioma(selectedLanguage);

    // Mostrar un mensaje indicando que los ajustes se han guardado
    alert("Ajustes guardados correctamente.");
}

// Llamada a la función de inicialización cuando se carga la página
window.onload = inicializarApp; 