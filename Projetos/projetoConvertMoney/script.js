const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select") // PARA
const currencySelectOf = document.querySelector(".currency-select-of") // DE

const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
const currencyValueConverted = document.querySelector(".currency-value")

const currencyName = document.getElementById("currency-name")
const currencyImage = document.querySelector(".currency-img")


// valores das moedas em relação ao REAL
const currencies = {
    BRL: 1,
    USD: 5,
    EUR: 5.8,
    GBP: 6.7,
    BTC: 312000
}

// formatação
const formats = {
    BRL: ["pt-BR", "BRL"],
    USD: ["en-US", "USD"],
    EUR: ["de-DE", "EUR"],
    GBP: ["en-GB", "GBP"]
}

// nomes
const names = {
    BRL: "Real",
    USD: "Dólar",
    EUR: "Euro",
    GBP: "Libra",
    BTC: "Bitcoin"
}

// imagens
const images = {
    BRL: "./assets/brasil.png",
    USD: "./assets/usa.png",
    EUR: "./assets/euro.png",
    GBP: "./assets/libra.png",
    BTC: "./assets/bitcoin.png"
}

// função principal
function convertValues(){
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value)

    const from = currencySelectOf.value
    const to = currencySelect.value

    // 1. converter para REAL
    const valueInBRL = inputCurrencyValue * currencies[from]

    // 2. converter para moeda final
    const finalValue = valueInBRL / currencies[to]

    // valor de origem
    if(from == "BTC"){
        currencyValueToConvert.innerHTML = `₿ ${inputCurrencyValue.toFixed(6)}`
    } else {
        const [localeFrom, currencyFrom] = formats[from]
        currencyValueToConvert.innerHTML = new Intl.NumberFormat(localeFrom, {
            style: "currency",
            currency: currencyFrom
        }).format(inputCurrencyValue)
    }

    // valor convertido
    if(to == "BTC"){
        currencyValueConverted.innerHTML = `₿ ${finalValue.toFixed(6)}`
    } else {
        const [localeTo, currencyTo] = formats[to]
        currencyValueConverted.innerHTML = new Intl.NumberFormat(localeTo, {
            style: "currency",
            currency: currencyTo
        }).format(finalValue)
    }

    // nome
    currencyName.innerHTML = names[to]

    // imagem
    currencyImage.src = images[to]
}

function changeCurrency(){

    if (currencySelect.value == "USD"){
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/usa.png"
    } 

    if (currencySelect.value == "EUR"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    } 
    
    if (currencySelect.value == "GBP"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }
    if (currencySelect.value == "BTC"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }

    convertValues()
}

function changeCurrencyOf(){
    const currencyNameOf = document.querySelector(".currency-name-of")
    const currencyImageOf = document.querySelector(".currency-img-of")

    if (currencySelectOf.value == "USD"){
        currencyNameOf.innerHTML = "Dólar"
        currencyImageOf.src = "./assets/usa.png"
    }
    if (currencySelectOf.value == "EUR"){
        currencyNameOf.innerHTML = "Euro"
        currencyImageOf.src = "./assets/euro.png"
    } 
    if (currencySelectOf.value == "GBP"){
        currencyNameOf.innerHTML = "Libra"
        currencyImageOf.src = "./assets/libra.png"
    }
    if (currencySelectOf.value == "BTC"){
        currencyNameOf.innerHTML = "Bitcoin"
        currencyImageOf.src = "./assets/bitcoin.png"
    }
    if (currencySelectOf.value == "BRL"){
        currencyNameOf.innerHTML = "Real"
        currencyImageOf.src = "./assets/brasil.png"
    }

    convertValues()
}

// eventos
convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", convertValues)
currencySelectOf.addEventListener("change", changeCurrencyOf)