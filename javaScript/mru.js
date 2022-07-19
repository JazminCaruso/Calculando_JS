// --------------------------- redondeo ---------------------------

function roundTo2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- distancia  ---------------------------

let formDistance = document.getElementById("formDistance")
formDistance.addEventListener("submit", validateDistance)

let result = 0;
let roundedResult = 0;
function distance(a, b) {
    result = parseFloat(a)*parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultDistance = document.getElementById("showResultDistance")

function validateDistance(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultDistance = ``
    distance(a, b)
    isNaN(a) || isNaN(b) ? resultDistance = `Debe ingresar valores numéricos` : resultDistance = `La distancia es: ${roundedResult} metros`
    localStorage.setItem("resultDistance", resultDistance)
    showResultDistance.innerHTML = `${resultDistance}`;
    form.reset()
}

function getLocalStorageDistance() {
    if (localStorage.getItem("resultDistance") === null) {
        showResultDistance.innerHTML = `La distancia es:`
    } else {
        let show = localStorage.getItem("resultDistance")
        showResultDistance.innerHTML = `${show}`;
    }
}

getLocalStorageDistance()

// --------------------------- distancia según posición  ---------------------------

let formDistancePosition = document.getElementById("formDistancePosition")
formDistancePosition.addEventListener("submit", validateDistancePosition)

let finalResult = 0;
function distancePosition(a, b) {
    result = parseFloat(b) - parseFloat(a)
    result < 0 ? finalResult = result * (-1) : finalResult = result
    roundedResult = roundTo2(finalResult)
    return roundedResult
}

let showResultDistancePosition = document.getElementById("showResultDistancePosition")

function validateDistancePosition(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultDistancePosition = ``
    distancePosition(a, b)
    isNaN(a) || isNaN(b) ? resultDistancePosition = `Debe ingresar valores numéricos` : resultDistancePosition = `La distancia es: ${roundedResult} metros`
    localStorage.setItem("resultDistancePosition", resultDistancePosition)
    showResultDistancePosition.innerHTML = `${resultDistancePosition}`;
    form.reset()
}

function getLocalStorageDistancePosition() {
    if (localStorage.getItem("resultDistancePosition") === null) {
        showResultDistancePosition.innerHTML = `La distancia es:`
    } else {
        let show = localStorage.getItem("resultDistancePosition")
        showResultDistancePosition.innerHTML = `${show}`;
    }
}

getLocalStorageDistancePosition()

// --------------------------- velocidad  ---------------------------

let formSpeed = document.getElementById("formSpeed")
formSpeed.addEventListener("submit", validateSpeed)

function speed(a, b) {
    result = parseFloat(a)/parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultSpeed = document.getElementById("showResultSpeed")

function validateSpeed(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultSpeed = ``
    speed(a, b)
    isNaN(a) || isNaN(b) ? resultSpeed = `Debe ingresar valores numéricos` : resultSpeed = `La velocidad es: ${roundedResult} m/s`
    localStorage.setItem("resultSpeed", resultSpeed)
    showResultSpeed.innerHTML = `${resultSpeed}`;
    form.reset()
}

function getLocalStorageSpeed() {
    if (localStorage.getItem("resultSpeed") === null) {
        showResultSpeed.innerHTML = `La velocidad es:`
    } else {
        let show = localStorage.getItem("resultSpeed")
        showResultSpeed.innerHTML = `${show}`;
    }
}

getLocalStorageSpeed()

// --------------------------- tiempo  ---------------------------

let formTime = document.getElementById("formTime")
formTime.addEventListener("submit", validateTime)

function time(a, b) {
    result = parseFloat(a)/parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultTime = document.getElementById("showResultTime")

function validateTime(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultTime = ``
    time(a, b)
    isNaN(a) || isNaN(b) ? resultTime = `Debe ingresar valores numéricos` : resultTime = `El tiempo es: ${roundedResult} s`
    localStorage.setItem("resultTime", resultTime)
    showResultTime.innerHTML = `${resultTime}`;
    form.reset()
}

function getLocalStorageTime() {
    if (localStorage.getItem("resultTime") === null) {
        showResultTime.innerHTML = `El tiempo es:`
    } else {
        let mostrar = localStorage.getItem("resultTime")
        showResultTime.innerHTML = `${mostrar}`;
    }
}

getLocalStorageTime()

// --------------------------- posición ---------------------------

let formPosition = document.getElementById("formPosition")
formPosition.addEventListener("submit", validatePosition)

function position(a, b, c) {
    result = parseFloat(a) + (parseFloat(b)*parseFloat(c))
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultPosition = document.getElementById("showResultPosition")

function validatePosition(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultPosition = ``
    position(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultPosition = `Debe ingresar valores numéricos` : resultPosition = `La posición final es: ${roundedResult} metros`
    localStorage.setItem("resultPosition", resultPosition)
    showResultPosition.innerHTML = `${resultPosition}`;
    form.reset()
}

function getLocalStoragePosition() {
    if (localStorage.getItem("resultPosition") === null) {
        showResultPosition.innerHTML = `La posición final es:`
    } else {
        let mostrar = localStorage.getItem("resultPosition")
        showResultPosition.innerHTML = `${mostrar}`;
    }
}

getLocalStoragePosition()