document.getElementById('forms').addEventListener('submit', function (event) {
    event.preventDefault();

    // Campos
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const confirmSenha = document.getElementById('confirmSenha');
    const mensagem = document.getElementById('mensagem');

    let erros = [];

    // Reset estilos
    [nome, email, senha, confirmSenha].forEach(campo => {
        campo.style.borderColor = "#ccc";
    });

    mensagem.textContent = "";
    mensagem.style.color = "red"; // padrão para erro

    // Validações
    if (nome.value.trim() === "") {
        erros.push("Por favor insira um nome.");
        nome.style.borderColor = "red";
    } else if (nome.value.trim().length < 3) {
        erros.push("Por favor insira um nome com pelo menos 3 caracteres.");
        nome.style.borderColor = "red";
    } else {
        nome.style.borderColor = "green";
    }

    if (!email.value.includes('@') || !email.value.includes('.')) {
        erros.push('Por favor insira um email válido.');
        email.style.borderColor = "red";
    } else {
        email.style.borderColor = "green";
    }

    if (senha.value === "") {
        erros.push('Por favor insira uma senha.');
        senha.style.borderColor = "red";
    } else if (senha.value.length < 6) {
        erros.push("A senha precisa ter pelo menos 6 caracteres.");
        senha.style.borderColor = "red";
    } else {
        senha.style.borderColor = "green";
    }

    if (confirmSenha.value !== senha.value || confirmSenha.value === "") {
        erros.push('As senhas não estão iguais.');
        confirmSenha.style.borderColor = "red";
    } else {
        confirmSenha.style.borderColor = "green";
    }

    if (erros.length > 0) {
        mensagem.innerHTML = erros.join("<br>");
        mensagem.style.color = "red";
    } else {
        mensagem.innerHTML = "Cadastro realizado com sucesso!";
        mensagem.style.color = "green";

        // Opcional: limpar campos após sucesso
        [nome, email, senha, confirmSenha].forEach(campo => {
            campo.value = "";
            campo.style.borderColor = "#ccc";
        });
    }
});
