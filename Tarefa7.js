//1
const input = 'Procurando Nemo, Onde ele esta?'; //a,a,e,u
console.log ('Array Input :', input);

//2
const vogais = ['a', 'e', 'i', 'o', 'u'];

//3
const resultArray = [];

//4 //5 //6 //7 //8 //9 //10 //11
for (let primeiroContador = 0; primeiroContador < input.length; primeiroContador++) {
    //console.log (primeiroContador);
    for (let segundoContador = 0; segundoContador < vogais.length; segundoContador++) {
      //console.log (segundoContador);
      if (input[primeiroContador] === vogais[segundoContador]) {
       //console.log (input[primeiroContador]);
       resultArray.push(input[primeiroContador]);
       if (input[primeiroContador] === vogais[1]) {
        resultArray.push (input[primeiroContador]);
       }
       if (input[primeiroContador] === vogais[4]) {
        resultArray.push (input[primeiroContador]);
       }
    
      }
    }
}
//12 //13 
//console.log (resultArray);
const result = resultArray.join('')
console.log (result.toUpperCase());



