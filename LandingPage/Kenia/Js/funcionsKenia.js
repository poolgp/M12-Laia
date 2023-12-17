var colorEscollits = ['black', "black", "black"] ;

function CambiarColor(obj, color) {



    var frente = document.getElementById("mascara").getSVGDocument().getElementById(obj);
    frente.style.setProperty("fill", color, "");


    if (obj == "front") colorEscollits[0] = color;
    if (obj == "ulls1") colorEscollits[1] = color;
    if (obj == "ulls2") colorEscollits[2] = color;

}

function compararResultados() {

    if (colorEscollits[0] == "green" && colorEscollits[1] == "red" && colorEscollits[2] == "red"){

        document.getElementById('score').textContent = '100';

        document.getElementById('compararPopup').style.display = 'block';
    }
    else
    window.alert("malamemt");
}

// Función para cerrar el popup
function cerrarPopup(idPopup) {
    // Oculta el popup cambiando el estilo display
    document.getElementById(idPopup).style.display = 'none';
}

// Asociar la función al evento 'load' del objeto window para mostrar el tutoPopup
window.onload = function () {
    mostrarPopup('tutoPopup');
};

// Función para mostrar cualquier popup por su ID
function mostrarPopup(idPopup) {
    // Muestra el popup cambiando el estilo display
    document.getElementById(idPopup).style.display = 'block';
}

// Función para abrir el infoPopup
function openPopup() {
    console.log("Opening popup");
    mostrarPopup('infoPopup');
}

// Función para cerrar el infoPopup
function closePopup() {
    console.log("Closing popup");
    cerrarPopup('infoPopup');
}


