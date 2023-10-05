// Array de coordenadas para los límites de los países (Ejemplo: España)
const countryCoordinates = [
    { x: 100, y: 50 },
    { x: 150, y: 50 },
    { x: 150, y: 100 },
    { x: 100, y: 100 }
];

// Referencia al elemento del mapa
const mapa = document.getElementById('mapa');

// Función para resaltar un país al pasar el mouse
function resaltarPais(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    // Verifica si el mouse está dentro de las coordenadas del país (Ejemplo: España)
    const estaDentro = esPuntoDentroDelPoligono(x, y, countryCoordinates);

    if (estaDentro) {
        mapa.classList.add('country-highlight');
    } else {
        mapa.classList.remove('country-highlight');
    }
}

// Función para verificar si un punto está dentro de un polígono
function esPuntoDentroDelPoligono(x, y, coordenadas) {
    let dentro = false;

    for (let i = 0, j = coordenadas.length - 1; i < coordenadas.length; j = i++) {
        const xi = coordenadas[i].x;
        const yi = coordenadas[i].y;
        const xj = coordenadas[j].x;
        const yj = coordenadas[j].y;

        const intersecta = ((yi > y) !== (yj > y)) &&
            (x < (xj - xi) * (y - yi) / (yj - yi) + xi);

        if (intersecta) {
            dentro = !dentro;
        }
    }

    return dentro;
}

// Agregar evento para el movimiento del mouse
mapa.addEventListener('mousemove', resaltarPais);
