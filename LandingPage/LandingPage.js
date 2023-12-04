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

document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const imagenes = document.querySelectorAll(".imagen");
  const totalImagenes = imagenes.length;

  function mostrarImagen() {
    imagenes[index].style.display = "block";
    setTimeout(() => {
      imagenes[index].style.opacity = "1";
    }, 50);
  }


  mostrarImagen();
  setInterval(ocultarImagen, 5000);
});