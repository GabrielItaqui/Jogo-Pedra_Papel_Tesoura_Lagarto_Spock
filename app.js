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
    if (randomNumber === 4) {
        computerChoice = 'Lagarto'
    }
    if (randomNumber === 5) {
        computerChoice = 'Spock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'É  um empate!!'
    }

    //Computer Pedra
    if (computerChoice === 'Pedra' && userChoice === 'Papel') {
        result = 'Papel cobre a pedra, você ganhou!!'
    }
    if (computerChoice === 'Pedra' && userChoice === 'Tesoura') {
        result = 'E como sempre foi, Pedra quebra a tesoura, você perdeu!!'
    }
    if (computerChoice === 'Pedra' && userChoice === 'Spock') {
        result = 'Spock vaporiza a pedra, você ganhou!!'
    }
    if (computerChoice === 'Pedra' && userChoice === 'Lagarto') {
        result = 'Pedra esmada lagarto, você perdeu!!'
    }
    //Papel contra
    if (computerChoice === 'Papel' && userChoice === 'Pedra') {
        result = 'Papel cobre a pedra, você perdeu!!'
    }
    if (computerChoice === 'Papel' && userChoice === 'Tesoura') {
        result = 'Tesoura corta o Papel, você ganhou!!'
    }
    if (computerChoice === 'Papel' && userChoice === 'Lagarto') {
        result = 'Lagarto come Papel, você ganhou!!'
    }
    if (computerChoice === 'Papel' && userChoice === 'Spock') {
        result = 'Papel refuta Spock, você perdeu!!'
    }
    //Tesoura contra
    if (computerChoice === 'Tesoura' && userChoice === 'Pedra') {
        result = 'Pedra quebra tesoura, você ganhou!!'
    }
    if (computerChoice === 'Tesoura' && userChoice === 'Papel') {
        result = 'Tesoura corta o Papel, você perdeu!!'
    }
    if (computerChoice === 'Tesoura' && userChoice === 'Lagarto') {
        result = 'Tesoura decapita Lagarto, você perdeu!!'
    }
    if (computerChoice === 'Tesoura' && userChoice === 'Spock') {
        result = 'Spock esmaga tesoura, você ganhou!!'
    }
    //Lagarto contra
    if (computerChoice === 'Lagarto' && userChoice === 'Pedra') {
        result = 'Pedra esmaga Lagarto, você ganhou!!'
    }
    if (computerChoice === 'Lagarto' && userChoice === 'Papel') {
        result = 'Lagarto come Papel, você perdeu!!'
    }
    if (computerChoice === 'Lagarto' && userChoice === 'Tesoura') {
        result = 'Tesoura decapita Lagarto, você ganhou!!'
    }
    if (computerChoice === 'Lagarto' && userChoice === 'Spock') {
        result = 'Lagarto envenena Spock, você perdeu!!'
    }
    //Spock conta
    if (computerChoice === 'Spock' && userChoice === 'Pedra') {
        result = 'Spock vaporiza Pedra, você perdeu!!'
    }
    if (computerChoice === 'Spock' && userChoice === 'Papel') {
        result = 'Papel refuta Spock, você ganhou!!'
    }
    if (computerChoice === 'Spock' && userChoice === 'Tesoura') {
        result = 'Spock esmaga tesoura, você perdeu!!'
    }
    if (computerChoice === 'Spock' && userChoice === 'Lagarto') {
        result = 'Lagarto envenena Spock, você ganhou!!'
    }
    
    resultDisplay.innerHTML =  result
}
