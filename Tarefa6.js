let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage)

//1
secretMessage.pop()
console.log(secretMessage)

//2
console.log(secretMessage.length)

//3
secretMessage.push('to','Program')
console.log(secretMessage)

//4
secretMessage[7] = 'right'
console.log(secretMessage)

//5
secretMessage.shift()
console.log(secretMessage)

//6
secretMessage.unshift('Programming')
console.log(secretMessage)

//7
secretMessage.splice(6,7,8,9)
console.log(secretMessage)

//8
console.log(secretMessage.join(' '))