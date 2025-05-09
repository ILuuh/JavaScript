let numeroSecreto = "";
let tentativas = 0;

function iniciarJogo() {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    tentativas = 0;
    numeroSecreto = parseInt(numeroSecreto);

    document.getElementById('inputChute'). value = '';
    document.getElementById('mensagem').innerHTML = '';
    document.getElementById('btn-reiniciar').style.display = "none";
}

function verificar() {
    let chute = document.getElementById('inputChute').value;
    chute = parseInt(chute);
    tentativas++;
    
    if (isNaN(chute) || chute < 1 || chute > 100) {
        document.getElementById('mensagem').innerHTML = "Por favor digite um número no intervalo de 1 à 100";
        document.getElementById('mensagem').style.color = 'red';
        tentativas = 0;
        return;
    }
    if (chute === numeroSecreto) {
        document.getElementById('mensagem').style.color = 'black';
        document.getElementById('mensagem').innerHTML = `Parabéns você acerto o número sorteado 🎉 ${numeroSecreto}, você tentou ${tentativas} vezes.`;
        document.getElementById('btn-reiniciar').style.display = "inline-block";
    }
    if (chute > numeroSecreto) {
        document.getElementById('mensagem').style.color = 'black';
        document.getElementById('mensagem').innerHTML = "O número sorteado é menor";
    }
    if (chute < numeroSecreto) {
        document.getElementById('mensagem').style.color = 'black';
        document.getElementById('mensagem').innerHTML = "O número sorteado é maior";
    }
}

function reiniciarJogo() {
    iniciarJogo();
    
}

document.getElementById('btn-tentar').addEventListener('click', verificar);
document.getElementById('btn-reiniciar').addEventListener('click', reiniciarJogo);
iniciarJogo();