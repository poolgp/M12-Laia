// Preguntas y respuestas
let preguntas = [
    {
        pregunta: "1- F. ¿Cuál es la capital de la India?",
        respuestas: ["Nueva Delhi", "Bombay", "Calcuta", "Chennai"],
        respuestaCorrecta: "Nueva Delhi"
    },
    {
        pregunta: "2- M. ¿En qué año se celebró la independencia de la India?",
        respuestas: ["1942", "1947", "1950", "1962"],
        respuestaCorrecta: "B. 1947"
    },
    {
        pregunta: "3- ¿Qué río es considerado sagrado en la religión hindú?",
        respuestas: ["Río Ganges", "Río Yamuna", "Río Brahmaputra", "Río Indo"],
        respuestaCorrecta: "Río Ganges"
    },
    {
        pregunta: "4- ¿Cuál es la lengua más hablada en la India?",
        respuestas: ["Hindi", "Bengalí", "elugu", "Maratí"],
        respuestaCorrecta: "Hindi"
    },
    {
        pregunta: "5- ¿Cuál es el nombre del festival hindú que celebra la victoria del bien sobre el mal?",
        respuestas: ["Diwali", "Holi", "Navaratri", "Durga Puja"],
        respuestaCorrecta: "Diwali"
    },
    {
        pregunta: "6- ¿Cuál es la ciudad más poblada de la India?",
        respuestas: ["Bombay", "Delhi", "Calcuta", "Chennai"],
        respuestaCorrecta: "Delhi"
    },
    {
        pregunta: "7- ¿Cuál es el nombre del sistema de castas en la sociedad india?",
        respuestas: ["Varna", "Jati", "Kshatriya", "Brahmana"],
        respuestaCorrecta: "Varna"
    },
    {
        pregunta: "8- ¿Cuál es el nombre del monumento construido por Shah Jahan en memoria de su esposa Mumtaz Mahal?",
        respuestas: ["Fuerte Rojo", "Templo Dorado", "Taj Mahal", "Mezquita Jama Masjid"],
        respuestaCorrecta: "Taj Mahal"
    },
    {
        pregunta: "9- ¿Qué figura histórica india lideró el movimiento de independencia a través de la no violencia?",
        respuestas: ["Subhas Chandra Bose", "Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel"],
        respuestaCorrecta: "Mahatma Gandhi"
    },
    {
        pregunta: "10- ¿Cuál es la moneda oficial de la India?",
        respuestas: ["Rupia india", "Dólar indio", "Rupia hindú", "Rupia asiática"],
        respuestaCorrecta: "Rupia india"
    },
    {
        pregunta: "11- ¿Cuál es la religión mayoritaria en la India?",
        respuestas: ["Hinduismo", "Islam", "Sikhismo", "Cristianismo"],
        respuestaCorrecta: "Hinduismo"
    },
    {
        pregunta: "12- ¿Cuál es la montaña más alta de la India?",
        respuestas: ["K2", "Nanda Devi", "Dhaulagiri", "Kanchenjunga"],
        respuestaCorrecta: "Nanda Devi"
    },
    {
        pregunta: "13- ¿En qué año se celebró la primera Copa Mundial de Críquet en la India?",
        respuestas: ["1971", "1983", "1996", "2007"],
        respuestaCorrecta: "1983"
    },
    {
        pregunta: "14- ¿Cuál es la especia más asociada con la cocina india?",
        respuestas: ["Comino", "Canela", "Cúrcuma", "Pimienta negra"],
        respuestaCorrecta: "Cúrcuma"
    },
    {
        pregunta: "15- ¿Cuál es el nombre del río que fluye a través de la ciudad de Benarés (Varanasi)?",
        respuestas: ["Río Yamuna", "Río Brahmaputra", "Río Ganges", "Río Sabarmati"],
        respuestaCorrecta: "Río Ganges"
    },
    {
        pregunta: "16- ¿Cuál es el nombre del baile clásico indio que se originó en el estado de Tamil Nadu?",
        respuestas: ["Kathakali", "Kathakali", "Bharatanatyam", "Río Kuchipudi"],
        respuestaCorrecta: "Bharatanatyam"
    },
    {
        pregunta: "17- ¿Cuál es la ciudad conocida como la 'Ciudad Rosa' debido al color de sus edificaciones?",
        respuestas: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
        respuestaCorrecta: "Jaipur"
    },
    {
        pregunta: "18- ¿Cuál es el estado más grande de la India en términos de área geográfica?",
        respuestas: ["Rajastán", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
        respuestaCorrecta: "Rajastán"
    },
    {
        pregunta: "19- ¿Cuál es el nombre del festival que celebra la llegada de la primavera en India con colores brillantes?",
        respuestas: ["Diwali", "Holi", "Navaratri", "Pongal"],
        respuestaCorrecta: "Holi"
    },
    {
        pregunta: "20- ¿Cuál es el nombre de la película india que ganó el Premio de la Academia a la Mejor Película Extranjera en 2009?",
        respuestas: ["Lagaan", "Slumdog Millionaire", "Taare Zameen Par", "Black"],
        respuestaCorrecta: "Slumdog Millionaire"
    },
];

// Función para iniciar el juego
function start() {
    // Mostrar la primera pregunta
    mostrarPregunta(0);

    // Mostrar el contenedor y ocultar el botón de inicio
    document.getElementById('container').style.display = 'block';
    document.getElementById('start').style.display = 'none';
}


// Función para mostrar una pregunta
function mostrarPregunta(indice) {
    // Obtener la pregunta y las respuestas
    let pregunta = preguntas[indice].pregunta;
    let respuestas = preguntas[indice].respuestas;

    // Mostrar la pregunta
    document.querySelector('.containerPregunta').textContent = pregunta;

    // Mostrar las respuestas como botones
    let botonesRespuesta = document.querySelectorAll('.resposta');
    for (let i = 0; i < botonesRespuesta.length; i++) {
        botonesRespuesta[i].textContent = respuestas[i];

        // Agregar un event listener de clic a cada botón de respuesta
        botonesRespuesta[i].addEventListener('click', function () {
            verificarRespuesta(this.textContent);
        });
    }
}


// Función para verificar la respuesta seleccionada
function verificarRespuesta(respuestaSeleccionada) {
    // Obtener el índice de la pregunta actual
    let indiceActual = preguntas.findIndex(function (pregunta) {
        return pregunta.pregunta === document.querySelector('.containerPregunta').textContent;
    });

    // Verificar si la respuesta seleccionada es correcta
    if (respuestaSeleccionada === preguntas[indiceActual].respuestaCorrecta) {
        // Actualizar la puntuación
        let puntuacion = parseInt(document.getElementById('scr').textContent);
        document.getElementById('scr').textContent = puntuacion + 1;
    }

    // Mostrar la siguiente pregunta o finalizar el juego
    if (indiceActual < preguntas.length - 1) {
        mostrarPregunta(indiceActual + 1);
    } else {
        // Fin del juego
        alert('Juego terminado. Tu puntuación final es ' + document.getElementById('scr').textContent);
    }

    // Obtener todos los botones de respuesta
    let botonesRespuesta = document.querySelectorAll('.resposta');

    // Desactivar los clics en los botones después de seleccionar una respuesta
    botonesRespuesta.forEach(function (boton) {
        boton.removeEventListener('click', function () {
            verificarRespuesta(boton.textContent);
        });
    });

    // Verificar si la respuesta seleccionada es correcta
    if (respuestaSeleccionada === preguntas[indiceActual].respuestaCorrecta) {
        // Cambiar el color del botón seleccionado a verde
        botonesRespuesta.forEach(function (boton) {
            if (boton.textContent === respuestaSeleccionada) {
                boton.style.backgroundColor = 'green';
            }
        });

        // Actualizar la puntuación
        let puntuacion = parseInt(document.getElementById('scr').textContent);
        document.getElementById('scr').textContent = puntuacion + 1;
    } else {
        // Cambiar el color del botón incorrecto a rojo
        botonesRespuesta.forEach(function (boton) {
            if (boton.textContent === respuestaSeleccionada) {
                boton.style.backgroundColor = 'red';
            }
            if (boton.textContent === preguntas[indiceActual].respuestaCorrecta) {
                boton.style.backgroundColor = 'green';
            }
        });
    }

    // Mostrar la siguiente pregunta o finalizar el juego después de un breve retraso
    setTimeout(function () {
        if (indiceActual < preguntas.length - 1) {
            // Restablecer los colores de los botones
            botonesRespuesta.forEach(function (boton) {
                boton.style.backgroundColor = '';
            });
            // Mostrar la siguiente pregunta
            mostrarPregunta(indiceActual + 1);
        } else {
            // Fin del juego
            alert('Juego terminado. Tu puntuación final es ' + document.getElementById('scr').textContent);
        }
    }, 1000); // Puedes ajustar el tiempo de espera según tus preferencias
}
