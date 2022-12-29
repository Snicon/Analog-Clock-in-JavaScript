// Dynamically adding html elements with the help of DOM manipulation.
const app = document.getElementById('app')

// Hands
const renderHands = () => {
    const handsDiv = document.createElement('div')
    handsDiv.setAttribute('id', 'hands')
    app.appendChild(handsDiv)

    const secondHandDiv = document.createElement('div')
    secondHandDiv.setAttribute('class', 'hand second')
    secondHandDiv.hidden = true;
    handsDiv.appendChild(secondHandDiv)

    const minuteHandDiv = document.createElement('div')
    minuteHandDiv.setAttribute('class', 'hand minute')
    minuteHandDiv.hidden = true;
    handsDiv.appendChild(minuteHandDiv)

    const hourHandDiv = document.createElement('div')
    hourHandDiv.setAttribute('class', 'hand hour')
    hourHandDiv.hidden = true;
    handsDiv.appendChild(hourHandDiv)
}

// Numbers
const numbersDiv = document.createElement('div')
numbersDiv.setAttribute('id', 'numbers')
app.appendChild(numbersDiv)

const renderNumbers = amountOfNumbers => {
    for (let i = 1; i < amountOfNumbers+1; i++) {
        const numberDiv = document.createElement('div')
        numberDiv.setAttribute('class', 'number number' + i)
        numbersDiv.appendChild(numberDiv)
        const numberDivDiv = document.createElement('div')
        numberDivDiv.innerHTML = i;
        numberDiv.appendChild(numberDivDiv)
    }
}

// Render hands and numbers
renderHands()
renderNumbers(12)

// Hand variables
const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')

// Setting the clock to the right time.
const setClock = () => {
    const date = new Date()
    const secondsRatio = date.getSeconds() / 60
    // Minutes & hours should move smoothly and not suddenly change position. -> Hence the "weird" math
    const minutesRatio = (secondsRatio + date.getMinutes()) / 60
    const hoursRatio = (minutesRatio + date.getHours()) / 12

    // Rotate the hands to the right positions
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)

    // Show the hands when they have first been setup. (The hands are hidden before they are put in the correct position.)
    secondHand.hidden = false;
    minuteHand.hidden = false;
    hourHand.hidden = false;
}

// While setPropert is self-explanatory it's not something that has been taught in the course for Codecademy, to read more visit: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
const setRotation = (element, rotationRatio) => element.style.setProperty('--rotation', rotationRatio * 360)

// Calling the setClock function once every second (1000 milliseconds) in order to "updated the clock" and make it tick.
// To read more about the setInterval method goto this page: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
setInterval(setClock, 1000)