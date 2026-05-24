// Exemplo de uso de if e else
let idade = 25;

// Verificando se a idade é maior ou igual a 18
if (idade >= 18) {
  console.log("A pessoa é maior de idade.");
} else {
  console.log("A pessoa é menor de idade.");
}

// Verificando se a idade é maior ou igual a 65
if (idade >= 65) {
  console.log("A pessoa é idosa.");
} else {
  // Verificando se a idade é maior ou igual a 18
  if (idade >= 18) {
    console.log("A pessoa é adulta.");
  } else {
    console.log("A pessoa é adolescente.");
  }
}

// Verificando se a idade é maior ou igual a 18 ou se é uma string
if (typeof idade === "number" && idade >= 18 || typeof idade === "string") {
  console.log("A pessoa é maior de idade ou é uma string.");
} else {
  console.log("A pessoa não é maior de idade e não é uma string.");
}

// Verificando se a idade é maior ou igual a 18 ou se é uma string usando else if
if (typeof idade === "number" && idade >= 18) {
  console.log("A pessoa é maior de idade.");
} else if (typeof idade === "string") {
  console.log("A pessoa é uma string.");
} else {
  console.log("A pessoa não é maior de idade e não é uma string.");
}

// Verificando se a idade é maior ou igual a 18 ou se é uma string usando switch
switch (true) {
  case idade >= 18:
    console.log("A pessoa é maior de idade.");
    break;
  case typeof idade === "string":
    console.log("A pessoa é uma string.");
    break;
  default:
    console.log("A pessoa não é maior de idade e não é uma string.");
    break;
}