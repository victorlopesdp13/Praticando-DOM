 // Evento de click
let btnStart = document.getElementById("start");

btnStart.onclick = function () {
    console.log("Clicou no start")
}

 // Evento de tecla pressionada (digitando)
let inputText = document.getElementById("input_text");

inputText.onkeydown = function (event){
    console.log("Digitou: ", event.keyCode);
}
 // Evento de carregamento de elemento
let bodyContainer = document.querySelector("body");
bodyContainer.onload = function (){
    console.log("Carregou o body");
}

 // Evento de mouse sobre o elemento
btnStart.onmouseover = function (event){
    console.log("O mouse está sobre", event.target.innerText);
}
 // Evento de tirar o mouse do elemento
 btnStart.onmouseout = function(event){
    console.log("O mouse saiu de ", event.target.innerText)
 }