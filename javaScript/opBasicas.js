// --------------------------- redondeo ---------------------------

function roundTo2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- suma ---------------------------

let formAdd = document.getElementById("formAdd")
formAdd.addEventListener("submit", validateAdd)

let result = 0;
let roundedResult = 0;
function add(a, b) {
    result = parseFloat(a) + parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultAdd = document.getElementById("showResultAdd")

let addA = document.getElementById("addA")
let addB = document.getElementById("addB")

function validateAdd(e) {
    e.preventDefault()
    let form = e.target
    let a = addA.value
    let b = addB.value
    let resultAdd = ``
    add(a,b)
    isNaN(a) || isNaN(b) ? resultAdd = `Debe ingresar valores numéricos` : resultAdd = `El resultado de ${a} + ${b} es ${roundedResult}`
    localStorage.setItem("resultAdd", resultAdd)
    showResultAdd.innerHTML = `${resultAdd}`;
    form.reset()
}

function getLocalStorageAdd() {
    if (localStorage.getItem("resultAdd") === null) {
        showResultAdd.innerHTML = `El resultado es:`
    } else {
        let show = localStorage.getItem("resultAdd")
        showResultAdd.innerHTML = `${show}`;
    }
}

getLocalStorageAdd()

// --------------------------- resta ---------------------------

let formSubtract = document.getElementById("formSubtract")
formSubtract.addEventListener("submit", validateSubtract)

function subtract(a, b) {
    result = parseFloat(a) - parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultSubtract = document.getElementById("showResultSubtract")

let subtractA = document.getElementById("subtractA")
let subtractB = document.getElementById("subtractB")

function validateSubtract(e) {
    e.preventDefault()
    let form = e.target
    let a = subtractA.value
    let b = subtractB.value
    let resultSubtract = ``
    subtract(a,b)
    isNaN(a) || isNaN(b) ? resultSubtract = `Debe ingresar valores numéricos` : resultSubtract = `El resultado de ${a} - ${b} es ${roundedResult}`
    localStorage.setItem("resultSubtract", resultSubtract)
    showResultSubtract.innerHTML = `${resultSubtract}`;
    form.reset()
}

function getLocalStorageSubtract() {
    if (localStorage.getItem("resultSubtract") === null) {
        showResultSubtract.innerHTML = `El resultado es:`
    } else {
        let mostrar = localStorage.getItem("resultSubtract")
        showResultSubtract.innerHTML = `${mostrar}`;
    }
}

getLocalStorageSubtract()

// --------------------------- multiplicación ---------------------------

let formMultiply = document.getElementById("formMultiply")
formMultiply.addEventListener("submit", validateMultiply)

function multiply(a, b) {
    result = parseFloat(a) * parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultMultiply = document.getElementById("showResultMultiply")

let multiplyA = document.getElementById("multiplyA")
let multiplyB = document.getElementById("multiplyB")

function validateMultiply(e) {
    e.preventDefault()
    let form = e.target
    let a = multiplyA.value
    let b = multiplyB.value
    let resultMultiply = ``
    multiply(a,b)
    isNaN(a) || isNaN(b) ? resultMultiply = `Debe ingresar valores numéricos` : resultMultiply = `El resultado de ${a} x ${b} es ${roundedResult}` 
    localStorage.setItem("resultMultiply", resultMultiply)
    showResultMultiply.innerHTML = `${resultMultiply}`;
    form.reset()
}

function getLocalStorageMultiply() {
    if (localStorage.getItem("resultMultiply") === null) {
        showResultMultiply.innerHTML = `El resultado es:`
    } else {
        let show = localStorage.getItem("resultMultiply")
        showResultMultiply.innerHTML = `${show}`;
    }
    
}

getLocalStorageMultiply()

// --------------------------- división ---------------------------

let formSplit = document.getElementById("formSplit")
formSplit.addEventListener("submit", validateSplit)

function split(a, b) {
    result = parseFloat(a) / parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultSplit = document.getElementById("showResultSplit")

let splitA = document.getElementById("splitA")
let splitB = document.getElementById("splitB")

function validateSplit(e) {
    e.preventDefault()
    let form = e.target
    let a = splitA.value
    let b = splitB.value
    let resultSplit = ``
    split(a,b)

    if (isNaN(a) || isNaN(b)) {
        resultSplit = `Debe ingresar valores numéricos`
    } else if (parseFloat(b) === 0) {
        resultSplit = `No se puede dividir por 0`
    } else {
        let roundedResult = split(a, b)
        resultSplit = `El resultado de ${a} / ${b} es ${roundedResult}`
    }
    
    localStorage.setItem("resultSplit", resultSplit)
    showResultSplit.innerHTML = `${resultSplit}`;
    form.reset()
}

function getLocalStorageSplit() {
    if (localStorage.getItem("resultSplit") === null) {
        showResultSplit.innerHTML = `El resultado es:`
    } else {
        let show = localStorage.getItem("resultSplit")
        showResultSplit.innerHTML = `${show}`;
    }
    
}

getLocalStorageSplit()