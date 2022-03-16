const quiz = () => {
    let myName = prompt('Enter your name');
    let month = prompt('What month were you born?');
    let food = prompt('What is your favourite food?');
    console.log('My name is', myName);
    console.log('I was born in', month);
    console.log('My favourite food is', food);
}

const print = () => {
    console.log('I love to print text!')
}

const functionA = (f) => {
    console.log('FUNCTION A HAS BEEN CALLED')
    f()
}

const functionB = () => {
    console.log('FUNCTION B HAS BEEN CALLED')
}

const functionC = () => {
    console.log('FUNCTION C HAS BEEN CALLED!')
}

const greet = (person) => {
    console.log('HELLO,', person)
}

const blender = (string) => {
    return string.split('')
}

const square = (num, message) => {
    console.log('Message:', message)
    return num * num
}

