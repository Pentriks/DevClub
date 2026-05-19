function exibirMensagem() {
  let numero = parseInt(document.getElementById("numero").value);

  switch (numero) {
    case 1:
      document.getElementById("mensagem").innerHTML = "O número é 1.";
      break;
    case 2:
      document.getElementById("mensagem").innerHTML = "O número é 2.";
      break;
    case 3:
      document.getElementById("mensagem").innerHTML = "O número é 3.";
      break;
    default:
      document.getElementById("mensagem").innerHTML = "Número inválido.";
  }
}