// Preguntas y respuestas
let preguntas = [
  {
    pregunta: "1- ¿Cuál es la capital de la India?",
    respuestas: ["Nueva Delhi", "Bombay", "Calcuta", "Chennai"],
    respuestaCorrecta: "Nueva Delhi",
  },
  {
    pregunta: "2- ¿En qué año se celebró la independencia de la India?",
    respuestas: ["1942", "1947", "1950", "1962"],
    respuestaCorrecta: "1947",
  },
  {
    pregunta: "3- ¿Qué río es considerado sagrado en la religión hindú?",
    respuestas: ["Río Ganges", "Río Yamuna", "Río Brahmaputra", "Río Indo"],
    respuestaCorrecta: "Río Ganges",
  },
  {
    pregunta: "4- ¿Cuál es la lengua más hablada en la India?",
    respuestas: ["Hindi", "Bengalí", "Elugu", "Maratí"],
    respuestaCorrecta: "Hindi",
  },
  {
    pregunta: "5- ¿Cuál es el nombre del festival hindú que celebra la victoria del bien sobre el mal?",
    respuestas: ["Diwali", "Holi", "Navaratri", "Durga Puja"],
    respuestaCorrecta: "Diwali",
  },
  {
    pregunta: "6- ¿Cuál es la ciudad más poblada de la India?",
    respuestas: ["Bombay", "Delhi", "Calcuta", "Chennai"],
    respuestaCorrecta: "Delhi",
  },
  {
    pregunta: "7- ¿Cuál es el nombre del sistema de castas en la sociedad india?",
    respuestas: ["Varna", "Jati", "Kshatriya", "Brahmana"],
    respuestaCorrecta: "Varna",
  },
  {
    pregunta: "8- ¿Cuál es el nombre del monumento construido por Shah Jahan en memoria de su esposa Mumtaz Mahal?",
    respuestas: ["Fuerte Rojo", "Templo Dorado", "Taj Mahal", "Mezquita Jama Masjid"],
    respuestaCorrecta: "Taj Mahal",
  },
  {
    pregunta: "9- ¿Qué figura histórica india lideró el movimiento de independencia a través de la no violencia?",
    respuestas: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
    respuestaCorrecta: "Mahatma Gandhi",
  },
  {
    pregunta: "10- ¿Cuál es la moneda oficial de la India?",
    respuestas: ["Rupia india", "Dólar indio", "Rupia hindú", "Rupia asiática"],
    respuestaCorrecta: "Rupia india",
  },
  {
    pregunta: "11- ¿Cuál es la religión mayoritaria en la India?",
    respuestas: ["Hinduismo", "Islam", "Sikhismo", "Cristianismo"],
    respuestaCorrecta: "Hinduismo",
  },
  {
    pregunta: "12- ¿Cuál es la montaña más alta de la India?",
    respuestas: ["K2", "Nanda Devi", "Dhaulagiri", "Kanchenjunga"],
    respuestaCorrecta: "Nanda Devi",
  },
  {
    pregunta: "13- ¿En qué año se celebró la primera Copa Mundial de Críquet en la India?",
    respuestas: ["1971", "1983", "1996", "2007"],
    respuestaCorrecta: "1983",
  },
  {
    pregunta: "14- ¿Cuál es la especia más asociada con la cocina india?",
    respuestas: ["Comino", "Canela", "Cúrcuma", "Pimienta negra"],
    respuestaCorrecta: "Cúrcuma",
  },
  {
    pregunta: "15- ¿Cuál es el nombre del río que fluye a través de la ciudad de Benarés (Varanasi)?",
    respuestas: ["Río Yamuna", "Río Brahmaputra", "Río Ganges", "Río Sabarmati"],
    respuestaCorrecta: "Río Ganges",
  },
  {
    pregunta: "16- ¿Cuál es el nombre del baile clásico indio que se originó en el estado de Tamil Nadu?",
    respuestas: ["Kathak", "Kuchipudi", "Bharatanatyam", "Odissi"],
    respuestaCorrecta: "Bharatanatyam",
  },
  {
    pregunta: "17- ¿Cuál es la ciudad conocida como la 'Ciudad Rosa' debido al color de sus edificaciones?",
    respuestas: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
    respuestaCorrecta: "Jaipur",
  },
  {
    pregunta: "18- ¿Cuál es el estado más grande de la India en términos de área geográfica?",
    respuestas: ["Rajastán", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    respuestaCorrecta: "Rajastán",
  },
  {
    pregunta: "19- ¿Cuál es el nombre del festival que celebra la llegada de la primavera en India con colores brillantes?",
    respuestas: ["Diwali", "Holi", "Navaratri", "Pongal"],
    respuestaCorrecta: "Holi",
  },
  {
    pregunta: "20- ¿Cuál es el nombre de la película india que ganó el Premio de la Academia a la Mejor Película Extranjera en 2009?",
    respuestas: ["Lagaan", "Slumdog Millionaire", "Taare Zameen Par", "Black"],
    respuestaCorrecta: "Slumdog Millionaire",
  },
];

// Llama a la función al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  iniciarJuego();
});

