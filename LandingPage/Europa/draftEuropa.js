// Función para iniciar el juego
function iniciarJuego() {
    // Oculta el contenido de bienvenida con una transición suave
    var bienvenida = document.getElementById('bienvenida');
    bienvenida.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    bienvenida.style.opacity = '0';
    bienvenida.style.transform = 'translateY(-100%)';

    // Agrega la clase activa al contenedor principal para el efecto de transición
    var juego = document.getElementById('contenedor-juego');
    juego.classList.add('activa');

    // Agrega el contenido del juego después de un tiempo para dar tiempo a la transición
    setTimeout(function () {
        // Aparece el contenedor del juego con una transición
        juego.style.transition = 'opacity 1s ease-in, transform 1s ease-in';
        juego.style.opacity = '1';
        juego.style.transform = 'translateY(0%)';

        // Carga el juego
        juego.innerHTML = document.getElementById('juegoContainer').innerHTML;
    }, 1000); // 1000 milisegundos (1 segundo) es la duración de la transición
}

// Inicia el juego al hacer clic en el botón
document.getElementById('botonIniciarJuego').addEventListener('click', iniciarJuego);
