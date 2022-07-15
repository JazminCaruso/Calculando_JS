const lista = document.getElementById('listaDolar')

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
        lista.append(dolar)
    })
    .catch(() => {
        const err = document.createElement('div')
        err.className = "listaDolar"
        err.innerHTML = `
                        No es posible acceder a los valores del dolar en este momento
        `
        lista.append(err)
    })

// --------------------------- conversor de peso a dolar ---------------------------

let formularioConvPD = document.getElementById("formularioConversorPesoDolar")
formularioConvPD.addEventListener("submit", validarPD)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

let resultado = 0
let resultadoRedondeado = 0

function pesoDolar(a, b) {
    resultado = parseFloat(a)/parseFloat(b)
    resultadoRedondeado = redondear2(resultado)
    return resultadoRedondeado;
}

let resultadoConversorPesoDolar = document.getElementById("resultadoConversorPesoDolar")

function validarPD(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultadoPesoDolar = ``
    pesoDolar(a,b)
    if (isNaN(a) || isNaN(b)) {
        resultadoPesoDolar = `Debe ingresar valores numéricos`
    } else {
        resultadoPesoDolar = `${a} pesos a ${b} son ${resultadoRedondeado} dólares`
    }
    localStorage.setItem("valorConvertidoPD", resultadoPesoDolar)
    resultadoConversorPesoDolar.innerHTML = `${resultadoPesoDolar}`;
    form.reset()
}

function obtenerLocalStoragePesoDolar() {
    if (localStorage.getItem("valorConvertidoPD") === null) {
        resultadoConversorPesoDolar.innerHTML = ``
    } else {
        let mostrar = localStorage.getItem("valorConvertidoPD")
        resultadoConversorPesoDolar.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStoragePesoDolar()

// --------------------------- conversor de dolar a peso ---------------------------

let formularioConvDP = document.getElementById("formularioConversorDolarPeso")
formularioConvDP.addEventListener("submit", validarDP)

function dolarPeso(a, b) {
    resultado = parseFloat(a)*parseFloat(b)
    resultadoRedondeado = redondear2(resultado)
    return resultadoRedondeado;
}

let resultadoConversorDolarPeso = document.getElementById("resultadoConversorDolarPeso")

function validarDP(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultadoPesoDolar = ``
    dolarPeso(a,b)
    if (isNaN(a) || isNaN(b)) {
        resultadoDolarPeso = `Debe ingresar valores numéricos`
    } else {
        resultadoDolarPeso = `${a} dolares a ${b} son ${resultadoRedondeado} pesos`
    }
    localStorage.setItem("valorConvertidoDP", resultadoDolarPeso)
    resultadoConversorDolarPeso.innerHTML = `${resultadoDolarPeso}`;
    form.reset()
}

function obtenerLocalStorageDolarPeso() {
    if (localStorage.getItem("valorConvertidoDP") === null) {
        resultadoConversorDolarPeso.innerHTML = ``
    } else {
        let mostrar = localStorage.getItem("valorConvertidoDP")
        resultadoConversorDolarPeso.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageDolarPeso()

// --------------------------- sweet alert ---------------------------

const explicacionConversorPD = document.getElementById("explicacionConversorPD")
explicacionConversorPD.addEventListener('click', () => {
    Swal.fire({
        text: 'Ingrese la cantidad de pesos que quiere convertir a dólares. Debajo ingrese el valor del dolar (arriba de la calculadora tiene disponibles los valores actuales del dolar).',
        confirmButtonText: "Ok"
    })
})

const explicacionConversorDP = document.getElementById("explicacionConversorDP")
explicacionConversorDP.addEventListener('click', () => {
    Swal.fire({
        text: 'Ingrese la cantidad de dólares que quiere convertir a pesos. Debajo ingrese el valor del dolar (arriba de la calculadora tiene disponibles los valores actuales del dolar).',
        confirmButtonText: "Ok"
    })
})