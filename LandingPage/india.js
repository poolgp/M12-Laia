function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function verifica(ev) {
    var img = document.getElementById("drag1");

    var div1 = document.getElementById("div1");
    var div2 = document.getElementById("div2");

    if (div1.contains(img)) {
        alert("El pez está en div1");
    } else if (div2.contains(img)) {
        alert("El pez está en div2");
    } else {
        alert("El pez no está en ningún div.");
    }
}
