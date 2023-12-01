document.addEventListener("DOMContentLoaded", function () {
    const gridSize = 5;
    const juegoTablero = [
        [3, 2, 0, 0, 3],
        [2, 1, 3, 2, 3],
        [3, 1, 4, 1, 1],
        [1, 2, 1, 3, 0],
        [3, 3, 1, 3, 3]
    ];

    const imageNames = [
        "img/cableRectoIncompleto.png", "img/cableTripleIncompleto.png", "img/cableDobleIncompleto.png",
        "img/bombilla-apagada.png", "img/centroCompleto.png"
    ];

    const container = document.getElementById("container");
    const timerElement = document.getElementById("timer");
    const reintentarBtn = document.getElementById("reintentarBtn");

    const botones = [];

    const constantes = {
        tiempoInicial: 60,
        tamanoBoton: 100,
    };

    function inicializar() {
        for (let i = 0; i < gridSize; i++) {
            botones[i] = [];
            for (let j = 0; j < gridSize; j++) {
                crearBoton(i, j);
            }
        }
    }

    function crearBoton(i, j) {
        const button = document.createElement("button");
        button.classList.add("box");

        const randomImage = imageNames[juegoTablero[i][j]];

        const image = document.createElement("img");
        image.src = randomImage;
        image.style.width = `${constantes.tamanoBoton}px`;
        image.style.height = `${constantes.tamanoBoton}px`;

        const rotacionRandom = Math.floor(Math.random() * 4) * 90;
        button.style.transform = `rotate(${rotacionRandom}deg)`;

        button.appendChild(image);

        button.onclick = function () {
            rotarBoton(this, i, j);
        };

        container.appendChild(button);
        botones[i][j] = button;
    }

    function rotarBoton(boton, i, j) {
        const currentRotation = (parseFloat(boton.style.transform.replace("rotate(", "").replace("deg)", "")) || 0) + 90;
        boton.style.transform = `rotate(${currentRotation}deg)`;
        verificarJuegoCompleto();
    }

    function mostrarMensaje(mensaje) {
        // Implementa lógica para mostrar mensajes en la interfaz del juego
        console.log(mensaje);
    }

    function iluminarConexion(i, j) {
        const arribaCorrecto = i > 0 && juegoTablero[i - 1][j] === 1;
        const abajoCorrecto = i < gridSize - 1 && juegoTablero[i + 1][j] === 1;
        const izquierdaCorrecto = j > 0 && juegoTablero[i][j - 1] === 1;
        const derechaCorrecto = j < gridSize - 1 && juegoTablero[i][j + 1] === 1;

        return arribaCorrecto || abajoCorrecto || izquierdaCorrecto || derechaCorrecto;
    }

    function verificarJuegoCompleto() {
        let completo = true;

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (juegoTablero[i][j] === 0) {
                    const rotacion = parseFloat(botones[i][j].style.transform.replace("rotate(", "").replace("deg)", ""));
                    if (rotacion !== 0 && rotacion !== 180) {
                        completo = false;
                        break;
                    }
                } else if (juegoTablero[i][j] === 1) {
                    const rotacion = parseFloat(botones[i][j].style.transform.replace("rotate(", "").replace("deg)", ""));
                    if (rotacion !== 90 && rotacion !== 270) {
                        completo = false;
                        break;
                    }
                } else if (juegoTablero[i][j] === 3) {
                    if (iluminarConexion(i, j)) {
                        botones[i][j].classList.add("iluminado");
                        botones[i - 1][j].classList.add("iluminado"); // Arriba
                        botones[i + 1][j].classList.add("iluminado"); // Abajo
                        botones[i][j - 1].classList.add("iluminado"); // Izquierda
                        botones[i][j + 1].classList.add("iluminado"); // Derecha
                    } else {
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
            mostrarMensaje("¡Felicidades! Has completado el nivel.");
        }
    }

    function actualizarTemporizador() {
        if (constantes.tiempoRestante >= 0) {
            const minutos = Math.floor(constantes.tiempoRestante / 60);
            const segundos = constantes.tiempoRestante % 60;
            timerElement.textContent = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
            constantes.tiempoRestante--;

            if (constantes.tiempoRestante < 0) {
                mostrarMensaje("¡Tiempo agotado! Has perdido.");
                reintentarBtn.style.display = "block";
            }
        }
    }

    function reiniciarJuego() {
        clearInterval(constantes.intervaloTemporizador);
        constantes.tiempoRestante = constantes.tiempoInicial;
        timerElement.textContent = "1:00";
        reintentarBtn.style.display = "none";

        constantes.intervaloTemporizador = setInterval(actualizarTemporizador, 1000);
    }

    // Inicialización
    inicializar();

    // Temporizador
    constantes.tiempoRestante = constantes.tiempoInicial;
    constantes.intervaloTemporizador = setInterval(actualizarTemporizador, 1000);

    // Botón de reinicio
    reintentarBtn.addEventListener("click", reiniciarJuego);
});