// Función para iniciar el juego
function iniciarJuego() {
  // Llama a mostrarPregunta con el índice 0 para mostrar la primera pregunta
  mostrarPregunta(0);
}

// Función para mostrar una pregunta
function mostrarPregunta(indice) {
  // Obtener la pregunta y las respuestas
  let pregunta = preguntas[indice].pregunta;
  let respuestas = preguntas[indice].respuestas;

  // Mostrar la pregunta
  document.querySelector(".containerPregunta").textContent = pregunta;

  // Mostrar las respuestas como botones
  let botonesRespuesta = document.querySelectorAll(".respuesta");

  for (let i = 0; i < botonesRespuesta.length; i++) {
    botonesRespuesta[i].textContent = respuestas[i];

    // Agregar un event listener de clic a cada botón de respuesta
    botonesRespuesta[i].addEventListener("click", clickBoto);
  }
}

let clickBoto = function () {
  verificarRespuesta(this.textContent);
};

// Función para verificar la respuesta seleccionada
function verificarRespuesta(respuestaSeleccionada) {
  // Obtener el índice de la pregunta actual
  let indiceActual = preguntas.findIndex(function (pregunta) {
    return (
      pregunta.pregunta ===
      document.querySelector(".containerPregunta").textContent
    );
  });

  // Obtener todos los botones de respuesta
  let botonesRespuesta = document.querySelectorAll(".respuesta");

  // Desactivar los clics en los botones después de seleccionar una respuesta
  botonesRespuesta.forEach(function (boton) {
    boton.removeEventListener("click", clickBoto);
  });

  // Verificar si la respuesta seleccionada es correcta
  if (respuestaSeleccionada === preguntas[indiceActual].respuestaCorrecta) {
    // Cambiar el color del botón seleccionado a verde
    botonesRespuesta.forEach(function (boton) {
      if (boton.textContent === respuestaSeleccionada) {
        boton.style.backgroundColor = "green";
      }
    });

    // Actualizar la puntuación
    let puntuacion = parseInt(document.getElementById("score").textContent);
    document.getElementById("score").textContent = puntuacion + 5;
  } else {
    // Cambiar el color del botón incorrecto a rojo
    botonesRespuesta.forEach(function (boton) {
      if (boton.textContent === respuestaSeleccionada) {
        boton.style.backgroundColor = "red";
      }
      if (boton.textContent === preguntas[indiceActual].respuestaCorrecta) {
        boton.style.backgroundColor = "green";
      }
    });
  }

  // Después de un retraso de 3 segundos, mostrar la siguiente pregunta o finalizar el juego
  setTimeout(function () {
    if (indiceActual < preguntas.length - 1) {
      // Restablecer los colores de los botones
      botonesRespuesta.forEach(function (boton) {
        boton.style.backgroundColor = "";
      });
      // Mostrar la siguiente pregunta
      mostrarPregunta(indiceActual + 1);
    } else {
      FinJuego();
    }
  }, 1000); // 3000 milisegundos (3 segundos)
}

function FinJuego() {
  // Crear un nuevo elemento de mensaje
  let mensajeFinal = document.createElement("div");
  mensajeFinal.className = "popup";
  mensajeFinal.id = "MensajeFinal";

  let divPopUp = document.createElement("div");
  divPopUp.className = "popup-content";

  let divPopUpText = document.createElement("div");
  divPopUpText.className = "popup-text";

  let h2GameOver = document.createElement("h2");
  h2GameOver.textContent = `¡Juego terminado!`;
  divPopUpText.appendChild(h2GameOver);

  // divPopUpText.innerHTML = `¡Juego terminado!`;
  let pGameOver = document.createElement("p");
  pGameOver.textContent = `Tu puntuación final es ${document.getElementById("score").textContent}`;
  divPopUpText.appendChild(pGameOver);

  divPopUp.appendChild(divPopUpText);

  let btnHome = document.createElement("button");
  btnHome.className = "btnHome";
  btnHome.textContent = "Volver al Home";
  btnHome.addEventListener("click", goHome);
  divPopUpText.appendChild(btnHome);

  mensajeFinal.appendChild(divPopUp);

  // Agregar el mensaje al cuerpo del documento
  document.body.appendChild(mensajeFinal);

  // Mostrar el mensaje
  mensajeFinal.style.display = "block";
}

function goHome() {
  window.location.href = "../LandingPage.html";
}

function openPopup() {
  console.log("Opening popup");
  document.getElementById("infoPopup").style.display = "block";
}

function closePopup() {
  console.log("Closing popup");
  document.getElementById("infoPopup").style.display = "none";
}