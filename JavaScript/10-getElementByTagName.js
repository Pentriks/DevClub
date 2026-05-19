// Exemplo de uso do método getElementsByTagName


// JavaScript
// Obtendo os elementos pelo nome da tag
let elementos = document.getElementsByTagName("p");
console.log("Os elementos com a tag 'p' são: ");
for (let i = 0; i < elementos.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + elementos[i].innerHTML);
}

// Alterando o conteúdo de todos os elementos com a tag 'p'
for (let i = 0; i < elementos.length; i++) {
  elementos[i].innerHTML = "Olá, mundo! (Alterado)";
}

// Adicionando um evento de clique a todos os elementos com a tag 'p'
for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function() {
    console.log("O elemento foi clicado!");
  });
}

// Verificando se existem elementos com a tag 'p'
if (elementos.length > 0) {
  console.log("Existem elementos com a tag 'p'!");
} else {
  console.log("Não existem elementos com a tag 'p'!");
}