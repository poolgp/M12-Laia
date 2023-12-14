// document.addEventListener("DOMContentLoaded", pintarMascara);

// let arrayColors = [];
// let colorSeleccionat = null;


// let mascara = getElementById("mascaras");

// mascara.addEventListener("click", function() {
//   // Cambiar el color al azul al hacer clic
//   miImagen.style.fill = "blue";
// });


// function pintarMascara() {
//   let colorFons1 = document.getElementById("celda1");
//   colorFons1.style.backgroundColor = "orange";
//   arrayColors.push("orange");

//   let colorFons2 = document.getElementById("celda2");
//   colorFons2.style.backgroundColor = "blue";
//   arrayColors.push("blue");

//   let colorFons3 = document.getElementById("celda3");
//   colorFons3.style.backgroundColor = "green";
//   arrayColors.push("green");

//   let colorFons4 = document.getElementById("celda4");
//   colorFons4.style.backgroundColor = "red";
//   arrayColors.push("red");

//   const myTimeout = setTimeout(amagarMascara, 5000);
// }

// function amagarMascara() {
//   let colorFons1 = document.getElementById("celda1");
//   colorFons1.style.backgroundColor = "white";

//   let colorFons2 = document.getElementById("celda2");
//   colorFons2.style.backgroundColor = "white";

//   let colorFons3 = document.getElementById("celda3");
//   colorFons3.style.backgroundColor = "white";

//   let colorFons4 = document.getElementById("celda4");
//   colorFons4.style.backgroundColor = "white";
// }

// function colorPinzell(div) {
//   // Obtener el color del div clickeado
//   colorSeleccionat = window.getComputedStyle(div).getPropertyValue("background-color");
//   console.log("Color seleccionado:", colorSeleccionat);
// }

// function pintarCuadrado(event) {
//   if (colorSeleccionat) {
//     // Pintar el cuadrado con el color seleccionado
//     event.target.style.backgroundColor = colorSeleccionat;
//   } else {
//     console.log("Selecciona un color primero");
//   }
// }


// function compararMascaras() {
//   let colorMascaraPredeterminada1 = window.getComputedStyle(document.getElementById("celda1")).getPropertyValue("background-color");
//   let colorMascaraPredeterminada2 = window.getComputedStyle(document.getElementById("celda2")).getPropertyValue("background-color");
//   let colorMascaraPredeterminada3 = window.getComputedStyle(document.getElementById("celda3")).getPropertyValue("background-color");
//   let colorMascaraPredeterminada4 = window.getComputedStyle(document.getElementById("celda4")).getPropertyValue("background-color");

//   let arrayColoresMascaraPredeterminada = [colorMascaraPredeterminada1, colorMascaraPredeterminada2, colorMascaraPredeterminada3, colorMascaraPredeterminada4];

//   let arrayColoresMascaraUsuario = [];
//   for (let i = 1; i <= 4; i++) {
//     let color = window.getComputedStyle(document.getElementById("celda" + i)).getPropertyValue("background-color");
//     arrayColoresMascaraUsuario.push(color);
//   }

//   let sonIguales = true;
//   for (let i = 0; i < arrayColoresMascaraPredeterminada.length; i++) {
//     if (arrayColoresMascaraPredeterminada[i] !== arrayColoresMascaraUsuario[i]) {
//       sonIguales = false;
//       break;
//     }
//   }

//   let resultadoElemento = document.getElementById("resultadoComparacion");
//   if (sonIguales) {
//     resultadoElemento.textContent = "¡Máscaras iguales!";
//   } else {
//     resultadoElemento.textContent = "Las máscaras no son iguales.";
//   }
// } 





// // Variables globales para el temporizador y el tiempo restante
// let temporizador;
// let tiempoRestante;

// // Función para cambiar la imagen después de 30 segundos
// function cambiarImagen() {
//   document.getElementById('miImagen').src = 'img/mascara.png';
//   mostrarBotones(); // Muestra los botones después de cambiar la imagen
//   reiniciarTemporizador();
// }

// // Función para mostrar los botones
// function mostrarBotones() {
//   document.getElementById('botonesContainer').style.display = 'block';
// }

// // Función para iniciar el temporizador
// function iniciarCambio() {
//   reiniciarTemporizador(); // Reinicia el temporizador actual, si existe
//   tiempoRestante = 30; // Tiempo en segundos
//   const tiempoRestanteElemento = document.getElementById('tiempoRestante');

//   // Muestra el tiempo restante y oculta el temporizador anterior
//   tiempoRestanteElemento.textContent = `Tiempo restante: ${tiempoRestante} segundos`;

//   // Inicia el temporizador
//   temporizador = setInterval(function () {
//     tiempoRestante--;
//     tiempoRestanteElemento.textContent = `Tiempo restante: ${tiempoRestante} segundos`;

//     if (tiempoRestante === 0) {
//       clearInterval(temporizador);
//       cambiarImagen(); // Cambia la imagen cuando el temporizador llega a 0
//     }
//   }, 1000); // Actualiza cada segundo
// }

// // Función para reiniciar el temporizador
// function reiniciarTemporizador() {
//   clearInterval(temporizador); // Limpia el temporizador actual
//   document.getElementById('tiempoRestante').textContent = ''; // Limpia el texto del temporizador
// }

// // Función para elegir la respuesta
// function elegirRespuesta(respuesta) {
//   alert(`Elegiste: ${respuesta}`);
//   // Aquí puedes realizar acciones adicionales basadas en la respuesta elegida
// }




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
