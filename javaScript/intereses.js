// --------------------------- interés ---------------------------

let formInterests = document.getElementById("formInterests")
formInterests.addEventListener("submit", validateInterests)

function roundTo2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

let result = 0 
let roundedResult = 0
let resFinal = 0

function interests(a, b) {
    result = (parseFloat(a)*parseFloat(b))/100
    roundedResult = roundTo2(result)
    finalResult = roundedResult + parseFloat(a)
    return finalResult;
}

let operation = document.getElementById("operation")
let interest = document.getElementById("interest")
let total = document.getElementById("total")

function validateInterests(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultOperation = ``
    let resultInterest = ``
    let resultTotal = ``
    interests(a,b)
    if (isNaN(a) || isNaN(b)) {
        resultOperation = `Debe ingresar valores numéricos`
        resultInterest = ``
        resultTotal = ``
    } else {
        resultOperation = `Si el precio es ${a} pesos y la tasa de interés es ${b}`
        resultInterest = `El interés es: ${roundedResult}`
        resultTotal = `El precio final es: ${finalResult} pesos`
    }
    localStorage.setItem("operation", resultOperation)
    localStorage.setItem("interest", resultInterest)
    localStorage.setItem("total", resultTotal)
    operation.innerHTML = `${resultOperation}`;
    interest.innerHTML = `${resultInterest}`;
    total.innerHTML = `${resultTotal}`;
    form.reset()
}

function getLocalStorageOperation() {
    if (localStorage.getItem("operation") === null) {
        operation.innerHTML = ``
    } else {
        let show = localStorage.getItem("operation")
        operation.innerHTML = `${show}`;
    }
}

function getLocalStorageInterest() {
    if (localStorage.getItem("interest") === null) {
        interest.innerHTML = `El interés es:`
    } else {
        let show = localStorage.getItem("interest")
        interest.innerHTML = `${show}`;
    }
}

function getLocalStorageTotal() {
    if (localStorage.getItem("total") === null) {
        total.innerHTML = `El precio final es:`
    } else {
        let show = localStorage.getItem("total")
        total.innerHTML = `${show}`;
    }
}

getLocalStorageOperation()
getLocalStorageInterest()
getLocalStorageTotal()
