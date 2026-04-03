// Exemplo de string
let nome = "João"; // Variável do tipo string

// Exemplo de uso de string
console.log("Olá, meu nome é " + nome + "!"); // Imprimindo uma mensagem no console

// Métodos de string
let frase = "Olá, mundo!";

// Obtendo o comprimento da string
console.log("O comprimento da frase é: " + frase.length); // Imprimindo o comprimento da string

// Obtendo uma parte da string
console.log("A parte da frase de índice 0 a 4 é: " + frase.substring(0, 5)); // Imprimindo uma parte da string

// Convertendo a string para letras maiúsculas
console.log("A frase em letras maiúsculas é: " + frase.toUpperCase()); // Imprimindo a frase em letras maiúsculas

// Convertendo a string para letras minúsculas
console.log("A frase em letras minúsculas é: " + frase.toLowerCase()); // Imprimindo a frase em letras minúsculas

// Verificando se a string contém uma determinada palavra
console.log("A frase contém a palavra 'mundo'?: " + frase.includes("mundo")); // Verificando se a frase contém a palavra "mundo"

// Substituindo uma parte da string por outra
console.log("A frase com a palavra 'mundo' substituída por 'tudo' é: " + frase.replace("mundo", "tudo")); // Substituindo a palavra "mundo" pela palavra "tudo" na frase

// Concatenando strings
let nome2 = "Maria";
let idade = 30;
console.log("Olá, meu nome é " + nome2 + " e tenho " + idade + " anos."); // Imprimindo uma mensagem concatenada

// Template literals (template strings)
let nome3 = "Pedro";
let idade2 = 25;
console.log(`Olá, meu nome é ${nome3} e tenho ${idade2} anos.`); // Imprimindo uma mensagem usando template literals

// Outros métodos de string:
// - charAt(index): retorna o caractere na posição especificada
// - indexOf(searchValue): retorna o índice do primeiro caractere que corresponde à pesquisa
// - lastIndexOf(searchValue): retorna o índice do último caractere que corresponde à pesquisa
// - split(separator): divide a string em um array de strings com base no separador especificado
// - trim(): remove os espaços em branco no início e no final da string
// - slice(start, end): retorna uma parte da string, do índice start até o índice end (exclusivo)
// - replace(searchValue, replacement): substitui todas as ocorrências da pesquisa pelo valor de substituição

// Exemplo de uso de números em variáveis
let numero1 = 5;
let numero2 = 10;

// Adição de números
let soma = numero1 + numero2;
console.log("A soma de " + numero1 + " e " + numero2 + " é: " + soma);

// Subtração de números
let subtracao = numero2 - numero1;
console.log("A subtração de " + numero2 + " por " + numero1 + " é: " + subtracao);

// Multiplicação de números
let multiplicacao = numero1 * numero2;
console.log("A multiplicação de " + numero1 + " por " + numero2 + " é: " + multiplicacao);

// Divisão de números
let divisao = numero2 / numero2;
console.log("A divisão de " + numero2 + " por " + numero1 + " é: " + divisao);

// Resto da divisão de números
let resto = numero2 % numero1;
console.log("O resto da divisão de " + numero2 + " por " + numero1 + " é: " + resto);

// Potenciação de números
let potencia = numero2 ** numero1;
console.log("A potência de " + numero2 + " elevado a " + numero1 + " é: " + potencia);

// Raiz quadrada de um número
let raizQuadrada = Math.sqrt(numero2);
console.log("A raiz quadrada de " + numero2 + " é: " + raizQuadrada);

// Redondamento de um número
let numero3 = 3.7;
let arredondado = Math.round(numero3);
console.log("O número " + numero3 + " arredondado é: " + arredondado);

// Redondeamento para baixo de um número
let arredondamentoParaBaixo = Math.floor(numero3);
console.log("O número " + numero3 + " arredondado para baixo é: " + arredondamentoParaBaixo);

// Redondeamento para cima de um número
let arredondamentoParaCima = Math.ceil(numero3);
console.log("O número " + numero3 + " arredondado para cima é: " + arredondamentoParaCima);

// Verificar se um número é par ou ímpar
let numero4 = 6;
console.log("O número " + numero4 + " é " + (numero4 % 2 === 0 ? "par" : "ímpar"));

