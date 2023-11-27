const timerElement = document.getElementById("timer");

    // Establece el tiempo inicial en segundos (1 minuto)
    let timeInSeconds = 60;

    // Actualiza el temporizador cada segundo
    const timerInterval = setInterval(function () {
      // Convierte el tiempo en minutos y segundos
      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;

      // Formatea los minutos y segundos como texto
      const timerText = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

      // Actualiza el contenido del elemento del temporizador
      timerElement.innerText = timerText;

      // Reduce el tiempo en 1 segundo
      timeInSeconds--;

      // Detén el temporizador cuando llegues a 0
      if (timeInSeconds < 0) {
        clearInterval(timerInterval);
        timerElement.innerText = "0:00";
      }
    }, 1000);