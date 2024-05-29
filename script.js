function mostrarbasica() {
    var texto = document.getElementById("info-basica");
    var boton = document.getElementById("boton-basica");
    var imagen = boton.querySelector("img"); // Obtiene la imagen dentro del botón

    if (texto.style.display === "none") {
        texto.style.display = "block";
        imagen.src = "img/flecha-arriba.png"; // Cambia la imagen a "flecha-arriba"
    } else {
        texto.style.display = "none";
        imagen.src = "img/flecha-abajo.png"; // Si no es "flecha-abajo", cambia a "flecha-abajo"
    }

}
function mostrarmedia() {
    var texto = document.getElementById("info-media");
    var boton = document.getElementById("boton-media");
    var imagen = boton.querySelector("img"); // Obtiene la imagen dentro del botón

    if (texto.style.display === "none") {
        texto.style.display = "block";
        imagen.src = "img/flecha-arriba.png"; // Cambia la imagen a "flecha-arriba"
    } else {
        texto.style.display = "none";
        imagen.src = "img/flecha-abajo.png"; // Si no es "flecha-abajo", cambia a "flecha-abajo"
    }

}
function mostrarsuperior() {
    var texto = document.getElementById("info-superior");
    var boton = document.getElementById("boton-superior");
    var imagen = boton.querySelector("img"); // Obtiene la imagen dentro del botón

    if (texto.style.display === "none") {
        texto.style.display = "block";
        imagen.src = "img/flecha-arriba.png"; // Cambia la imagen a "flecha-arriba"
    } else {
        texto.style.display = "none";
        imagen.src = "img/flecha-abajo.png"; // Si no es "flecha-abajo", cambia a "flecha-abajo"
    }
}
function mostrarotros() {
    var texto = document.getElementById("info-otros");
    var boton = document.getElementById("boton-otros");
    var imagen = boton.querySelector("img"); // Obtiene la imagen dentro del botón

    if (texto.style.display === "none") {
        texto.style.display = "block";
        imagen.src = "img/flecha-arriba.png"; // Cambia la imagen a "flecha-arriba"
    } else {
        texto.style.display = "none";
        imagen.src = "img/flecha-abajo.png"; // Si no es "flecha-abajo", cambia a "flecha-abajo"
    }
}
