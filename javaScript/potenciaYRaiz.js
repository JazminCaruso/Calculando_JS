// --------------------------- redondeo ---------------------------

function roundTo2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- potencia ---------------------------

let formPower = document.getElementById("formPower")
formPower.addEventListener("submit", validatePower)

let result = 0
let roundedResult = 0
function power(a, b) {
    result = parseFloat(a) ** parseFloat(b)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultPower = document.getElementById("showResultPower")

function validatePower(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    resultPower = ``
    power(a, b)
    isNaN(a) || isNaN(b) ? resultPower = `Debe ingresar valores numéricos` : resultPower = `${a} elevado a ${b} es ${roundedResult}`
    localStorage.setItem("resultPower", resultPower)
    showResultPower.innerHTML = `${resultPower}`;
    form.reset()
}

function getLocalStoragePower() {
    if (localStorage.getItem("resultPower") === null) {
        showResultPower.innerHTML = `El resultado es:`
    } else {
        let show = localStorage.getItem("resultPower")
        showResultPower.innerHTML = `${show}`;
    }
}

getLocalStoragePower()

// --------------------------- raíz ---------------------------

let formRoot = document.getElementById("formRoot")
formRoot.addEventListener("submit", validateRoot)

function root(a, b) {
    result = parseFloat(b) ** (1/a)
    roundedResult = roundTo2(result)
    return roundedResult;
}

let showResultRoot = document.getElementById("showResultRoot")

function validateRoot(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    resultRoot = ``
    root(a, b)
    if (isNaN(a) || isNaN(b)) {
        resultRoot = `Debe ingresar valores numéricos`
    } else if (a <= 0) {
        resultRoot = `El índice debe ser mayor que 0`
    } else if (a%2 == 0 && b < 0) {
        resultRoot = `No existe solución real`
    } else {
        resultRoot = `La raíz ${a} de ${b} es ${roundedResult}`
    }
    localStorage.setItem("resultRoot", resultRoot)
    showResultRoot.innerHTML = `${resultRoot}`;
    form.reset()
}

function getLocalStorageRoot() {
    if (localStorage.getItem("resultRoot") === null) {
        showResultRoot.innerHTML = `El resultado es:`
    } else {
        let mostrar = localStorage.getItem("resultRoot")
        showResultRoot.innerHTML = `${mostrar}`;
    }
}

getLocalStorageRoot()

// --------------------------- sweet alert ---------------------------

const infoPower = document.getElementById("infoPower")
infoPower.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/potencia.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la potencia',
        title: 'Partes de la potencia',
        text: 'La base es el número que se quiere multiplicar. El exponente es el número que indica la cantidad de veces que va a realizarse la multiplicación. Ingresa los valores (números) en el cuadro de la calculadora según corresponda.',
        confirmButtonText: "Ok"
    })
})

const infoRoot = document.getElementById("infoRoot")
infoRoot.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/raiz.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la potencia',
        title: 'Partes de la raíz',
        text: 'El índice es el número que indica el grado de la raíz. El radicando es el número del cual se extrae la raíz. Ingresa los valores (números) en el cuadro de la calculadora según corresponda.',
        confirmButtonText: "Ok"
    })
})