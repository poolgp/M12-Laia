document.addEventListener("DOMContentLoaded", function () {
    const linesContainer = document.getElementById("lines");
    const points = document.querySelectorAll(".point");

    // Conecta los puntos con líneas discontinuas
    function connectPoints() {
        for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                line.setAttribute("x1", points[i].offsetLeft + 15);
                line.setAttribute("y1", points[i].offsetTop + 15);
                line.setAttribute("x2", points[j].offsetLeft + 15);
                line.setAttribute("y2", points[j].offsetTop + 15);
                line.setAttribute("stroke", "#3498db");
                line.setAttribute("stroke-dasharray", "5,5");
                linesContainer.appendChild(line);
            }
        }
    }

    connectPoints();
});