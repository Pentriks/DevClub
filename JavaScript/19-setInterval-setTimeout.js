let number = 0;
let timer
let h1 = document.querySelector('h1')

function start() {
    timer = setInterval(
        function () {
            number++
            h1.innerHTML = number
        }, 1000
    )
}

function stop() {
    clearInterval(timer)
}

setTimeout(
    function () {
        console.log('Executou')
    }, 3000
)