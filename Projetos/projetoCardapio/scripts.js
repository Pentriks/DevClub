const ul = document.querySelector("ul")
const allOptions = document.querySelector('.show-all')
const buttonMap = document.querySelector('.button-map')
const buttonSum = document.querySelector('.button-sum')
const buttonFilter = document.querySelector('.button-filter')

function format(value) {
    const newValue = value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    return newValue
}

function allMenu(productsArray) {
    let myLi = ''
    productsArray.forEach(elements => {
        myLi +=
            `
                    <li>
                        <img src=${elements.src}>
                        <p>${elements.name}</p>
                        <p class="item-price">${format(elements.price)}</p>
                    </li>
            `
    })
    ul.innerHTML = myLi
}

function discount() {
    const newPrices = menuOptions.map(item => ({
        ...item,
        price: item.price * 0.9,
    }))
    allMenu(newPrices)
}

function sumPrices() {
    const sumedPrices = menuOptions.reduce((acc, currentValue) => acc + currentValue.price, 0)

    ul.innerHTML = `
            <li>
                <p>O valor total: ${format(sumedPrices)}
                </p>               
            </li>
        `
}

function filterProducts() {
    const vegano = menuOptions.filter((product) => product.vegan)

    allMenu(vegano)
}

allOptions.addEventListener("click", () => allMenu(menuOptions))
buttonMap.addEventListener("click", discount)
buttonSum.addEventListener("click", sumPrices)
buttonFilter.addEventListener("click", filterProducts)