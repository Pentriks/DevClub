// Declaração de variáveis
let nome = "João"; // Variável do tipo string
const idade = 30; // Variável do tipo number (constante)
let estaChovendo = true; // Variável do tipo boolean

// Atribuição de valores a variáveis
nome = "Maria"; // Alterando o valor da variável "nome"
idade = 35; // Tentando alterar o valor da variável "idade" (não será permitido, pois é uma constante)

// Exemplo de uso de variáveis
console.log("Olá, meu nome é " + nome + " e tenho " + idade + " anos."); // Imprimindo uma mensagem no console

// Variáveis locais e globais
function exibirNome() {
  let nome = "Ana"; // Variável local
  console.log("O nome é: " + nome); // Imprimindo o nome na função
}

exibirNome(); // Chamando a função para exibir o nome

console.log("O nome é: " + nome); // Tentei acessar a variável "nome" fora da função, mas não consigo (é uma variável local)

let globalNome = "Pedro"; // Variável global
function exibirGlobalNome() {
  console.log("O nome é: " + globalNome); // Acessando a variável global dentro da função
}

exibirGlobalNome(); // Chamando a função para exibir o nome global

console.log("O nome global é: " + globalNome); // Acessando a variável global fora da função

// Variáveis de escopo
function exibirIdade() {
  let idade = 25; // Variável local
  console.log("A idade é: " + idade); // Imprimindo a idade na função
}

console.log("A idade é: " + idade); // Tentei acessar a variável "idade" fora da função, mas não consigo (é uma variável local)

function exibirIdadeGlobal() {
  let idadeGlobal = 40; // Variável local
  console.log("A idade global é: " + idadeGlobal); // Imprimindo a idade global na função
}

exibirIdadeGlobal(); // Chamando a função para exibir a idade global

console.log("A idade global é: " + idadeGlobal); // Tentei acessar a variável "idadeGlobal" fora da função, mas não consigo (é uma variável local)