// Verificar se um número é positivo, negativo ou zero
let numero5 = -2;
console.log("O número " + numero5 + " é " + (numero5 > 0 ? "positivo" : numero5 < 0 ? "negativo" : "zero"));

// Verificar se um número é primo
let numero6 = 7;
let primo = true;
for (let i = 2; i < numero6; i++) {
  if (numero6 % i === 0) {
    primo = false;
    break;
  }
}
console.log("O número " + numero6 + " é " + (primo ? "primo" : "não primo"));

// Exemplo de uso de valores booleanos em variáveis
let estaChovendo = true;
let estaFrio = false;

// Operadores lógicos
console.log("A expressão 'estaChovendo && estaFrio' é: " + (estaChovendo && estaFrio)); // Operador lógico AND
console.log("A expressão 'estaChovendo || estaFrio' é: " + (estaChovendo || estaFrio)); // Operador lógico OR
console.log("A expressão '!estaChovendo' é: " + (!estaChovendo)); // Operador lógico NOT

// Condicionais
if (estaChovendo) {
  console.log("Hoje está chovendo.");
} else {
  console.log("Hoje não está chovendo.");
}

// Loop com condicional
let i = 0;
while (i < 10) {
  if (estaChovendo) {
    console.log("Está chovendo. Continuando o loop.");
    i++;
  } else {
    console.log("Não está chovendo. Interrompendo o loop.");
    break;
  }
}

// Funções com condicionais
function verificarChuva() {
  if (estaChovendo) {
    console.log("Hoje está chovendo.");
  } else {
    console.log("Hoje não está chovendo.");
  }
}

verificarChuva();

// Funções com loops e condicionais
function contarDiasChuva() {
  let contador = 0;
  for (let dia = 1; dia <= 30; dia++) {
    if (estaChovendo) {
      console.log("Dia " + dia + ": Está chovendo.");
      contador++;
    } else {
      console.log("Dia " + dia + ": Não está chovendo.");
    }
  }
  console.log("Foram " + contador + " dias com chuva.");
}

contarDiasChuva();

// Exemplo de uso de objetos
let pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
  saudacao: function() {
    console.log("Olá, meu nome é " + this.nome + "!");
  },
  idadeEmAnos: function() {
    return this.idade;
  },
  idadeEmMeses: function() {
    return this.idade * 12;
  },
  idadeEmDias: function() {
    return this.idade * 365;
  },
  isMaiorDeIdade: function() {
    return this.idade >= 18;
  }
};

// Acessando propriedades de um objeto
console.log("Nome da pessoa: " + pessoa.nome);
console.log("Idade da pessoa: " + pessoa.idade);
console.log("Cidade da pessoa: " + pessoa.cidade);

// Chamando métodos de um objeto
pessoa.saudacao();
console.log("A idade da pessoa em anos é: " + pessoa.idadeEmAnos());
console.log("A idade da pessoa em meses é: " + pessoa.idadeEmMeses());
console.log("A idade da pessoa em dias é: " + pessoa.idadeEmDias());
console.log("A pessoa é maior de idade?: " + pessoa.isMaiorDeIdade());

// Adicionando propriedades a um objeto
pessoa.endereco = {
  rua: "Avenida Principal",
  numero: 123
};

// Modificando propriedades de um objeto
pessoa.idade = 31;
pessoa.cidade = "Rio de Janeiro";

// Removendo propriedades de um objeto
delete pessoa.cidade;

// Iterando sobre as propriedades de um objeto
for (let propriedade in pessoa) {
  console.log(propriedade + ": " + pessoa[propriedade]);
}

// Iterando sobre as chaves de um objeto
for (let chave in pessoa) {
  console.log(chave);
}

// Iterando sobre as chaves e valores de um objeto
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}

// Iterando sobre as propriedades de um objeto usando Object.keys
Object.keys(pessoa).forEach(function(chave) {
  console.log(chave + ": " + pessoa[chave]);
});

// Iterando sobre as propriedades de um objeto usando Object.entries
Object.entries(pessoa).forEach(function([chave, valor]) {
  console.log(chave + ": " + valor);
});

// Exemplo de uso de null e undefined
let variavelNula = null;
let variavelNaoDefinida = undefined;

console.log("Valor da variável nula: " + variavelNula);
console.log("Valor da variável não definida: " + variavelNaoDefinida);