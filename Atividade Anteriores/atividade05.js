let contador = 0;
const Contagem = document.getElementById("contador");
const Aumentar = document.getElementById("aumentar");
const Diminiur = document.getElementById("diminiur");
const Resetar = document.getElementById("resetar");

function atualizarCampo() {
    Contagem.textContent = contador;    
}

Aumentar.addEventListener('click', function () {
    contador++;
    atualizarCampo();    
})

Diminiur.addEventListener('click', function () {
    contador--;
    atualizarCampo();    
})

Resetar.addEventListener('click', function () {
    contador = 0;
    atualizarCampo();    
})

// var contadorElemento = document.getElementeById('contador');

// var contador = 0;

// function atualizarContador() {
    //contadorElemento.innertext = contador;
//}

// document.getElementById('aumentar').addEventListener('click', function () {
//     contador++;
//     atualizarContador();    
// })

// document.getElementById('diminiur').addEventListener('click', function () {
//     contador--;
//     atualizarContador();    
// })

// document.getElementById('resetar').addEventListener('click', function () {
//     contador = 0;
//     atualizarContador();    
// })