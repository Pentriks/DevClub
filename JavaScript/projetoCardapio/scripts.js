const ul = document.querySelector("ul")
let myLi = ''
const allOptions = document.querySelector('.show-all')

function allMenu() {
    menuOptions.forEach(elements => {
        myLi += 
                `
                    <li>
                        <img src=${elements.src}>
                        <p>${elements.name}</p>
                        <p class="item-price">${elements.price}</p>
                    </li>
                `
    })
    ul.innerHTML = myLi 
}

allOptions.addEventListener("click", allMenu)