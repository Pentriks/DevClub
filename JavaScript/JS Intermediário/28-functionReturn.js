const cart = [10,244,99,2,20,33,250]
let finalValueWithDiscount = 0
let finalValue = 0

function calcDiscount(price, discount) {
    const result = (price * discount) / 100
    return result
}

cart.forEach(value => {
    if(value > 30){
        const discount = calcDiscount(value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discount)
    } else {
        finalValueWithDiscount += value
    }
});

cart.forEach(element => {
    finalValue = finalValue + element
});


console.log(`O valor final da compra com desconto foi de: R$ ${finalValueWithDiscount.toFixed(2)}, e o valor total sem o desconto foi de: R$ ${finalValue}, e o desconto foi de: R$ ${finalValue - finalValueWithDiscount.toFixed(2)}`)