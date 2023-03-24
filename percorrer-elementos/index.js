// Selecionar elementos
let container = document.querySelector(".container");
console.log("Elementos selecionados: ", container);

// Pegar nodos filhos
let containerChilds = container.childNodes;
console.log("childNodes: ", containerChilds);

// Pegar primeiro filho da lista
let firstNode = container.firstChild;
console.log("firstChild: ", firstNode);
// Pegar o nome do nodo
let tagName = container.nodeName;
console.log("nodeName: ", tagName);

// Pegar valor (texto) do nodo
let nodeValue = container.childNodes[3].firstChild.nodeValue;
console.log("nodeValue", nodeValue)

// Pegar o tipo do elemento 
let eleType = container.nodeType;
console.log("nodeType: ", eleType); // 1 - Element / 2 - Attr

// Pegar o elemento "pai"
let parentEle = container.parentElement;
console.log("parentElement: ", parentEle);

// Pegar o primeiro elemento filho 
let firstChildElement = container.firstElementChild;
console.log("firstElementChild: ", firstChildElement);

// Pegar o último elemento filho
let lastChildElement = container.lastElementChild;
console.log("lastElementChild: ", lastChildElement);
