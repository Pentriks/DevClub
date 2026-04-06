// Exemplo de manipulação de elementos do DOM

// JavaScript
// Obtendo o elemento pelo ID
let elemento = document.getElementById("meuElemento");

// Alterando o conteúdo do elemento
elemento.innerHTML = "Olá, mundo! (Alterado)";

// Alterando a cor do texto do elemento
elemento.style.color = "red";

// Adicionando um evento de clique ao elemento
elemento.addEventListener("click", function() {
  console.log("O elemento foi clicado!");
});

// Adicionando um filho ao elemento
let novoElemento = document.createElement("p");
novoElemento.innerHTML = "Novo elemento adicionado!";
elemento.appendChild(novoElemento);

// Removendo um filho do elemento
let filho = elemento.firstChild;
elemento.removeChild(filio);

// Encontrando um elemento filho pelo nome da tag
let filhoPeloNome = elemento.querySelector("p");
console.log("O primeiro elemento filho com a tag 'p' é: " + filhoPeloNome.innerHTML);

// Encontrando todos os elementos filhos com a classe específica
let filhosComClasse = elemento.querySelectorAll(".minhaClasse");
console.log("Todos os elementos filhos com a classe 'minhaClasse' são: ");
for (let i = 0; i < filhosComClasse.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + filhosComClasse[i].innerHTML);
}