const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Abóbora', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'Abóbora', pricePerKg: 1.2, kg: 2 },
    { productName: 'Abóbora', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Abóbora', pricePerKg: 11.9, kg: 3 },
]

const finalSum = cart.reduce((acumulador, valorAtual) => {
    let mult = valorAtual.pricePerKg * valorAtual.kg
    const finalValue = acumulador + mult

    return finalValue
}, 0)

console.log(`Total a ser pago: ${finalSum.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})}`)