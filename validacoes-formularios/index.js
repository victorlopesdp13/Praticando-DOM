// onBlur // onChange // onFocus // onSubmit

// Selecionar os nossos elementos
let form = document.getElementById("formulario");

let fname = document.getElementById("fname");

let lname = document.getElementById("lname");

let lsexo = document.getElementById("lsexo");

let fname_msg = document.getElementById("msg-vld-fname");

let lname_msg = document.getElementById("msg-vld-lname");

let lsexo_msg = document.getElementById("msg-vld-lsexo");

// Validar quando o usuário do campo
fname.onblur = function (event) {
    if(event.target.value.length < 3 ){
        fname_msg.textContent = "O valor digitado deve conter pelo menos três letras";
        fname_msg.style.display = "block";
    } else{
        fname_msg.style.display = "none";
    }
}

// Validar quando o usuário muda um campo
lsexo.onchange = function (event){
    if(event.target.value == "selecione"){
        lsexo_msg.textContent = "Você precisa selecionar um valor válido"
        lsexo_msg.style.display = "block"
    } else {
        lsexo_msg.style.display = "none"
    }
}

// Validar quando usuário entra em um campo
fname.onfocus = function (){
    fname_msg.style.display = "none";
}

// Validar quando usuário envia o formulário

form.onsubmit = function (event){
    if(fname.value.length < 3 || lsexo.value == "selecione"){
        alert("Por favor preencha o formuLário corretamente antes de enviar");
        event.preventDefault();
    } 
}