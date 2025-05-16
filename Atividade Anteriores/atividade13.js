quadrado = document.getElementById('quadrado');

document.onkeydown = function () {
      quadrado.style.backgroundColor = "blue";
}

document.onkeyup = function () {
    quadrado.style.backgroundColor = "red";  
}

document.onclick = function () {
    quadrado.style.width = "150px";
    quadrado.style.height = "150px"; 
}