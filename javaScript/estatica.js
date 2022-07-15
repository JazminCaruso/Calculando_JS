// --------------------------- redondeo ---------------------------

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- masa según peso  ---------------------------

let formularioMasaP = document.getElementById("formMasaP")
formularioMasaP.addEventListener("submit", validarMP)

function masaPeso(a) {
    resultado = parseFloat(a)/9.8
    resRed = redondear2(resultado)
    return resRed;
}

let resultMP = document.getElementById("resMP")

function validarMP(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let resultadoText = ``
    masaPeso(a)
    isNaN(a) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El valor de la masa es: ${resRed} kg`
    localStorage.setItem("valorMP", resultadoText)
    resultMP.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageMP() {
    if (localStorage.getItem("valorMP") === null) {
        resultMP.innerHTML = `El valor de la masa es:`
    } else {
        let mostrar = localStorage.getItem("valorMP")
        resultMP.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageMP()

// --------------------------- peso  ---------------------------

let formularioPeso = document.getElementById("formPeso")
formularioPeso.addEventListener("submit", validarP)

function peso(a) {
    resultado = parseFloat(a)*9.8
    resRed = redondear2(resultado)
    return resRed;
}

let resultP = document.getElementById("resP")

function validarP(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let resultadoText = ``
    peso(a)
    isNaN(a) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El valor del peso es: ${resRed} N`
    localStorage.setItem("valorP", resultadoText)
    resultP.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageP() {
    if (localStorage.getItem("valorP") === null) {
        resultP.innerHTML = `El valor del peso es:`
    } else {
        let mostrar = localStorage.getItem("valorP")
        resultP.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageP()

// --------------------------- masa según fuerza  ---------------------------

let formularioMasaF = document.getElementById("formMasaF")
formularioMasaF.addEventListener("submit", validarMF)

function masaFuerza(a, b) {
    resultado = parseFloat(a)/parseFloat(b)
    resRed = redondear2(resultado)
    return resRed;
}

let resultMF = document.getElementById("resMF")

function validarMF(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultadoText = ``
    masaFuerza(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El valor de la masa es: ${resRed} kg`
    localStorage.setItem("valorMF", resultadoText)
    resultMF.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageMF() {
    if (localStorage.getItem("valorMF") === null) {
        resultMF.innerHTML = `El valor de la masa es:`
    } else {
        let mostrar = localStorage.getItem("valorMF")
        resultMF.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageMF()

// --------------------------- fuerza  ---------------------------

let formularioFuerza = document.getElementById("formFuerza")
formularioFuerza.addEventListener("submit", validarF)

function fuerza(a, b) {
    resultado = parseFloat(a)*parseFloat(b)
    resRed = redondear2(resultado)
    return resRed;
}

let resultF = document.getElementById("resF")

function validarF(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultadoText = ``
    fuerza(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El valor de la fuerza es: ${resRed} N`
    localStorage.setItem("valorF", resultadoText)
    resultF.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageF() {
    if (localStorage.getItem("valorF") === null) {
        resultF.innerHTML = `El valor de la fuerza es:`
    } else {
        let mostrar = localStorage.getItem("valorF")
        resultF.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageF()