function iniciarJuego() {
    // Oculta el contenido de bienvenida con una transición suave
    var bienvenida = document.getElementById('bienvenida');
    bienvenida.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    bienvenida.style.opacity = '0';
    bienvenida.style.transform = 'translateY(-100%)';

    // Agrega la clase activa al contenedor principal para el efecto de transición
    var juego = document.getElementById('juego');
    juego.classList.add('activa');

    // Agrega el contenido del juego después de un tiempo para dar tiempo a la transición
    setTimeout(function () {
        var juegoContainer = document.getElementById('juegoContainer');
        juegoContainer.innerHTML = '<h3>Juego en curso...</h3>';
    }, 1000); // 1000 milisegundos (1 segundo) es la duración de la transición
}
