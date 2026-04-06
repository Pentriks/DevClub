// Exemplo de uso de uma abordagem alternativa para encontrar elementos pelo nome


// JavaScript
// Obtendo os elementos pelo nome
let elementos = document.querySelectorAll("[id*='elemento']");

console.log("Os elementos com o nome 'elemento' são: ");
for (let i = 0; i < elementos.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + elementos[i].innerHTML);
}

// Alterando o conteúdo de todos os elementos com o nome 'elemento'
for (let i = 0; i < elementos.length; i++) {
  elementos[i].innerHTML = "Olá, mundo! (Alterado)";
}

// Adicionando um evento de clique a todos os elementos com o nome 'elemento'
for (let i = 0; i < elementos.length; i++) {
  elementos[i].addEventListener("click", function() {
    console.log("O elemento foi clicado!");
  });
}

// Verificando se existem elementos com o nome 'elemento'
if (elementos.length > 0) {
  console.log("Existem elementos com o nome 'elemento'!");
} else {
  console.log("Não existem elementos com o nome 'elemento'!");
}