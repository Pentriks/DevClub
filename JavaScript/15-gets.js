// Exemplo de uso de vários métodos de seleção de elementos

// JavaScript
// Obtendo o elemento pelo ID
let elementoId = document.getElementById("meuElemento");
console.log("O elemento com ID 'meuElemento' é: " + elementoId.innerHTML);

// Obtendo os elementos pela classe
let elementosClasse = document.getElementsByClassName("meuElemento");
console.log("Os elementos com a classe 'meuElemento' são: ");
for (let i = 0; i < elementosClasse.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + elementosClasse[i].innerHTML);
}

// Obtendo os elementos pela tag
let elementosTag = document.getElementsByTagName("div");
console.log("Os elementos com a tag 'div' são: ");
for (let i = 0; i < elementosTag.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + elementosTag[i].innerHTML);
}

// Obtendo o primeiro elemento que corresponde ao seletor
let primeiroElemento = document.querySelector("#meuElemento");
console.log("O primeiro elemento que corresponde ao seletor '#meuElemento' é: " + primeiroElemento.innerHTML);

// Obtendo todos os elementos que correspondem ao seletor
let todosElementos = document.querySelectorAll(".meuElemento");
console.log("Todos os elementos que correspondem ao seletor '.meuElemento' são: ");
for (let i = 0; i < todosElementos.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + todosElementos[i].innerHTML);
}