/*let novaEspaconave = {
    name: 'Coração de Ouro',
    'Fuel Type' : 'Luz',
    color: 'Blue',
    speed: 300000,
    "Unit Speed": 'km/s',
    crewMembers: 10,
    crew: {
        captain: {
            name: 'Luff',
            degree: 'Engenharia de Software',
            encourageTeam() {
                console.log('Bora Time!')
            }
        }
    },
    engine: {
        model: 'Nimbus2000'

    },
    eletronics: {
        computer: {
            terabytes:100,
            monitors: 'Full-HD'
        },
        battery:'Lithium'
    }  ,
    isLArgerThan100: true,
    sayHello: () => {
        console.log('Olá mundo 2')
    },
}
console.log(novaEspaconave.crew.captain.degree)
novaEspaconave.crew.captain.encourageTeam()
console.log(novaEspaconave.eletronics.computer.terabytes)
console.log(novaEspaconave.eletronics.computer)
novaEspaconave.eletronics.computer.terabytes = 200
novaEspaconave.eletronics.computer.processorType = 'i9' 
delete novaEspaconave.eletronics.computer.monitors
console.log(novaEspaconave.eletronics.computer.terabytes)
console.log(novaEspaconave.eletronics.computer)
*/

const spaceship = {
    homePlanet: 'Earth',
    color: 'Silver'
}

let paint = obj => {
    obj.color = 'blue'
}
let tentarReatribuir = obj => {
    obj = {
        identified: false,
        transportType: 'fly'
    }
    console.log(obj);
} 
tentarReatribuir(spaceship)
console.log(spaceship)

paint(spaceship)

console.log(spaceship.color)

