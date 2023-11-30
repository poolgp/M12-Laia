document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const gridSize = 5;
    const juegoTablero = [
        [3, 2, 0, 0, 3],
        [2, 1, 3, 2, 3],
        [3, 1, 4, 1, 1],
        [1, 2, 1, 3, 0],
        [3, 3, 1, 3, 3]
    ];

    const botones = [];

    const imageNames = ["img/cableRectoIncompleto.png", "img/cableTripleIncompleto.png", "img/cableDobleIncompleto.png", "img/bombilla-apagada.png", "img/centroCompleto.png"];

    for (let i = 0; i < gridSize; i++) {
        botones[i] = [];
        for (let j = 0; j < gridSize; j++) {
            const button = document.createElement("button");
            button.classList.add("box");

            // Asigna la imagen en función de la matriz juegoTablero
            const randomImage = imageNames[juegoTablero[i][j]];

            const image = document.createElement("img");
            image.src = randomImage;
            image.style.width = "100px";
            image.style.height = "100px";

            const rotacionRandom = Math.floor(Math.random() * 4) * 90;
            button.style.transform = `rotate(${rotacionRandom}deg)`;

            button.appendChild(image);

            button.onclick = function () {
                rotarBoton(this, i, j);
            };
            container.appendChild(button);
            botones[i][j] = button;
        }
    }

    // Mensaje para felicitar al usuario
    function mostrarMensajeFelicitaciones() {
        alert("¡Felicidades! Has completado el nivel.");
    }

    // Verifica si el juego se ha completado automaticamente
    function verificarJuegoCompleto() {
        let completo = true;

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (juegoTablero[i][j] === 0) {
                    // Tubería recta
                    const rotacion = parseFloat(botones[i][j].style.transform.replace("rotate(", "").replace("deg)", ""));
                    if (rotacion !== 0 && rotacion !== 180) {
                        completo = false;
                        break;
                    }
                } else if (juegoTablero[i][j] === 1) {
                    // Tubería curva
                    const rotacion = parseFloat(botones[i][j].style.transform.replace("rotate(", "").replace("deg)", ""));
                    if (rotacion !== 90 && rotacion !== 270) {
                        completo = false;
                        break;
                    }
                }
            }
            if (!completo) {
                break;
            }
        }

        if (completo) {
            mostrarMensajeFelicitaciones();
        }
    }

    function rotarBoton(boton, i, j) {
        const currentRotation = (parseFloat(boton.style.transform.replace("rotate(", "").replace("deg)", "")) || 0) + 90;
        boton.style.transform = `rotate(${currentRotation}deg)`;
        verificarJuegoCompleto();
    }

    const comprobarBtn = document.getElementById("comprobarBtn");
    comprobarBtn.addEventListener("click", verificarJuegoCompleto);

    // Temporizador
    let tiempoRestante = 60; // 60 segundos
    const timerElement = document.getElementById("timer");
    const reintentarBtn = document.getElementById("reintentarBtn");

    function actualizarTemporizador() {
        if (tiempoRestante >= 0) {
            const minutos = Math.floor(tiempoRestante / 60);
            const segundos = tiempoRestante % 60;
            timerElement.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
            tiempoRestante--;

            if (tiempoRestante < 0) {
                // Tiempo agotado, muestra el mensaje y el botón de reintentar
                alert("¡Tiempo agotado! Has perdido.");
                reintentarBtn.style.display = "block";
            }
        }
    }

    const intervaloTemporizador = setInterval(actualizarTemporizador, 1000);

    reintentarBtn.addEventListener("click", function () {
        // Aquí puedes reiniciar el nivel o realizar la acción que desees al hacer clic en reintentar.
        clearInterval(intervaloTemporizador); // Detén el temporizador actual
        tiempoRestante = 60; // Reinicia el tiempo
        timerElement.textContent = "1:00"; // Restablece el texto del temporizador
        reintentarBtn.style.display = "none"; // Oculta el botón de reintentar
        // Luego, puedes realizar las acciones necesarias para reiniciar el nivel.

        intervaloTemporizador = setInterval(actualizarTemporizador, 1000);
    });
});