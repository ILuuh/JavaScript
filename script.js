document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os campos do formulário
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");
    var form = document.getElementById("contactForm");
  
    // Adiciona validação individual ao sair de cada campo
    nome.addEventListener("blur", function() {
      validarNome();
    });
  
    email.addEventListener("blur", function() {
      validarEmail();
    });
  
    mensagem.addEventListener("blur", function() {
      validarMensagem();
    });
  
    // Validação do campo nome
    function validarNome() {
      var nomeErro = document.getElementById("nomeError");
      if (nome.value.trim() === "") {
        nome.classList.remove("valid");
        nome.classList.add("error");
        nomeErro.style.display = "block";
        return false;
      } else {
        nome.classList.remove("error");
        nome.classList.add("valid");
        nomeErro.style.display = "none";
        return true;
      }
    }
  
    // Validação do campo email
    function validarEmail() {
      var emailErro = document.getElementById("emailError");
      if (email.value.trim() === "") {
        email.classList.remove("valid");
        email.classList.add("error");
        emailErro.style.display = "block";
        return false;
      } else {
        email.classList.remove("error");
        email.classList.add("valid");
        emailErro.style.display = "none";
        return true;
      }
    }
  
    // Validação do campo mensagem
    function validarMensagem() {
      var mensagemErro = document.getElementById("mensagemError");
      if (mensagem.value.trim() === "") {
        mensagem.classList.remove("valid");
        mensagem.classList.add("error");
        mensagemErro.style.display = "block";
        return false;
      } else {
        mensagem.classList.remove("error");
        mensagem.classList.add("valid");
        mensagemErro.style.display = "none";
        return true;
      }
    }
  
    // Valida todos os campos ao enviar o formulário
    form.addEventListener("submit", function(event) {
      var nomeValido = validarNome();
      var emailValido = validarEmail();
      var mensagemValida = validarMensagem();
  
      if (!nomeValido || !emailValido || !mensagemValida) {
        event.preventDefault(); // Impede envio se houver erro
        alert("Por favor, preencha todos os campos corretamente.");
      } else {
        alert("Formulário enviado com sucesso!");
      }
    });
  });
  