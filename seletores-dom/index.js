console.log("Teste JS tag");

// Selecionar pelo ID

let btStart = document.getElementById("start");

console.log("getElementById: ", btStart);

// Selecionar pela Class

let dvContainer = document.getElementsByClassName("container");

console.log("getelementByClassName: ", dvContainer);

// Selecionar pela Tag

let buttons = document.getElementsByTagName("button");
console.log("getelementByTagName: ", buttons);

// Selecionar por QuerySelector

let btReset = document.querySelector("#reset");
console.log("querySelector: ", btReset);

// Selecionar por QuerySelectorAll

let allButtons = document.querySelectorAll("button");
console.log("querySelectorAll: ", allButtons);