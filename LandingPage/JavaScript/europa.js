document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const gridSize = 5;
    const juegoTablero = [
        [0, 0, 1, 1, 0],
        [0, 1, 0, 0, 1],
        [1, 0, 1, 1, 0],
        [0, 0, 1, 0, 1],
        [1, 1, 0, 1, 0]
    ];

    const botones = [];

    for (let i = 0; i < gridSize; i++) {
        botones[i] = [];
        for (let j = 0; j < gridSize; j++) {
            const button = document.createElement("button");
            button.classList.add("box");

            const imageNames = ["img/pipe-recto.png", "img/pipe-triple.png", "img/pipe-direccional.png"];
            const randomImage = imageNames[Math.floor(Math.random() * imageNames.length)];

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

/*    function verificarJuegoCompleto() {
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
                // Agregar más casos para otros tipos de tuberías según sea necesario
            }
            if (!completo) {
                break;
            }
        }

        if (completo) {
            alert("¡Has ganado! El juego está completo.");
        }
    }*/

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

   /* function actualizarTemporizador() {
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
    }*/

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
