/**
 * 1 - Escreva uma função, digaOi(). Sua função não deve ter parâmetros e retornar a string 'Oi, Mundo'.
 * 
 * 2 - A idade mínima mais comum para votar é 18 anos.
 * Escreva uma função possoVotar() que receba um número, representando a
 * idade da pessoa, e retorne o booleano true se ela tiver 18 anos ou 
 * mais e o booleano false se não tiver. 
 * 
 * 3 - Escreva uma função, concordoDiscordo(), que receba duas strings e
 * retorne 'Vocês concordam!'se as duas strings forem iguais e 'Vocês discordam' se
 * forem diferentes.
 * 
 * 4 - Escreva uma função, faseDaVida(), que receba a idade de uma pessoa como um número,
 * e retorne em qual fase da vida ela está.
        Aqui estão as classificações:
        0-3 deve retornar 'bebe'
        4-12 deve retornar 'criança'
        13-19 deve retornar 'adolescente'
        20-64 deve retornar 'adulto'
        65-140 deve retornar 'idoso'
        Se o número for menor que 0 ou maior que 140,
        o programa deve retornar 'Esta não pe uma idade válida'
    5 - Escreva uma função, notaFinal(). 
    Deve:
        -> pegue três argumentos do tipo número
        -> encontre a média desses três números
        -> retornar a nota da letra (como uma string) que a média corresponde
        -> retornar 'Você digitou uma nota inválida.' se qualquer uma das três notas for menor
        que 0 ou maior que 100
        0-59 deve retornar: 'F'
        60-69 deve retornar: 'D'
        70-79 deve retornar: 'C'
        80-89 deve retornar: 'B'
        90-100 deve retornar:'A'
6 - Escreva uma função, seApresente(), que tenha dois parâmetros de string, patente e ultimoNome,
e retorne uma string no seguinte formato: 'patente ultimoNome se apresentando para o serviço!'
 */
// Primeira Missão 1
function digaOi() {
    return 'Oi, mundo'
}
console.log(digaOi())

/*outra maneira de fazer o primerio
const digaOi = function () => {'Oi, mundo'}*/

// Segunda Missão 2
function possoVotar(idade) {

    if (idade >= 18) {
        return true;

    } else {
        return false;
    }

}

console.log(possoVotar(18))
/* outra maneira 
 const possoVotar = idade => idade >= 18 ? true : false */ 

// Terceira Missão 3

function concordoDiscordo(usuario1 = 'sim', usuario2 = 'não') {
    
    if (usuario1 === usuario2) {
        return "Vocês Concordam!";
    } else {
        return "Vocês discordam!"
    }
}
console.log(concordoDiscordo('', ''))

/* outra forma de fazer a tarefa 3 
 const concordoDiscordo = (usuario1, usuario2) => { return usuario1 === usuario2 ? 'voces concordam' : 'voces discordam' }
*/

// Quarta Missão 4

//ex de atividade

function idade() {

    console.log(idade);
}

function faseDaVida(idade) {
    if (idade >= 141){
    return 'Erro idade fora de capacidade'

     } if (idade >= 0 && idade <= 3) {
        return 'Bebe'

    } if (idade >= 4 && idade <= 12) {
        return 'Criança'

    } if (idade >= 13 && idade <= 19) {
        return 'Adolescente'

    } if (idade >= 20 && idade <= 64) {
        return 'Adulto'

    } if (idade >= 65 && idade <= 140) {
        return 'Idoso'

    }
}
console.log(faseDaVida(47))
/* outra forma de fazer a tarefa 4 
  const faseDaVida = (idade) => {
    if (idade >= 141){
    return 'Erro idade fora de capacidade'

     } if (idade >= 0 && idade <= 3) {
        return 'Bebe'

    } if (idade >= 4 && idade <= 12) {
        return 'Criança'

    } if (idade >= 13 && idade <= 19) {
        return 'Adolescente'

    } if (idade >= 20 && idade <= 64) {
        return 'Adulto'

    } if (idade >= 65 && idade <= 140) {
        return 'Idoso'

    }
  }
*/
//Tarefa 5
function notaFinal(N1,N2,N3) {

    const media = (N1+N2+N3)/3 

if  (N1 <0 || N1 >100 ){
return 'Você digitou um nota inválida'
}if  (N2 <0 || N2 >100 ){
return 'Você digitou um nota inválida'
}if  (N3 <0 || N3 >100 ){
return 'Você digitou um nota inválida'

 } if (media >= 0 && media <= 59) {
        return 'F'

    } if (media >= 60 && media <= 69) {
        return 'D'

    } if (media >= 70 && media <= 79) {
        return 'C'

    } if (media >= 80 && media <= 89) {
        return 'B'

    } if (media >= 90 && media<= 100) {
        return 'A'

    }
}
console.log(notaFinal(75,66,95))

//tarefa 6 
function seApresente(patente,ultimoNome){

  return `${patente} ${ultimoNome} se apresentando para o serviço`
}
console.log(seApresente('Sargento','Rubens'))
