const button = document.querySelector(".convert-button")
const valueToConvert = document.querySelector(".value-to-convert")
const valueConverted = document.querySelector(".weight-value")
const libraToday = 2.2
const select = document.querySelector(".select-main-1")
const selectConverted = document.querySelector(".select-main")
const weightName = document.querySelector(".weight-name")
const imgToConvert = document.querySelector(".weight-img")
const weightNameConverted = document.querySelector(".weight-name-converted")
const imgConverted = document.querySelector(".weight-img-converted")


function convertValue() {
    const inputValue = document.querySelector(".input-main").value
    
    if (inputValue === "") return

    const input = Number(inputValue)

    let result

    if (select.value === 'KL' && selectConverted.value === 'LB') {
        result = input * 2.2
    } else if (select.value === 'LB' && selectConverted.value === 'KL') {
        result = input / 2.2
    } else {
        result = input
    }

    valueToConvert.innerHTML = input
    valueConverted.innerHTML = result.toFixed(2)
}

function changeValues() {
    if(select.value == 'LB'){
        weightName.innerHTML = 'Libra'
        imgToConvert.src = './assets/libra.jpg'
    }
    if(select.value == 'KL') {
        weightName.innerHTML = 'Kilo'
        imgToConvert.src = './assets/kilo.jpg'
    }
   
    if(selectConverted.value == 'LB') {
        weightNameConverted.innerHTML = 'Libra'
        imgConverted.src = './assets/libra.jpg'
    }
     if(selectConverted.value == 'KL') {
        weightNameConverted.innerHTML = 'Kilo'
        imgConverted.src = './assets/kilo.jpg'
    }
}

selectConverted.addEventListener("change", () => {
    changeValues()
    convertValue()
})
select.addEventListener("change", () => {
    changeValues()
    convertValues()
})
button.addEventListener("click" , convertValue)



