// Exemplo de uso de funções
function saudacao(nome) {
  console.log("Olá, " + nome + "!");
}

// Chamando uma função
saudacao("João");

// Função com retorno de valor
function soma(a, b) {
  return a + b;
}

let resultado = soma(2, 3);
console.log("O resultado da soma é: " + resultado);

// Função com parâmetros opcionais
function exibirDados(nome, idade, cidade) {
  if (nome) {
    console.log("Nome: " + nome);
  }
  if (idade) {
    console.log("Idade: " + idade);
  }
  if (cidade) {
    console.log("Cidade: " + cidade);
  }
}

exibirDados("João", 30, "São Paulo");
exibirDados("Maria");
exibirDados();

// Função com valor padrão para parâmetros
function exibirDadosComPadrao(nome = "Desconhecido", idade = 0, cidade = "Desconhecida") {
  console.log("Nome: " + nome);
  console.log("Idade: " + idade);
  console.log("Cidade: " + cidade);
}

exibirDadosComPadrao();
exibirDadosComPadrao("João", 30);
exibirDadosComPadrao(undefined, 30, "São Paulo");

// Função com rest
function somarNumeros(...numeros) {
  let resultado = 0;
  for (let numero of numeros) {
    resultado += numero;
  }
  return resultado;
}

let somaNumeros = somarNumeros(1, 2, 3, 4, 5);
console.log("A soma dos números é: " + somaNumeros);

// Função com arrow function
const multiplicar = (a, b) => {
  return a * b;
};

let resultadoMultiplicacao = multiplicar(2, 3);
console.log("O resultado da multiplicação é: " + resultadoMultiplicacao);

// Função com arrow function de uma linha
const quadrado = (a) => a * a;
let resultadoQuadrado = quadrado(3);
console.log("O resultado do quadrado é: " + resultadoQuadrado);

// Função com callback
function filtrarNumeros(numeros, callback) {
  let numerosFiltrados = [];
  for (let numero of numeros) {
    if (callback(numero)) {
      numerosFiltrados.push(numero);
    }
  }
  return numerosFiltrados;
}

let numeros = [1, 2, 3, 4, 5];
let numerosPares = filtrarNumeros(numeros, function(numero) {
  return numero % 2 === 0;
});
console.log("Os números pares são: " + numerosPares);

// Função com callback usando arrow function
let numerosImpares = filtrarNumeros(numeros, (numero) => numero % 2 !== 0);
console.log("Os números ímpares são: " + numerosImpares);