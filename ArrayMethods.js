
//Metodos de Array
// Push
//#region
    // 1 - Adicione dois elementos para a lista de tarefas.
    const tarefas1 = ['lavar pratos', 'lavar roupas', 'botar o lixo para fora'];
//#endregion
    tarefas1.push('estudar','dormir')

    console.log(tarefas1)
// Pop
//#region
    // 1 - Remova o ultimo elemento da lista de tarefas.
    const tarefas2 = ['lavar pratos', 'lavar roupas', 'botar o lixo para fora', 'fazer o jantar', 'passar pano na casa'];

    const remover = tarefas2.pop()
    console.log(tarefas2)

//#endregion

// Shift/Unshift/Slice
//#region
//Considere o array abaixo
const listaDeCompras2 = ['suco de laranja', 'bananas', 'café', 'arroz', 'macarrão', 'óleo de soja', 'vegetais'];

console.log(listaDeCompras2)
// 1 - Use o método .shift() para remover o primeiro item do array listaDeCompras2.

const removerPrimeiroElemento = listaDeCompras2.shift()

// 2 - Exiba o novo array listaDeCompras2 no console.

console.log(listaDeCompras2)

// 3 - Use o método .unshift() para adicionar 'pipoca' ao início de sua lista de compras.
listaDeCompras2.unshift('Pipoca')

console.log(listaDeCompras2)

// 4 - Você pode excluir a instrução console.log() da etapa anterior.

        //Não vou fazer pq não é obrigatorio

// 5 - Você está com pressa, então decide pedir a um amigo para ajudá-lo com suas compras.
//     Você quer que ele pegue as 'bananas', 'café' e 'arroz'.

const listaDoAmigo = listaDeCompras2.slice(1, 4);

console.log(listaDoAmigo);

// 6 - No código que você adicionou na questão, use .slice() para fornecer a seu amigo uma lista
// dessas três coisas.

// 7 - Exiba o valor do  de listaDeCompras2, perceba que a lista original não foi alterada, o que demonstra que o 
// método .slice é non-mutating.
console.log(listaDeCompras2)
// 8 - Vamos encontrar o índice de um elemento específico em listaDeCompras2 usando o .indexOf()
//  Chame .indexOf() em listaDeCompras2 para encontrar o índice do elemento 'arroz' e
//  salve o valor retornado em uma variável const chamada arrozIndex.

const result = listaDeCompras2.indexOf('coca-cola')
console.log(result)
//#endregion