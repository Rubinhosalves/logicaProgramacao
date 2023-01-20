//
//let spaceship = {
//    crew: {
//      Captain: { 
//        name: 'Luff', 
//        degree: 'Computer Engineering', 
//        cheerTeam() { console.log('You got this!') } 
//      },
//      'chief officer': { 
//        name: 'Zoro', 
//        degree: 'Aerospace Engineering', 
//        agree() { console.log('I agree, captain!') } 
//      },
//      medic: { 
//        name: 'Clementine', 
//        degree: 'Physics', 
//        announce() { console.log(`Jets on!`) } },
//      translator: {
//        name: 'Shauna', 
//        degree: 'Conservation Science', 
//        powerFuel() { console.log('The tank is full!') } 
//      },
//      Chef: {
//        name: "Sanji",
//        degree: 'Chef '
//      }
//    }
//  }; 
//
//
//  for (let crewMembers in spaceship.crew){
//    if( crewMembers === 'Captain' || crewMembers === 'medic'){
//        console.log(`${crewMembers}: ${spaceship.crew[crewMembers].name}
//         e seu posto é: ${spaceship.crew[crewMembers].degree} `)
//    }
//  }



  const goat ={
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa')
    },
    diet () {
        console.log(this.dietType)
    }
  }

  console.log(goat.dietType)
  goat.makeSound()
  goat.diet()
