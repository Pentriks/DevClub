function generateNumber (){
    const min = Math.ceil(document.getElementById("min").value);
    const max = Math.floor(document.getElementById("max").value);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    alert("O número sorteado foi: " + randomNumber);
}