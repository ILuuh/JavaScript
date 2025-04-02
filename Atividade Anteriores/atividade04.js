document.getElementById("enviar").addEventListener("click", dados);

function dados() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    
    if (nome === "" || idade === "") {
        document.getElementById("resultado").innerText = "Por favor preencha os campos corretamente";
    } else {
        document.getElementById("resultado").innerText = `Nome: ${nome} | Idade: ${idade}`;
    }

}