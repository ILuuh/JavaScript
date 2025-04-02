// Seleciona os elementos do HTML
const diaDoAniversario = document.getElementById('diaAniversario');
const quantosAnosTem = document.getElementById('anosAtual');
const qualDiaDaSemana = document.getElementById('diaSemana');
const quantosDiasFalta = document.getElementById('diasQueFalta');

document.getElementById("calcular").addEventListener("click", dados);

function dados() {
    let dataAniversario = document.getElementById("inputDiaAniversario").value;

    // Cria um objeto Date a partir da data de aniversário
    let dataAniversarioDate = new Date(dataAniversario);
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth(); // O mês começa do zero (0 para janeiro)
    const year = now.getFullYear();

    // Calcular a diferença de anos
    let idade = year - dataAniversarioDate.getFullYear();
    
    // Verificar se o aniversário já ocorreu neste ano
    if (month < dataAniversarioDate.getMonth() || (month === dataAniversarioDate.getMonth() && day < dataAniversarioDate.getDate())) {
        idade--; // Se o aniversário ainda não aconteceu, subtrai 1 da idade
    }
    
    // Atualizar a idade no HTML
    quantosAnosTem.innerHTML = `Idade: ${idade} anos`;

    // Exibir a data atual
    let formattedDate = `Data atual: ${day}/${month + 1}/${year}`; // Ajuste no mês (mês começa do zero)
    diaDoAniversario.innerHTML = formattedDate;

    // Calcular a quantidade de dias até o próximo aniversário
    let proximoAniversario = new Date(year, dataAniversarioDate.getMonth(), dataAniversarioDate.getDate());
    if (proximoAniversario < now) {
        proximoAniversario.setFullYear(year + 1); // Se o aniversário já passou, ajustar para o próximo ano
    }

    // Calcular o dia da semana
    const diasDaSemana = [ "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    qualDiaDaSemana.innerHTML = `Hoje é: ${diasDaSemana[proximoAniversario.getDay()]}`;

    let diffTime = proximoAniversario - now;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Converter milissegundos para dias
    quantosDiasFalta.innerHTML = `Faltam ${diffDays} dias para o próximo aniversário.`;
}

// Chama a função inicialmente
dados();
    