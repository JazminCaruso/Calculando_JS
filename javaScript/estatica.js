// --------------------------- masa según peso  ---------------------------

let formularioMasaP = document.getElementById("formMasaP")
formularioMasaP.addEventListener("submit", validarMP)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

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
    masaPeso(a)
    let resultadoText = `El valor de la masa es: ${resRed} kg`
    resultMP.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- peso  ---------------------------

let formularioPeso = document.getElementById("formPeso")
formularioPeso.addEventListener("submit", validarP)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

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
    peso(a)
    let resultadoText = `El valor del peso es: ${resRed} N`
    resultP.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- masa según fuerza  ---------------------------

let formularioMasaF = document.getElementById("formMasaF")
formularioMasaF.addEventListener("submit", validarMF)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

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
    masaFuerza(a, b)
    let resultadoText = `El valor de la masa es: ${resRed} kg`
    resultMF.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- fuerza  ---------------------------

let formularioFuerza = document.getElementById("formFuerza")
formularioFuerza.addEventListener("submit", validarF)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

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
    fuerza(a, b)
    let resultadoText = `El valor de la fuerza es: ${resRed} N`
    resultF.innerHTML = `${resultadoText}`;
    form.reset()
}