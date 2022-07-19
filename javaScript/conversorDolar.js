const list = document.getElementById('listDolar')

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((response) => response.json())
    .then((data) => {
        const dolar = document.createElement('div')
        dolar.className = "listaDolar"
        dolar.innerHTML = `
                        Dolar oficial compra: ${data[0].casa.compra}  |
                        Dolar oficial venta: ${data[0].casa.venta}  |
                        Dolar Blue compra: ${data[1].casa.compra}  |
                        Dolar Blue venta: ${data[1].casa.venta}
        `
        list.append(dolar)
    })
    .catch(() => {
        const err = document.createElement('div')
        err.className = "listaDolar"
        err.innerHTML = `
                        No es posible acceder a los valores del dolar en este momento
        `
        list.append(err)
    })

// --------------------------- conversor de peso a dolar ---------------------------

let formConverterPesoDolar = document.getElementById("formConverterPesoDolar")
formConverterPesoDolar.addEventListener("submit", validateConverterPesoDolar)

function roundTo2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

let result = 0
let roundedResult = 0

function converterPesoDolar(a, b) {
    result = parseFloat(a)/parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let resultConverterPesoDolar = document.getElementById("resultConverterPesoDolar")

function validateConverterPesoDolar(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultPesoDolar = ``
    converterPesoDolar(a,b)
    if (isNaN(a) || isNaN(b)) {
        resultPesoDolar = `Debe ingresar valores numéricos`
    } else {
        resultPesoDolar = `${a} pesos a ${b} son ${roundedResult} dólares`
    }
    localStorage.setItem("valuePesoDolar", resultPesoDolar)
    resultConverterPesoDolar.innerHTML = `${resultPesoDolar}`;
    form.reset()
}

function getLocalStoragePesoDolar() {
    if (localStorage.getItem("valuePesoDolar") === null) {
        resultConverterPesoDolar.innerHTML = ``
    } else {
        let show = localStorage.getItem("valuePesoDolar")
        resultConverterPesoDolar.innerHTML = `${show}`;
    }
}

getLocalStoragePesoDolar()

// --------------------------- conversor de dolar a peso ---------------------------

let formConverterDolarPeso = document.getElementById("formConverterDolarPeso")
formConverterDolarPeso.addEventListener("submit", validateConverterDolarPeso)

function converterDolarPeso(a, b) {
    result = parseFloat(a)*parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let resultConverterDolarPeso = document.getElementById("resultConverterDolarPeso")

function validateConverterDolarPeso(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultDolarPeso = ``
    converterDolarPeso(a,b)
    if (isNaN(a) || isNaN(b)) {
        resultDolarPeso = `Debe ingresar valores numéricos`
    } else {
        resultDolarPeso = `${a} dolares a ${b} son ${roundedResult} pesos`
    }
    localStorage.setItem("valueDolarPeso", resultDolarPeso)
    resultConverterDolarPeso.innerHTML = `${resultDolarPeso}`;
    form.reset()
}

function getLocalStorageDolarPeso() {
    if (localStorage.getItem("valueDolarPeso") === null) {
        resultConverterDolarPeso.innerHTML = ``
    } else {
        let show = localStorage.getItem("valueDolarPeso")
        resultConverterDolarPeso.innerHTML = `${show}`;
    }
}

getLocalStorageDolarPeso()

// --------------------------- sweet alert ---------------------------

const infoConverterPesoDolar = document.getElementById("infoConverterPesoDolar")
infoConverterPesoDolar.addEventListener('click', () => {
    Swal.fire({
        text: 'Ingrese la cantidad de pesos que quiere convertir a dólares. Debajo ingrese el valor del dolar (arriba de la calculadora tiene disponibles los valores actuales del dolar).',
        confirmButtonText: "Ok"
    })
})

const infoConverterDolarPeso = document.getElementById("infoConverterDolarPeso")
infoConverterDolarPeso.addEventListener('click', () => {
    Swal.fire({
        text: 'Ingrese la cantidad de dólares que quiere convertir a pesos. Debajo ingrese el valor del dolar (arriba de la calculadora tiene disponibles los valores actuales del dolar).',
        confirmButtonText: "Ok"
    })
})