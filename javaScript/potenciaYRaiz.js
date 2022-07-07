// --------------------------- redondeo ---------------------------

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- potencia ---------------------------

let formPot = document.getElementById("formPot")
formPot.addEventListener("submit", validarP)

function potencia(a, b) {
    resultado = parseFloat(a) ** parseFloat(b)
    resultadoRedP = redondear2(resultado)
    return resultadoRedP;
}

let resPot = document.getElementById("resPot")

function validarP(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    resultadoText = ``
    potencia(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `${a} elevado a ${b} es ${resultadoRedP}`
    localStorage.setItem("resultadoPotencia", resultadoText)
    resPot.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStoragePotencia() {
    if (localStorage.getItem("resultadoPotencia") === null) {
        resPot.innerHTML = `El resultado es:`
    } else {
        let mostrar = localStorage.getItem("resultadoPotencia")
        resPot.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStoragePotencia()

// --------------------------- raíz ---------------------------

let formRaizG = document.getElementById("formRaizG")
formRaizG.addEventListener("submit", validarRG)

function raizG(a, b) {
    resultado = parseFloat(b) ** (1/a)
    resultadoRed = redondear2(resultado)
    return resultadoRed;
}

let resRaizG = document.getElementById("resRaizG")

function validarRG(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    resultadoText = ``
    raizG(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La raíz ${a} de ${b} es ${resultadoRed}`
    localStorage.setItem("resultadoRaiz", resultadoText)
    resRaizG.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageRaiz() {
    if (localStorage.getItem("resultadoRaiz") === null) {
        resRaizG.innerHTML = `El resultado es:`
    } else {
        let mostrar = localStorage.getItem("resultadoRaiz")
        resRaizG.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageRaiz()

// --------------------------- sweet alert ---------------------------

const partesPotencia = document.getElementById("partesPotencia")
partesPotencia.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/potencia.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la potencia',
        title: 'Partes de la potencia',
        text: 'La base es el número que se quiere multiplicar. El exponente es el número que indica la cantidad de veces que va a realizarse la multiplicación. Ingresa los valores (números) en el cuadro de la calculadora según corresponda.',
        confirmButtonText: "Ok"
    })
})

const partesRaiz = document.getElementById("partesRaiz")
partesRaiz.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/raiz.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la potencia',
        title: 'Partes de la raíz',
        text: 'El índice es el número que indica el grado de la raíz. El radicando es el número del cual se extrae la raíz. Ingresa los valores (números) en el cuadro de la calculadora según corresponda.',
        confirmButtonText: "Ok"
    })
})