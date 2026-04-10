let select = document.querySelector(".select")
let input = document.querySelector(".input")
let button = document.querySelector(".button")
let paragraph = document.querySelector("p")

button.addEventListener("click", function(){
    paragraph.textContent = select.value
})