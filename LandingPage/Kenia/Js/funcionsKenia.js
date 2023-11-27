document.addEventListener("DOMContentLoaded", pintarMascara);

let arrayColors = [];
let colorSeleccionat = null;

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

function colorPinzell(div) {
  // Obtener el color del div clickeado
  colorSeleccionat = window.getComputedStyle(div).getPropertyValue("background-color");
  console.log("Color seleccionado:", colorSeleccionat);
}

function pintarCuadrado(event) {
  if (colorSeleccionat) {
    // Pintar el cuadrado con el color seleccionado
    event.target.style.backgroundColor = colorSeleccionat;
  } else {
    console.log("Selecciona un color primero");
  }
}

function compararMascaras(){




  
}