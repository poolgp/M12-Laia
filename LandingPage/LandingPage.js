// Este script puede permanecer igual, ya que afecta a todos los tooltips.
var tooltips = document.querySelectorAll('.tooltip');

window.onmousemove = function (e) {
  var x = e.clientX,
    y = e.clientY;

  tooltips.forEach(function (tooltip) {
    tooltip.style.top = (y + 20) + 'px';
    tooltip.style.left = (x + 20) + 'px';
  });
};

// Espera a que el DOM (Document Object Model) se cargue completamente antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Inicializa el índice de la imagen actual en 0
  let index = 0;
  
  // Selecciona todas las imágenes con la clase "imagen" y las almacena en la variable 'imagenes'
  const imagenes = document.querySelectorAll(".imagen");
  
  // Almacena la cantidad total de imágenes en la variable 'totalImagenes'
  const totalImagenes = imagenes.length;

  // Función para mostrar la imagen actual
  function mostrarImagen() {
    // Muestra la imagen actual estableciendo el estilo 'display' en "block"
    imagenes[index].style.display = "block";
    
    // Establece gradualmente la opacidad de la imagen a 1 después de un breve retraso
    setTimeout(() => {
      imagenes[index].style.opacity = "1";
    }, 50);
  }

  // Función para ocultar la imagen actual y mostrar la siguiente imagen
  function ocultarImagen() {
    // Establece gradualmente la opacidad de la imagen actual a 0
    imagenes[index].style.opacity = "0";
    
    // Después de un breve retraso, oculta la imagen actual y avanza al siguiente índice circularmente
    // Luego, llama a la función mostrarImagen para mostrar la nueva imagen
    setTimeout(() => {
      imagenes[index].style.display = "none";
      index = (index + 1) % totalImagenes;
      mostrarImagen();
    }, 1000);
  }

  // Muestra la primera imagen cuando la página se carga
  mostrarImagen();
  setInterval(ocultarImagen, 5000);
});