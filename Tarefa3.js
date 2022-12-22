//1
const userName = 'Lucas Rubens';
// Expressáo ternaria
// A ? B : C
userName ? console.log(`Olá ${userName}!`) : console.log('Olá!')

// Pergunta que deve ser respondida
const userQuestion = " Eu ficarei rico em 2023?"
//3

const perguntaCompleta = userName ? `${userName} está perguntando: ${userQuestion}`
    : `Usuário anônimo está perguntando: ${userQuestion}`

console.log(perguntaCompleta);
console.log(userQuestion);

// Gerando um valor aleatorio
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);

//6
let eightBall = "";

//7 
// switch (randomNumber) {
//     case 0: {
//         eightBall = 'É uma certeza!';
//         break;
//     }
//     case 1: {
//         eightBall = 'É decididamente sim.';
//         break;
//     }
//     case 2: {
//         eightBall = 'Resposta nebulosa, tente de novo';
//         break;
//     }
//     case 3: {
//         eightBall = 'Não consigo prever agora.';
//         break;
//     }
//     case 4: {
//         eightBall = 'Não conte com isso.';
//         break;
//     }
//     case 5: {
//         eightBall = 'Minhas fontes dizem que não.';
//         break;
//     }
//     case 6: {
//         eightBall = 'Perspectiva não tão boa';
//         break;
//     }
//     case 7: {
//         eightBall = 'Os sinais apontam que sim';
//         break;
//     }
//     default: {
//         eightBall = 'Sei lá, poha'
//     }
// }

if (randomNumber === 0) {
    eightBall = 'É uma certeza!';
} else if (randomNumber === 1) {
    eightBall = 'É decididamente sim.';
} else if (randomNumber === 2) {
    eightBall = 'Resposta nebulosa, tente de novo';
} else if (randomNumber === 3) {
    eightBall = 'Não consigo prever agora.';
} else if (randomNumber === 4) {
    eightBall = 'Não conte com isso.';
} else if (randomNumber === 5) {
    eightBall = 'Minhas fontes dizem que não.!';
} else if (randomNumber === 6) {
    eightBall = 'Perspectiva não tão boa';
} else if (randomNumber === 7) {
    eightBall = 'Os sinais apontam que sim';
} else (
    eightBall = "Se lá, irmão"
)



console.log(eightBall)