// Exemplo de uso de template literals
let nome = "João";
let idade = 30;

// Concatenando strings com template literals
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos.`); // Imprimindo uma mensagem concatenada usando template literals

// Adicionando espaços e quebras de linha com template literals
console.log(`Olá, ${nome}!
Tenho ${idade} anos.
Vou completar ${idade + 10} anos em breve.`); // Imprimindo uma mensagem com espaços e quebras de linha usando template literals

// Adicionando expressões matemáticas com template literals
let resultado = 2 + 3;
console.log(`2 + 3 = ${resultado}`); // Imprimindo uma expressão matemática usando template literals

// Adicionando variáveis e expressões com template literals
let valorDoProduto = 10.99;
let quantidade = 3;
console.log(`O valor total do produto é: R$${valorDoProduto * quantidade}`); // Imprimindo um valor calculado usando template literals

// Adicionando métodos de string com template literals
let frase = "Olá, mundo!";
console.log(`A frase em letras maiúsculas é: ${frase.toUpperCase()}`); // Imprimindo uma frase com um método de string usando template literals

// Adicionando condicionais com template literals
let estaChovendo = true;
console.log(`Hoje está ${estaChovendo ? 'chovendo' : 'não está chovendo'}.`); // Imprimindo uma mensagem com uma condicional usando template literals

// Adicionando loops com template literals
let numeros = [1, 2, 3, 4, 5];
console.log(`Os números são: ${numeros.map(n => n * 2).join(', ')}`); // Imprimindo uma lista de números multiplicados por 2 usando template literals e map()

// Outras possibilidades com template literals:
// - Adicionar objetos com template literals
// - Adicionar arrays com template literals
// - Adicionar funções com template literals
// - Adicionar comentários com template literals

