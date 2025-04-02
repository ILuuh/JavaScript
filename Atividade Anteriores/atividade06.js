// const btnVermelho = document.getElementById('vermelho');
// const btnAzul= document.getElementById('azul');
// const btnVerde = document.getElementById('verde');
// const btnResetar = document.getElementById('resetar');

// btnVermelho.addEventListener('click', function () {
//     document.body.style.backgroundColor = "red";
//     document.body.style.transition = "0.5s";
// });

// btnAzul.addEventListener('click', function () {
//     document.body.style.backgroundColor = "blue";
// });

// btnVerde.addEventListener('click', function () {
//     document.body.style.backgroundColor = "green";
// });

// btnResetar.addEventListener('click', function () {
//     document.body.style.backgroundColor = "white ";
// });

// // Adiciona um evento de clique ao botão "Enviar"
// document.getElementById("enviar").addEventListener("click", function() {

//     // Captura o valor digitado no campo "Nome"
//     var nome = document.getElementById("nome").value;

//     // Captura o valor digitado no campo "Idade"
//     var idade = document.getElementById("idade").value;

//     // Verifica se os campos estão preenchidos
//     if (nome === "" || idade === "") {
//         // Se algum campo estiver vazio, exibe uma mensagem de erro
//         document.getElementById("resultado").innerText = "Por favor, preencha todos os campos.";
//     } else {
//         // Se os campos estiverem preenchidos, exibe os dados na tela
//         document.getElementById("resultado").innerText = `Nome: ${nome} | Idade: ${idade}`;
//     }
// });

document.getElementById("vermelho").addEventListener("click", function mudarCor() {
    document.body.style.backgroundColor = "red";    
});

document.getElementById("azul").addEventListener("click", function mudarCor() {
    document.body.style.backgroundColor = "blue";    
});

document.getElementById("verde").addEventListener("click", function mudarCor() {
    document.body.style.backgroundColor = "green";    
});

document.getElementById("resetar").addEventListener("click", function mudarCor() {
    document.body.style.backgroundColor = "white";    
});