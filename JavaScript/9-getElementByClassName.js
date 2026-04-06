// Exemplo de uso do método getElementsByClassName


// JavaScript
// Obtendo os elementos pelo nome da classe
let elementos = document.getElementsByClassName("meuElemento");
console.log("Os elementos com a classe 'meuElemento' são: ");
for (let i = 0; i < elementos.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + elementos[i].innerHTML);
}

// Alterando o conteúdo de todos os elementos com a classe 'meuElemento'
for (let i = 0; i < elementos.length; i++) {
  elementos[i].innerHTML = "Olá, mundo! (Alterado)";
}

// Adicionando um evento de clique a todos os elementos com a classe 'meuElemento'
for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function() {
    console.log("O elemento foi clicado!");
  });
}

// Verificando se existem elementos com a classe 'meuElemento'
if (elementos.length > 0) {
  console.log("Existem elementos com a classe 'meuElemento'!");
} else {
  console.log("Não existem elementos com a classe 'meuElemento'!");
}