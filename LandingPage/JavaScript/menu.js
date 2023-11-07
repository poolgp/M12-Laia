window.onload = function () {
    var receta1 = ['Curry Indio', 'carne cerdo, yogur, cebolla, tomate']
    var receta2 = ['Biryani', 'arroz, carne pollo, tomate, cebolla, pimiento'];
    var receta3 = ['Samosa', 'cebolla, patata, tomate, limón, mantequilla'];

    var recetas = [receta1, receta2, receta3];

    var recetaAleatoria = recetas[Math.floor(Math.random() * recetas.length)];

    document.getElementById('receta').innerHTML = '<b>' + recetaAleatoria[0] + '</b><br>' + recetaAleatoria[1];
};
