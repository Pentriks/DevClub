let result = document.querySelector('.result')
const humanScore = document.querySelector('#humanScore')
const machineScore = document.querySelector('#machineScore')
const drawScore = document.querySelector('#draw-score')
const optionMachine = document.querySelector('.option-machine')
const optionHuman = document.querySelector('.option-human')
let drawScoreNumber = 0
let humanScoreNumber = 0
let machineScoreNumber = 0

const OPTIONS_GAME = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSOR: 'scissor' 
}


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [OPTIONS_GAME.ROCK, OPTIONS_GAME.PAPER, OPTIONS_GAME.SCISSOR]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
   
    optionMachine.innerHTML = machine
    optionHuman.innerHTML = human
    
    if(human === machine){
        result.innerHTML = "Draw!"
    
        drawScoreNumber++
        drawScore.innerHTML = drawScoreNumber

    } else if( (human === OPTIONS_GAME.ROCK && machine === OPTIONS_GAME.SCISSOR) || (human === OPTIONS_GAME.SCISSOR && machine === OPTIONS_GAME.PAPER) || (human === OPTIONS_GAME.PAPER && machine === OPTIONS_GAME.ROCK)){
        result.innerHTML = "You Win!!"

        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber

    } else {
        result.innerHTML = 'You lost to the Machine!!'

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
}