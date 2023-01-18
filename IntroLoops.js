/**
 * 1 - Crie a variável vacationSpots e atribua seu valor a
 * um array de três strings nomeando lugares que você gostaria
 * de visitar.
 * 
 * 
 * 2 - Em seguida, console.log()cada item em vacationSpots.
 * Como ainda não conhecemos os loops, temos que console.log()
 * analisar cada elemento do array separadamente.
 * 
 * 3 - Bom trabalho! Agora imagine que a lista de férias tivesse
 * 100 lugares — registrar manualmente cada elemento do array no console seria uma tarefa tediosa! No próximo exercício, aprenderemos como tornar as coisas mais eficientes com loops.
 */

const alfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

const vacationSports = ['Londres','Paris','Salvador'];

console.log(vacationSports[0])
console.log(vacationSports[1])
console.log(vacationSports[2])


/**for(let contador = 0; contador < 3; contador = contador + 1){
    console.log(vacationSports[contador])
}**/

//1 primeira maneira
//for(let contador = 0; contador < 26; contador = contador + 1){
  //  console.log(alfabeto[contador])
//}
/* Alfabeto crescente
//2 segunda maneira
for(let contador = 0; contador < 26; contador++){
    console.log(alfabeto[contador])
}*/

//3 terceira maneira
/*for(let contador = 0; contador < alfabeto.length; contador++){
 console.log(alfabeto[contador])
}*/


///while
/*let contador = 0;
while (contador < alfabeto.length ){
    console.log(alfabeto[contador]);
    contador++;
}*/


// Alfabeto decrecente
/*for(let contador = 25; contador >= 0; contador--){
    console.log(alfabeto[contador])
}*/


// quebrando o pc
/*for(let contador = 0; contador > 0; contador++){
    console.log([contador])
}*/


//Ex. Arrays Remoção


const novoAlfabeto = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

/*for(let j = 0; j < (novoAlfabeto.length) ; j ++) {
    if(novoAlfabeto[j] === 'A'
    ||novoAlfabeto[j] === 'E'
    ||novoAlfabeto[j] === 'I'
    ||novoAlfabeto[j] === 'O'
    ||novoAlfabeto[j] === 'U') {
        console.log(j)
        console.log(novoAlfabeto[j])
        novoAlfabeto.splice(j, 1)
    }
}
console.log(novoAlfabeto);
*/


// jeito sotisficado/ loops aninhados

/*const vogais = ['A','E','I','O','U']
for(let i = 0; i < (novoAlfabeto.length) ; i++) {
    for(let j = 0; j < vogais.length; j++){
      if (novoAlfabeto[i] === vogais[j]){
            novoAlfabeto.splice(i, 1);
      }
    }
}
console.log(novoAlfabeto)*/



//do-while
let contador =0
do{
    console.log('Executa pelo menos uma vez.')
    console.log('valor de contador: ', contador);
    contador++
}while(contador < 4)






