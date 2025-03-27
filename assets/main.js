// Esercizo Rivisitato di FizzBuzz
// Stampa 12 numeri Random 
// Per i multipli di 3 stamperemo a schermo fizz
// per i multipli di 5 stamperemo a schermo buzz
// per i multipli di 3 e 5 stamparemo a schermo FizzBuzz

const fizz = 'Fizz'

const buzz = 'Buzz'

const fizzBuzz = 'FizzBuzz'

const divElement = document.querySelector('div.container> .box')


for (let i = 1; i <= 12; i++) {

    const squareElement = document.createElement('square')
    squareElement.classList.add('square')

    let count = 0
    const randomNumber = Math.floor(Math.random() * 100) + 1
    for (let j = 1; j < randomNumber; j++) {
        count++
    }
    if (count % 3 === 0 && count % 5 === 0) {
        squareElement.append(`${fizzBuzz}`)

    }
    else if (count % 3 === 0) {
        squareElement.append(`${fizz}`)

    }
    else if (count % 5 === 0) {
        squareElement.append(`${buzz}`)

    }
    else {
        squareElement.append(`${count}`)

    }
    divElement.append(squareElement)
}