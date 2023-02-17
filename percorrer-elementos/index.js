
// Selecionar elementos
let divContainer = document.querySelector(".container");
console.log("Elemento selecionado: ", divContainer);

// Pegar nodos filhos
let containerChilds = divContainer.childNodes
console.log("childNodes: ", containerChilds);
// Pegar primeiro filho da lista
let firstNode = divContainer.firstChild
console.log("firstNode: ", firstNode);
// Pegar o nome do nodo
let nodeName = divContainer.nodeName
console.log("nodeName: ", nodeName);

// Pegar valor (texto) do nodo
let nodeValue = divContainer.childNodes[3].firstChild.nodeValue;
console.log("nodeValue: ", nodeValue);

// Pegar o tipo do elemento 
let elementType = divContainer.nodeType // 1 - element / 2 - Attr
console.log("nodeType: ", elementType);
// Pegar o elemento "pai"
let parentElem = divContainer.parentElement
console.log("parentElement: ", parentElem);
// Pegar o primeiro elemento filho 
let firstChildElem = divContainer.firstElementChild
console.log("firstElementChild: ", firstChildElem);

// Pegar o último elemento filho
let lastChildElem = divContainer.lastElementChild
console.log("lastElementChild: ", lastChildElem);



