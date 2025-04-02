document.getElementById("converte").addEventListener("click", converter);

function converter() {
    const celsius = document.getElementById("inputCelsius").value;
    const fahrenheit = document.getElementById("inputFahrenheit").value;

    if (celsius != "" & fahrenheit == "") {

        const resultado = document.getElementById("resultado");
        inputCelsius = parseFloat(celsius);
        var conversao = (inputCelsius * 9 / 5) + 32;
        resultado.innerHTML = `${celsius}°C equivalem a ${conversao.toFixed(2)}°F.`;
    }
    if (fahrenheit != "" & celsius == "") {

        const resultado = document.getElementById("resultado");
        inputFahrenheit = parseFloat(fahrenheit);
        var conversao = (inputFahrenheit - 32) * 5 / 9;
        resultado.innerHTML = `${fahrenheit}°F equivalem a ${conversao.toFixed(2)}°C.`;
    }
}
converter();