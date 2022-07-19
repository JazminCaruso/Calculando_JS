// --------------------------- redondeo ---------------------------

function roundTo2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- velocidad 1 ---------------------------

let formSpeed1 = document.getElementById("formSpeed1")
formSpeed1.addEventListener("submit", validateSpeed1)

let result = 0;
let roundedResult = 0;
function speed1(a, b, c) {
    result = parseFloat(a) + (parseFloat(b)*parseFloat(c))
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultSpeed1 = document.getElementById("showResultSpeed1")

function validateSpeed1(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultSpeed1 = ``
    speed1(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultSpeed1 = `Debe ingresar valores numéricos` : resultSpeed1 = `La velocidad es: ${roundedResult} m/s`
    localStorage.setItem("resultSpeed1", resultSpeed1)
    showResultSpeed1.innerHTML = `${resultSpeed1}`;
    form.reset()
}

function getLocalStorageSpeed1() {
    if (localStorage.getItem("resultSpeed1") === null) {
        showResultSpeed1.innerHTML = `La velocidad es:`
    } else {
        let show = localStorage.getItem("resultSpeed1")
        showResultSpeed1.innerHTML = `${show}`;
    }
}

getLocalStorageSpeed1()

// --------------------------- velocidad 2 ---------------------------

let formSpeed2 = document.getElementById("formSpeed2")
formSpeed2.addEventListener("submit", validateSpeed2)

function speed2(a, b, c) {
    result = ((parseFloat(a)**2) + (2*parseFloat(b)*parseFloat(c)))**0.5
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultSpeed2 = document.getElementById("showResultSpeed2")

function validateSpeed2(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultSpeed2 = ``
    speed2(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultSpeed2 = `Debe ingresar valores numéricos` : resultSpeed2 = `La velocidad es: ${roundedResult} m/s`
    localStorage.setItem("resultSpeed2", resultSpeed2)
    showResultSpeed2.innerHTML = `${resultSpeed2}`;
    form.reset()
}

function getLocalStorageSpeed2() {
    if (localStorage.getItem("resultSpeed2") === null) {
        showResultSpeed2.innerHTML = `La velocidad es:`
    } else {
        let show = localStorage.getItem("resultSpeed2")
        showResultSpeed2.innerHTML = `${show}`;
    }
}

getLocalStorageSpeed2()

// --------------------------- aceleración ---------------------------

let formAcceleration = document.getElementById("formAcceleration")
formAcceleration.addEventListener("submit", validateAcceleration)

function acceleration(a, b, c) {
    result = (parseFloat(b) - parseFloat(a)) / parseFloat(c)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultAcceleration = document.getElementById("showResultAcceleration")

function validateAcceleration(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultAcceleration = ``
    acceleration(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultAcceleration = `Debe ingresar valores numéricos` : resultAcceleration = `La aceleración es: ${roundedResult} m/s²`
    localStorage.setItem("resultAcceleration", resultAcceleration)
    showResultAcceleration.innerHTML = `${resultAcceleration}`;
    form.reset()
}

function getLocalStorageAcceleration() {
    if (localStorage.getItem("resultAcceleration") === null) {
        showResultAcceleration.innerHTML = `La aceleración es:`
    } else {
        let mostrar = localStorage.getItem("resultAcceleration")
        showResultAcceleration.innerHTML = `${mostrar}`;
    }
}

getLocalStorageAcceleration()

// --------------------------- tiempo ---------------------------

let formTime = document.getElementById("formTime")
formTime.addEventListener("submit", validateTime)

function time(a, b, c) {
    result = (parseFloat(b) - parseFloat(a)) / parseFloat(c)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultTime = document.getElementById("showResultTime")

function validateTime(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultTime = ``
    time(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultTime = `Debe ingresar valores numéricos` : resultTime = `El tiempo es: ${roundedResult} s`
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

// --------------------------- distancia 1 ---------------------------

let formDistance1 = document.getElementById("formDistance1")
formDistance1.addEventListener("submit", validateDistance1)

function distance1(a, b, c) {
    result = ((parseFloat(a) + parseFloat(b)) / 2)*(parseFloat(c))
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultDistance1 = document.getElementById("showResultDistance1")

function validateDistance1(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultDistance1 = ``
    distance1(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultDistance1 = `Debe ingresar valores numéricos` : resultDistance1 = `La distancia es: ${roundedResult} metros`
    localStorage.setItem("resultDistance1", resultDistance1)
    showResultDistance1.innerHTML = `${resultDistance1}`;
    form.reset()
}

function getLocalStorageDistance1() {
    if (localStorage.getItem("resultDistance1") === null) {
        showResultDistance1.innerHTML = `La distancia es:`
    } else {
        let show = localStorage.getItem("resultDistance1")
        showResultDistance1.innerHTML = `${show}`;
    }
}

getLocalStorageDistance1()

// --------------------------- distancia 2 ---------------------------

let formDistance2 = document.getElementById("formDistance2")
formDistance2.addEventListener("submit", validateDistance2)

function distance2(a, b, c) {
    result = (parseFloat(a)*parseFloat(c)) + ((parseFloat(b)*(parseFloat(c)**2))/2)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultDistance2 = document.getElementById("showResultDistance2")

function validateDistance2(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultDistance2 = ``
    distance2(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultDistance2 = `Debe ingresar valores numéricos` : resultDistance2 = `La distancia es: ${roundedResult} metros`
    localStorage.setItem("resultDistance2", resultDistance2)
    showResultDistance2.innerHTML = `${resultDistance2}`;
    form.reset()
}

function getLocalStorageDistance2() {
    if (localStorage.getItem("resultDistance2") === null) {
        showResultDistance2.innerHTML = `La distancia es:`
    } else {
        let show = localStorage.getItem("resultDistance2")
        showResultDistance2.innerHTML = `${show}`;
    }
}

getLocalStorageDistance2()

// --------------------------- distancia 3 ---------------------------

let formDistance3 = document.getElementById("formDistance3")
formDistance3.addEventListener("submit", validateDistance3)

function distance3(a, b, c) {
    result = (parseFloat(b)**2 - parseFloat(a)**2) / (2*parseFloat(c))
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultDistance3 = document.getElementById("showResultDistance3")

function validateDistance3(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultDistance3 = ``
    distance3(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultDistance3 = `Debe ingresar valores numéricos` : resultDistance3 = `La distancia es: ${roundedResult} metros`
    localStorage.setItem("resultDistance3", resultDistance3)
    showResultDistance3.innerHTML = `${resultDistance3}`;
    form.reset()
}

function getLocalStorageDistance3() {
    if (localStorage.getItem("resultDistance3") === null) {
        showResultDistance3.innerHTML = `La distancia es:`
    } else {
        let show = localStorage.getItem("resultDistance3")
        showResultDistance3.innerHTML = `${show}`;
    }
}

getLocalStorageDistance3()

// --------------------------- posicion ---------------------------

let formPosition = document.getElementById("formPosition")
formPosition.addEventListener("submit", validatePosition)

function position(a, b, c, d) {
    result = parseFloat(a) + (parseFloat(b)*parseFloat(d)) + ((parseFloat(c)*(parseFloat(d)**2))/2)
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
    let d = form.children[10].value
    let resultPosition = ``
    position(a, b, c, d)
    isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) ? resultPosition = `Debe ingresar valores numéricos` : resultPosition = `La posición es: ${roundedResult} metros`
    localStorage.setItem("resultPosition", resultPosition)
    showResultPosition.innerHTML = `${resultPosition}`;
    form.reset()
}

function getLocalStoragePosition() {
    if (localStorage.getItem("resultPosition") === null) {
        showResultPosition.innerHTML = `La posición es:`
    } else {
        let show = localStorage.getItem("resultPosition")
        showResultPosition.innerHTML = `${show}`;
    }
}

getLocalStoragePosition()
