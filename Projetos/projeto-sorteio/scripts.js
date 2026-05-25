const drawButton = document.querySelector(".button-draw")
const result = document.querySelector(".result")

function drawnNumber() {
    const startingNumber = Number(document.querySelector(".starting-number").value)
    const endNumber = Number(document.querySelector(".end-number").value)

    result.textContent = Math.floor(Math.random() * (endNumber - startingNumber + 1)) + startingNumber;

    if (startingNumber == "" && endNumber == "") {
        result.textContent = "Digite os valores"
    }
}

drawButton.addEventListener("click", drawnNumber)