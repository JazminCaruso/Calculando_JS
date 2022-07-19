// --------------------------- plazo fijo ---------------------------

let formTimeDeposit = document.getElementById("formTimeDeposit")
formTimeDeposit.addEventListener("submit", validateTimeDeposit)

function roundTo2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

let result = 0 
let roundedResult = 0

function timeDeposit(a, b, c) {
    result = (((parseFloat(c)/365)*parseFloat(b))*parseFloat(a))/100
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultTimeDeposit = document.getElementById("showResultTimeDeposit")

function validateTimeDeposit(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultTimeDeposit = ``
    timeDeposit(a,b,c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultTimeDeposit = `Debe ingresar valores numéricos` : resultTimeDeposit = `Lo ganado será: ${roundedResult} pesos`
    localStorage.setItem("resultTimeDeposit", resultTimeDeposit)
    showResultTimeDeposit.innerHTML = `${resultTimeDeposit}`;
    form.reset()
}

function getLocalStorageTimeDeposit() {
    if (localStorage.getItem("resultTimeDeposit") === null) {
        showResultTimeDeposit.innerHTML = `Lo ganado será:`
    } else {
        let show = localStorage.getItem("resultTimeDeposit")
        showResultTimeDeposit.innerHTML = `${show}`;
    }
}

getLocalStorageTimeDeposit()

// --------------------------- sweet alert ---------------------------

const infoTimeDeposit = document.getElementById("infoTimeDeposit")
infoTimeDeposit.addEventListener('click', () => {
    Swal.fire({
        text: 'Ingrese el monto a invertir, el plazo (cantidad de días que dejarás el dinero depositado) y la tasa de interés anual, así obtendrá el rendimiento o interés ganado.',
        confirmButtonText: "Ok"
    })
})