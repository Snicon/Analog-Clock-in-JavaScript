// Hand vars
const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand = document.querySelector('.hour')

// Setting the clock to the right time.
const setClock = () => {
    const date = new Date();
    const secondsRatio = date.getSeconds() / 60
    // Minutes & hours should move smoothly and not suddenly change position. -> Hence the "weird" math
    const minutesRatio = (secondsRatio + date.getMinutes()) / 60
    const hoursRatio = (minutesRatio + date.getHours()) / 12

    // Rotate the hands to the right positions
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

// While setPropert is self-explanatory it's not something that has been taught in the course for Codecademy, to read more visit: https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty
const setRotation = (element, rotationRatio) => element.style.setProperty('--rotation', rotationRatio * 360)

// Calling the setClock function once every second (1000 milliseconds) in order to "updated the clock" and make it tick.
// To read more about the setInterval method goto this page: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
setInterval(setClock, 1000)