document.getElementById('forms').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome');
    const preco = document.getElementById('preco');
    const categoria = document.getElementById('categoria');
    const descricao = document.getElementById('descricao');
    const mensagem = document.getElementById('mensagem');

    const precoValor = parseFloat(preco.value);
    
    let erros = [];

    mensagem.textContent = "";
    mensagem.style.color = "red";

    if (nome.value.trim() === "") {
        erros.push("Por favor insira um nome.");
    } else if (nome.value.trim().length < 3) {
        erros.push("Por favor insira um nome com pelo menos 3 caracteres.");
    }

    if (isNaN(precoValor) || preco.value.trim() === "") {
        erros.push("Por favor insira um valor de preço.");
    }

    if (categoria.value === "0" || categoria.value === "") {
        erros.push("Por favor selecione a categoria correspondente ao produto.");
    }

    if (descricao.value.trim() !== "" && descricao.value.trim().length < 10) {
        erros.push("Por favor insira uma descrição com pelo menos 10 caracteres.");
    }

    if (erros.length > 0) {
        mensagem.innerHTML = erros.join("<br>");
    } else {
        mensagem.innerHTML = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";

        // Limpar os campos
        nome.value = "";
        preco.value = "";
        categoria.value = "0";
        descricao.value = "";
    }
});
