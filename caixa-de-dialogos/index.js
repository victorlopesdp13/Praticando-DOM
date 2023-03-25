// alert
let btnStart = document.getElementById("start");

btnStart.onclick = function (){
    alert("Você clicou no botão start")
};

// prompt
let btnStop = document.getElementById("stop");

btnStop.onclick = () => {
   let nameUser = prompt("Digite o seu nome para confirmar")
   console.log(nameUser)
}

// confirm
let btnReset = document.getElementById("reset");

btnReset.onclick = () => {
    let confirmation = confirm("Você tem certeza que deseja resetar?")
    console.log(confirmation)
}