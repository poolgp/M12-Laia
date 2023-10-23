document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const gridSize = 5;

    for (let i = 1; i <= gridSize * gridSize; i++) {
        const button = document.createElement("button");
        button.classList.add("box", i % 2 === 0 ? "off" : "on");
        button.textContent = "<-->";
        button.onclick = function () {
            rotarBoton(this);
        };
        container.appendChild(button);
    }
});

function rotarBoton(boton) {
    const currentRotation = (parseFloat(boton.style.transform.replace("rotate(", "").replace("deg)", "")) || 0) + 90;
    boton.style.transform = `rotate(${currentRotation}deg)`;
}

