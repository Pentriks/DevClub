const list = [1,2,3,4,5,6,7]

const sum = list.reduce((acumulador, valorAtual) => {
    const acc = acumulador + valorAtual
    console.log(`acc: ${acumulador}    Valor Atual: ${valorAtual} `)
    return acc
})

console.log(sum)

