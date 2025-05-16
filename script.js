const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const black = document.getElementById('black');
text = document.getElementById('text');

red.addEventListener('click', function () {
    text.style.color = "red";
});

blue.addEventListener('click', function () {
    text.style.color = "blue";
});

green.addEventListener('click', function () {
    text.style.color = "green";
});

black.addEventListener('click', function () {
    text.style.color = "black";
});
