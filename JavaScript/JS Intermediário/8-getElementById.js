// Exemplo de uso do método getElementById
// HTML
// <div id="meuElemento">Olá, mundo!</div>

// JavaScript
// Obtendo o elemento pelo ID
let elemento = document.getElementById("meuElemento");
console.log("O elemento com ID 'meuElemento' é: " + elemento);

// Alterando o conteúdo do elemento
elemento.innerHTML = "Olá, mundo! (Alterado)";

// Alterando a cor do texto do elemento
elemento.style.color = "red";

// Adicionando um evento de clique ao elemento
elemento.addEventListener("click", function() {
  console.log("O elemento foi clicado!");
});

// Verificando se o elemento existe
if (elemento) {
  console.log("O elemento existe!");
} else {
  console.log("O elemento não existe!");
}