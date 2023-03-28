// Selecionar os elementos
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let time = document.getElementsByTagName("time")[0];
let body = document.getElementsByTagName("body")[0];

// Escrever no localStorage
startButton.onclick = function (){
    let d = new Date();
    localStorage.setItem("time", d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds);
    localStorage.setItem("time_start", d.getHours() + ":" + d.getMinutes + ":" + d.getSeconds);
}
// Buscar dados no localStorage
body.onload = function (){
    time.textContent = localStorage.getItem("time");
}

// Remover dados do localStorage
stopButton.onclick = function (){
    localStorage.removeItem("time")
}

// Limpar o localStorages
resetButton.onclick = function(){
    localStorage.clear
}
