let input = document.querySelector("input")
let p = document.querySelector("p")

function ParImp(valor){
   if(valor % 2 == 0) {
    return 'Numero Par'
   } else {
    return 'Numero Impar'
   }
}

function testar() {
   let valor = Number(input.value)

   if (input.value === "") {
      p.textContent = "Digite um número"
      return
   }

   p.textContent = ParImp(valor)
}
