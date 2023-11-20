document.addEventListener("DOMContentLoaded", pintarMascara);

let arrayColors = [];

function pintarMascara() {
  let colorFons1 = document.getElementById("celda1");
  colorFons1.style.backgroundColor = "orange";
  arrayColors.push("orange");

  let colorFons2 = document.getElementById("celda2");
  colorFons2.style.backgroundColor = "blue";
  arrayColors.push("blue");

  let colorFons3 = document.getElementById("celda3");
  colorFons3.style.backgroundColor = "green";
  arrayColors.push("green");

  let colorFons4 = document.getElementById("celda4");
  colorFons4.style.backgroundColor = "red";
  arrayColors.push("red");

  const myTimeout = setTimeout(amagarMascara, 5000);
}

function amagarMascara() {
  let colorFons1 = document.getElementById("celda1");
  colorFons1.style.backgroundColor = "white";

  let colorFons2 = document.getElementById("celda2");
  colorFons2.style.backgroundColor = "white";

  let colorFons3 = document.getElementById("celda3");
  colorFons3.style.backgroundColor = "white";

  let colorFons4 = document.getElementById("celda4");
  colorFons4.style.backgroundColor = "white";
}

function colorPinzell(color) {
  // Cambia el color del pincel
  console.log("Color seleccionado:", color);

  // Cambia el color de la celda seleccionada
  if (celdaSeleccionada) {
    celdaSeleccionada.style.backgroundColor = color;
  }
}

// Event listener para detectar qué celda está seleccionada
document.addEventListener("click", function(event) {
  celdaSeleccionada = event.target.closest('.colorFons');
});