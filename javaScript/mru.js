// --------------------------- distancia  ---------------------------

let formularioDist = document.getElementById("formDist")
formularioDist.addEventListener("submit", validarD)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

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
    distancia(a, b)
    let resultadoText = `La distancia es: ${resRed} metros`
    resultD.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- distancia según posición  ---------------------------

let formularioDistP = document.getElementById("formDistP")
formularioDistP.addEventListener("submit", validarDP)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

function distanciaP(a, b) {
    resultado = parseFloat(b) - parseFloat(a)
    if (resultado < 0) {
        res = resultado * (-1)
    } else {
        res = resultado
    }
    resRed = redondear2(res)
    return resRed
}

let resultDP = document.getElementById("resDP")

function validarDP(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    distanciaP(a, b)
    let resultadoText = `La distancia es: ${resRed} metros`
    resultDP.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- velocidad  ---------------------------

let formularioVel = document.getElementById("formVel")
formularioVel.addEventListener("submit", validarV)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

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
    velocidad(a, b)
    let resultadoText = `La velocidad es: ${resRed} m/s`
    resultV.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- tiempo  ---------------------------

let formularioTiempo = document.getElementById("formTiempo")
formularioTiempo.addEventListener("submit", validarT)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

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
    tiempo(a, b)
    let resultadoText = `El tiempo es: ${resRed} s`
    resultT.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- posición ---------------------------

let formularioPos = document.getElementById("formPos")
formularioPos.addEventListener("submit", validarP)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

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
    posicion(a, b, c)
    let resultadoText = `La posición final es: ${resRed} metros`
    resultP.innerHTML = `${resultadoText}`;
    form.reset()
}