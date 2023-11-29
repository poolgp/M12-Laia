var spanText = document.getElementById("tooltip");
window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
        spanText.style.top = (y + 20) + 'px';
        spanText.style.left = (x + 20) + 'px';
}



// Lógica para desbloquear los juegos
$(".locked").click(function () {
    var unlocked = true;
    $(".locked").each(function () {
        if (!$(this).hasClass("unlocked")) {
            unlocked = false;
            alert("Desbloquea el juego anterior primero.");
            return false; // Salir del bucle si un juego está bloqueado
        }
    });

    if (unlocked) {
        $(this).addClass("unlocked");
        $(this).find(".lock-background").fadeOut(); // Ocultar el fondo difuminado
    }
});