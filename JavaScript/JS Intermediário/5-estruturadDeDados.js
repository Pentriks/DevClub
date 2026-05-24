/* 
Estrutura de dados é uma forma de organizar e armazenar dados de maneira eficiente para que possam ser acessados e manipulados de forma eficaz. Existem vários tipos de estruturas de dados, cada uma com suas próprias características e usos específicos. Alguns exemplos comuns incluem:

1. Arrays: Uma coleção de elementos ordenados, onde cada elemento é identificado por um índice. Arrays são úteis para armazenar listas de itens e acessar elementos rapidamente.
2. Objetos: Uma coleção de pares chave-valor, onde cada chave identifica um atributo do objeto. Objetos podem ser usados para representar objetos reais, como pessoas, produtos ou configurações.
3. Mapas: Uma coleção de pares chave-valor, onde cada chave identifica um atributo do objeto. Os mapas podem ser usados para representar objetos reais, como pessoas, produtos ou configurações.
4. Conjuntos: Uma coleção de elementos únicos, onde cada elemento pode aparecer apenas uma vez. Conjuntos são úteis para armazenar itens sem duplicatas e realizar operações de conjunto, como união e interseção.
5. Listas Ligadas: Uma coleção de elementos onde cada elemento aponta para o próximo, formando uma cadeia. Listas ligadas são úteis para inserções e remoções eficientes, mas podem ser menos eficientes para acesso aleatório.
6. Pilhas: Uma coleção de elementos onde o último elemento adicionado é o primeiro a ser removido (LIFO - Last In, First Out). Pilhas são úteis para armazenar dados temporários e realizar operações de backtracking.
7. Filas: Uma coleção de elementos onde o primeiro elemento adicionado é o primeiro a ser removido (FIFO - First In, First Out). Filas são úteis para gerenciar tarefas em ordem de chegada.
Cada estrutura de dados tem suas próprias vantagens e desvantagens, e a escolha da estrutura de dados correta depende do tipo de problema que você está tentando resolver e das operações que você precisa realizar com os dados.
*/

// Exemplo de uso de arrays
let numeros = [1, 2, 3, 4, 5]; // Array com números
let frutas = ["banana", "maçã", "laranja"]; // Array com strings
let pessoas = [{nome: "João", idade: 30}, {nome: "Maria", idade: 25}]; // Array com objetos

// Acessando elementos de um array
console.log("O primeiro elemento do array 'numeros' é: " + numeros[0]);
console.log("O último elemento do array 'frutas' é: " + frutas[frutas.length - 1]);
console.log("O segundo elemento do array 'pessoas' é: " + JSON.stringify(pessoas[1]));

// Adicionando elementos a um array
numeros.push(6); // Adicionando um número ao final do array
frutas.unshift("abacaxi"); // Adicionando uma fruta no início do array
pessoas.push({nome: "Pedro", idade: 35}); // Adicionando um objeto ao final do array

// Removendo elementos de um array
numeros.pop(); // Removendo o último elemento do array
frutas.pop(); // Removendo o último elemento do array
pessoas.pop(); // Removendo o último elemento do array

// Iterando sobre os elementos de um array
for (let i = 0; i < numeros.length; i++) {
  console.log("Elemento " + (i + 1) + ": " + numeros[i]);
}

// Iterando sobre os elementos de um array usando o método forEach
numeros.forEach(function(numero) {
  console.log("Elemento: " + numero);
});

// Iterando sobre os elementos de um array usando o método map
let numerosDobrados = numeros.map(function(numero) {
  return numero * 2;
});
console.log("Os números dobrados são: " + numerosDobrados);

// Iterando sobre os elementos de um array usando o método filter
let numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});
console.log("Os números pares são: " + numerosPares);

// Iterando sobre os elementos de um array usando o método reduce
let somaNumeros = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0);
console.log("A soma dos números é: " + somaNumeros);

// Verificando se um elemento existe em um array
console.log("A fruta 'laranja' existe no array 'frutas'?: " + frutas.includes("laranja"));

// Encontrando o índice de um elemento em um array
console.log("O índice da fruta 'laranja' no array 'frutas' é: " + frutas.indexOf("laranja"));

// Ordenando um array
numeros.sort(function(a, b) {
  return a - b;
});
console.log("Os números ordenados em ordem crescente são: " + numeros);

// Invertendo um array
let numerosInvertidos = numeros.reverse();
console.log("Os números invertidos são: " + numerosInvertidos);

// Transformando um array em uma string
let frutasString = frutas.join(", ");
console.log("As frutas como uma string são: " + frutasString);

// Verificando se um array está vazio
console.log("O array 'numeros' está vazio?: " + numeros.length === 0);

// Removendo elementos duplicados de um array
let numerosUnicos = [...new Set(numeros)];
console.log("Os números únicos são: " + numerosUnicos);