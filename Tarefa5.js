const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'pedra' || userInput === 'papel' || userInput === 'tesoura') {
        return userInput;
    } else return console.log('Erro')
}

function getComputerChoice() {
    const numberChoice = Math.floor(Math.random() * 3);

    let option;
    switch (numberChoice) {
        case 0:
            option = 'pedra';
            break
        case 1:
            option = 'papel';
            break
        case 2:
            option = 'tesoura';
            break
        default:
            option = 'Erro estranho';
    }
    return option
}
//console.log(getComputerChoice())

function determineWinner(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return "empate";
    } if (userChoice === 'pedra') {
        if (computerChoice === 'papel') {
            return "Computador venceu!"
        } else return "Usuário venceu!"
    } if (userChoice === 'papel') {
        if (computerChoice === 'tesoura') {
            return 'Computador venceu!'
        } else return 'Usuário venceu!'
        
    } if (userChoice === 'tesoura') {
        if (computerChoice === 'pedra') {
            return 'Computador venceu!'
        } else return 'Usuário venceu!'
    }
}
//console.log(determineWinner('pedra', 'pedra'))

const playGame = () => {
    let userChoice = getuserChoice('tesoura');
    let computerChoice = getComputerChoice()
    let result = determineWinner(userChoice,computerChoice)
    console.log(`Escolha do Usuário foi : ${userChoice}`);
    console.log(`Escolha do computador foi : ${computerChoice}`)
    console.log(`O resultado foi : ${result}`)
}  
playGame()    