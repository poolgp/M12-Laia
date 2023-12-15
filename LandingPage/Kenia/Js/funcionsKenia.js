
function CambiarColor(obj, color) {

  //window.alert(obj + " " + color);

  var frente = document.getElementById("mascara").getSVGDocument().getElementById(obj);
  frente.style.setProperty("fill", color, "");

  //    var ulls1 = document.getElementById("mascara").getSVGDocument().getElementById("ulls1");
  //  ulls1.style.setProperty("fill","red", "");

  //    var ulls2 = document.getElementById("mascara").getSVGDocument().getElementById("ulls2");
  //    ulls2.style.setProperty("fill","red", "");
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
