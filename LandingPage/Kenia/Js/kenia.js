const colorPalette = document.querySelector("#color-palette");
const grid = document.querySelector("#grid");
const removeColorButton = document.querySelector("#remove-color-button");
let selectedColor = null;

// Función para crear la paleta de colores
function crearPaletaColors() {
    const colors = ["red", "blue", "green", "yellow"]; // Puedes agregar tus colores personalizados aquí

    colors.forEach((color) => {
        const colorDiv = document.createElement("div");
        colorDiv.className = "color";
        colorDiv.style.backgroundColor = color;
        colorDiv.addEventListener("click", () => {
            selectedColor = color;
        });
        colorPalette.appendChild(colorDiv);
    });
}


//Funció que guarda i escolleix de manera aleatoria diferents arrays de paletas
function paletaAleatoria(){

    const paletaColors = [
        ["green","green","green","green",
        "green","green","green","green",
        "white","white","white","white",
        "green","green","green","green"],

        ["yellow","yellow","yellow","yellow",
        "yellow","yellow","yellow","yellow",
        "blue","blue","blue","blue",
        "red","red","red","red"],

        ["white","white","white","white",
        "white","white","white","white",
        "red","red","red","red",
        "red","red","red","red"],

        ["blue","blue","blue","blue",
        "blue","white","white","blue",
        "red","white","white","red",
        "red","white","white","red"]
    ];

    const paletaAleatoria = Math.floor(Math.random()*paletaColors.length);

    return paletaColors[paletaAleatoria];

}



function temporitzadorCuadricula(){



    


}


// Funció per crear la cuadricula predeterminada
function crearCuadriculaPredeterminada() {
    const preColoredGrid = document.querySelector("#mascaraOriginal");
    const preColoredColors = paletaAleatoria(); // Colores predefinidos

    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.backgroundColor = preColoredColors[i];
        preColoredGrid.appendChild(cell);
    }
}


// Funció per crear la cuadrícula i permetre poder pintar al fer clic
function crearCuadricula() {
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.addEventListener("click", () => {
            if (selectedColor) {
                cell.style.backgroundColor = selectedColor;
            }
        });
        grid.appendChild(cell);
    }
}

// Funció per esborrar els colors en totes las celdas
function removeAllColors() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "";
    });
}




crearPaletaColors();
crearCuadriculaPredeterminada();
crearCuadricula();

// Agregar evento al botón de borrar colores
removeColorButton.addEventListener("click", () => {
    removeAllColors();
});