// --------------------------- redondeo ---------------------------

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- distancia  ---------------------------

let formularioDist = document.getElementById("formDist")
formularioDist.addEventListener("submit", validarD)

let resultado = 0
function distancia(a, b) {
    resultado = parseFloat(a)*parseFloat(b)
    resRed = redondear2(resultado)
    return resRed;
}

let resultD = document.getElementById("resD")

function validarD(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultadoText = ``
    distancia(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La distancia es: ${resRed} metros`
    resultD.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- distancia según posición  ---------------------------

let formularioDistP = document.getElementById("formDistP")
formularioDistP.addEventListener("submit", validarDP)

function distanciaP(a, b) {
    resultado = parseFloat(b) - parseFloat(a)
    resultado < 0 ? res = resultado * (-1) : res = resultado
    resRed = redondear2(res)
    return resRed
}

let resultDP = document.getElementById("resDP")

function validarDP(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultadoText = ``
    distanciaP(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La distancia es: ${resRed} metros`
    resultDP.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- velocidad  ---------------------------

let formularioVel = document.getElementById("formVel")
formularioVel.addEventListener("submit", validarV)

function velocidad(a, b) {
    resultado = parseFloat(a)/parseFloat(b)
    resRed = redondear2(resultado)
    return resRed;
}

let resultV = document.getElementById("resV")

function validarV(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultadoText = ``
    velocidad(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La velocidad es: ${resRed} m/s`
    resultV.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- tiempo  ---------------------------

let formularioTiempo = document.getElementById("formTiempo")
formularioTiempo.addEventListener("submit", validarT)

function tiempo(a, b) {
    resultado = parseFloat(a)/parseFloat(b)
    resRed = redondear2(resultado)
    return resRed;
}

let resultT = document.getElementById("resT")

function validarT(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultadoText = ``
    tiempo(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El tiempo es: ${resRed} s`
    resultT.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- posición ---------------------------

let formularioPos = document.getElementById("formPos")
formularioPos.addEventListener("submit", validarP)

function posicion(a, b, c) {
    resultado = parseFloat(a) + (parseFloat(b)*parseFloat(c))
    resRed = redondear2(resultado)
    return resRed;
}

let resultP = document.getElementById("resP")

function validarP(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultadoText = ``
    posicion(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La posición final es: ${resRed} metros`
    resultP.innerHTML = `${resultadoText}`;
    form.reset()
}