// Seleciona os elementos do HTML
const dataAtualElemento = document.getElementById('data-atual');
const botaoCalcular = document.getElementById('calcular');
const anoNovoElemento = document.getElementById('ano-novo');

// Função para atualizar e exibir a data e hora atuais
function atualizarTempo() {
    const agora = new Date();
    
    const day = agora.getDate().toString().padStart(2, '0');
    const month = (agora.getMonth() + 1).toString().padStart(2, '0');
    const year = agora.getFullYear();
    const hours = agora.getHours().toString().padStart(2, '0');
    const minutes = agora.getMinutes().toString().padStart(2, '0');
    const seconds = agora.getSeconds().toString().padStart(2, '0');

    const formattedDate = `Data atual: ${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    dataAtualElemento.innerHTML = formattedDate;
}

// Função para calcular os dias restantes até o Ano Novo
function calcularDiasParaAnoNovo() {
    const agora = new Date();
    const proximoAno = agora.getFullYear() + 1;
    const anoNovo = new Date(proximoAno, 0, 1); // 1º de janeiro do próximo ano

    const timeDiff = anoNovo - agora; // Diferença em milissegundos
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Converte para dias

    anoNovoElemento.innerHTML = `Faltam ${daysDiff} dias para o Ano Novo! 🎉`;
}

// Atualiza a hora em tempo real
setInterval(atualizarTempo, 1000);

// Adiciona evento ao botão
botaoCalcular.addEventListener('click', calcularDiasParaAnoNovo);

// Chama a função para exibir a hora ao carregar a página
atualizarTempo();
