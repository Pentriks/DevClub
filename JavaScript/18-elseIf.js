// JavaScript
function exibirMensagem() {
  let numero = parseInt(document.getElementById("numero").value);

  if (numero > 0) {
    document.getElementById("mensagem").innerHTML = "O número é positivo.";
  } else if (numero < 0) {
    document.getElementById("mensagem").innerHTML = "O número é negativo.";
  } else {
    document.getElementById("mensagem").innerHTML = "O número é zero.";
  }
}