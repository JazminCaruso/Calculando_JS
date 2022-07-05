// --------------------------- redondeo ---------------------------

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- velocidad 1 ---------------------------

let formularioVel1 = document.getElementById("formVel1")
formularioVel1.addEventListener("submit", validarV1)

let resultado = 0
function velocidad1(a, b, c) {
    resultado = parseFloat(a) + (parseFloat(b)*parseFloat(c))
    resRed = redondear2(resultado)
    return resRed;
}

let resultV1 = document.getElementById("resV1")

function validarV1(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    velocidad1(a, b, c)
    let resultadoText = `La velocidad es: ${resRed} m/s`
    resultV1.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- velocidad 2 ---------------------------

let formularioVel2 = document.getElementById("formVel2")
formularioVel2.addEventListener("submit", validarV2)

function velocidad2(a, b, c) {
    resultado = ((parseFloat(a)**2) + (2*parseFloat(b)*parseFloat(c)))**0.5
    resRed = redondear2(resultado)
    return resRed;
}

let resultV2 = document.getElementById("resV2")

function validarV2(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    velocidad2(a, b, c)
    let resultadoText = `La velocidad es: ${resRed} m/s`
    resultV2.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- aceleración ---------------------------

let formularioAcel = document.getElementById("formAcel")
formularioAcel.addEventListener("submit", validarA)

function aceleracion(a, b, c) {
    resultado = (parseFloat(b) - parseFloat(a)) / parseFloat(c)
    resRed = redondear2(resultado)
    return resRed;
}

let resultA = document.getElementById("resA")

function validarA(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    aceleracion(a, b, c)
    let resultadoText = `La aceleración es: ${resRed} m/s²`
    resultA.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- tiempo ---------------------------

let formularioTiempo = document.getElementById("formTiempo")
formularioTiempo.addEventListener("submit", validarT)

function tiempo(a, b, c) {
    resultado = (parseFloat(b) - parseFloat(a)) / parseFloat(c)
    resRed = redondear2(resultado)
    return resRed;
}

let resultT = document.getElementById("resT")

function validarT(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    tiempo(a, b, c)
    let resultadoText = `El tiempo es: ${resRed} s`
    resultT.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- distancia 1 ---------------------------

let formularioDis1 = document.getElementById("formDis1")
formularioDis1.addEventListener("submit", validarD1)

function distancia1(a, b, c) {
    resultado = ((parseFloat(a) + parseFloat(b)) / 2)*(parseFloat(c))
    resRed = redondear2(resultado)
    return resRed;
}

let resultD1 = document.getElementById("resD1")

function validarD1(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    distancia1(a, b, c)
    let resultadoText = `La distancia es: ${resRed} metros`
    resultD1.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- distancia 2 ---------------------------

let formularioDis2 = document.getElementById("formDis2")
formularioDis2.addEventListener("submit", validarD2)

function distancia2(a, b, c) {
    resultado = (parseFloat(a)*parseFloat(c)) + ((parseFloat(b)*(parseFloat(c)**2))/2)
    resRed = redondear2(resultado)
    return resRed;
}

let resultD2 = document.getElementById("resD2")

function validarD2(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    distancia2(a, b, c)
    let resultadoText = `La distancia es: ${resRed} metros`
    resultD2.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- distancia 3 ---------------------------

let formularioDis3 = document.getElementById("formDis3")
formularioDis3.addEventListener("submit", validarD3)

function distancia3(a, b, c) {
    resultado = (parseFloat(b)**2 - parseFloat(a)**2) / (2*parseFloat(c))
    resRed = redondear2(resultado)
    return resRed;
}

let resultD3 = document.getElementById("resD3")

function validarD3(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    distancia3(a, b, c)
    let resultadoText = `La distancia es: ${resRed} metros`
    resultD3.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- posicion ---------------------------

let formularioPos = document.getElementById("formPos")
formularioPos.addEventListener("submit", validarP)

function posicion(a, b, c, d) {
    resultado = parseFloat(a) + (parseFloat(b)*parseFloat(d)) + ((parseFloat(c)*(parseFloat(d)**2))/2)
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
    let d = form.children[10].value
    posicion(a, b, c, d)
    let resultadoText = `La posición es: ${resRed} metros`
    resultP.innerHTML = `${resultadoText}`;
    form.reset()
}