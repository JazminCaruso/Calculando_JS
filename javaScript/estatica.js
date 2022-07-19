// --------------------------- redondeo ---------------------------

function roundTo2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- masa según peso  ---------------------------

let formMassWeight = document.getElementById("formMassWeight")
formMassWeight.addEventListener("submit", validateMassWeight)

let result = 0;
let roundedResult = 0;
function massWeight(a) {
    result = parseFloat(a)/9.8
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultMassWeight = document.getElementById("showResultMassWeight")

function validateMassWeight(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let resultMassWeight = ``
    massWeight(a)
    isNaN(a) ? resultMassWeight = `Debe ingresar valores numéricos` : resultMassWeight = `El valor de la masa es: ${roundedResult} kg`
    localStorage.setItem("resultMassWeight", resultMassWeight)
    showResultMassWeight.innerHTML = `${resultMassWeight}`;
    form.reset()
}

function getLocalStorageMassWeight() {
    if (localStorage.getItem("resultMassWeight") === null) {
        showResultMassWeight.innerHTML = `El valor de la masa es:`
    } else {
        let show = localStorage.getItem("resultMassWeight")
        showResultMassWeight.innerHTML = `${show}`;
    }
}

getLocalStorageMassWeight()

// --------------------------- peso  ---------------------------

let formWeight = document.getElementById("formWeight")
formWeight.addEventListener("submit", validateWeight)

function weight(a) {
    result = parseFloat(a)*9.8
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultWeight = document.getElementById("showResultWeight")

function validateWeight(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let resultWeight = ``
    weight(a)
    isNaN(a) ? resultWeight = `Debe ingresar valores numéricos` : resultWeight = `El valor del peso es: ${roundedResult} N`
    localStorage.setItem("resultWeight", resultWeight)
    showResultWeight.innerHTML = `${resultWeight}`;
    form.reset()
}

function getLocalStorageWeight() {
    if (localStorage.getItem("resultWeight") === null) {
        showResultWeight.innerHTML = `El valor del peso es:`
    } else {
        let show = localStorage.getItem("resultWeight")
        showResultWeight.innerHTML = `${show}`;
    }
}

getLocalStorageWeight()

// --------------------------- masa según fuerza  ---------------------------

let formMassStrength = document.getElementById("formMassStrength")
formMassStrength.addEventListener("submit", validateMassStrength)

function massStrength(a, b) {
    result = parseFloat(a)/parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultMassStrength = document.getElementById("showResultMassStrength")

function validateMassStrength(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultMassStrength = ``
    massStrength(a, b)
    isNaN(a) || isNaN(b) ? resultMassStrength = `Debe ingresar valores numéricos` : resultMassStrength = `El valor de la masa es: ${roundedResult} kg`
    localStorage.setItem("resultMassStrength", resultMassStrength)
    showResultMassStrength.innerHTML = `${resultMassStrength}`;
    form.reset()
}

function getLocalStorageMassStrength() {
    if (localStorage.getItem("resultMassStrength") === null) {
        showResultMassStrength.innerHTML = `El valor de la masa es:`
    } else {
        let show = localStorage.getItem("resultMassStrength")
        showResultMassStrength.innerHTML = `${show}`;
    }
}

getLocalStorageMassStrength()

// --------------------------- fuerza  ---------------------------

let formStrength = document.getElementById("formStrength")
formStrength.addEventListener("submit", validateStrength)

function strength(a, b) {
    result = parseFloat(a)*parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultStrength = document.getElementById("showResultStrength")

function validateStrength(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultStrength = ``
    strength(a, b)
    isNaN(a) || isNaN(b) ? resultStrength = `Debe ingresar valores numéricos` : resultStrength = `El valor de la fuerza es: ${roundedResult} N`
    localStorage.setItem("resultStrength", resultStrength)
    showResultStrength.innerHTML = `${resultStrength}`;
    form.reset()
}

function getLocalStorageStrength() {
    if (localStorage.getItem("resultStrength") === null) {
        showResultStrength.innerHTML = `El valor de la fuerza es:`
    } else {
        let show = localStorage.getItem("resultStrength")
        showResultStrength.innerHTML = `${show}`;
    }
}

getLocalStorageStrength()