let spaceship = {
    'Fuel Type' : 'diesel',
    color: 'silver'
}


let novaEspaconave = {
    name: 'Coração de Ouro',
    'Fuel Type' : 'Luz',
    color: 'Blue',
    speed: 300000,
    "Unit Speed": 'km/s',
    crewMembers: 10,
    isLArgerThan100: true,
}

console.log (spaceship);
console.log (novaEspaconave);

console.log (novaEspaconave.color);
console.log (novaEspaconave["Fuel Type"]);

const name = novaEspaconave.name;
const speed = novaEspaconave.speed;
const Unit = novaEspaconave["Unit Speed"];


console.log (`À velocidade máxima ${name} é ${speed}${Unit}`)
console.log (`A quantidade de Tripulante é ${novaEspaconave.crewMembers}`)
console.log (novaEspaconave.speed);
console.log (novaEspaconave.speed);
console.log (novaEspaconave.crewMembers);


console.log(`O combustível da espaçonave ${name} é ${novaEspaconave["Fuel Type"]}`)
novaEspaconave["Fuel Type"] = 'Óleo Vegetal';
novaEspaconave.crewMembers++
console.log(`O novo combustível da espaçonave ${name} é ${novaEspaconave["Fuel Type"]}`)
console.log(`A quantidade de Tripulante da ${name} agora é ${novaEspaconave.crewMembers}`)


const novaEspaconave2 = {
    type: 'Shuttle',
    /*sayHello: function () {
        console.log('Olá mundo');
    }*/
    sayHello: () => {
        console.log('Olá mundo 2')
    }
};

/*novaEspaconave2 = {
    type: 'alien'
console.log(novaEspaconave2) //erro
*/

novaEspaconave2.type = 'Alien'
console.log(novaEspaconave2) //certo
novaEspaconave2.speed = 100
 novaEspaconave2.qtdpazageirirus = 1000

delete novaEspaconave2.qtdpazageirirus
delete novaEspaconave2.speed
delete novaEspaconave2.type
/*console.error(novaEspaconave2)
console.warn(novaEspaconave2)*/
console.log(novaEspaconave2) //certo
novaEspaconave2.sayHello()