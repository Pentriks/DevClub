// Exemplo de uso do método querySelector

// JavaScript
// Obtendo o primeiro elemento que corresponde ao seletor
let elemento = document.querySelector("#meuElemento");
console.log("O elemento que corresponde ao seletor '#meuElemento' é: " + elemento.innerHTML);

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