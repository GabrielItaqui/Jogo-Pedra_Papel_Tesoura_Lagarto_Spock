const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length +1)
    
    if (randomNumber === 1) {
        computerChoice = 'Pedra'
    }
    if (randomNumber === 2) {
        computerChoice = 'Tesoura'
    }
    if (randomNumber === 3) {
        computerChoice = 'Papel'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'É  um empate!!'
    }
    if (computerChoice === 'Pedra' && userChoice === 'Papel') {
        result = 'Papel cobre a pedra, você ganhou!!'
    }
    if (computerChoice === 'Papel' && userChoice === 'Pedra') {
        result = 'Papel cobre a pedra, você ganhou!!'
    }
    if (computerChoice === 'Pedra' && userChoice === 'Tesoura') {
        result = 'Pedra quebra tesoura, você perdeu!!'
    }
    if (computerChoice === 'Tesoura' && userChoice === 'Pedra') {
        result = 'Pedra quebra tesoura, você ganhou!!'
    }
    if (computerChoice === 'Tesousa' && userChoice === 'Papel') {
        result = 'Tesoura corta papel, você perdeu!!'
    }
    if (computerChoice === 'Papel' && userChoice === 'Tesoura') {
        result = 'Tesoura corta papel, você ganhou!!'
    }

    resultDisplay.innerHTML =  result
}
