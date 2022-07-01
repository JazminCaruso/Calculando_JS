// --------------------------- suma ---------------------------

let formSuma = document.getElementById("formSuma")
formSuma.addEventListener("submit", validarS)

function sumar(a, b) {
    resultado = parseFloat(a) + parseFloat(b)
    return resultado;
}

let resSuma = document.getElementById("resSuma")

function validarS(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[0].value
    let b = form.children[2].value
    sumar(a,b)
    let resultadoText = `El resultado de ${a} + ${b} es ${resultado}`
    resSuma.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- resta ---------------------------

let formResta = document.getElementById("formResta")
formResta.addEventListener("submit", validarR)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

function restar(a, b) {
    resultado = parseFloat(a) - parseFloat(b)
    resultadoRed = redondear2(resultado)
    return resultadoRed;
}

let resResta = document.getElementById("resResta")

function validarR(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[0].value
    let b = form.children[2].value
    restar(a,b)
    let resultadoText = `El resultado de ${a} - ${b} es ${resultadoRed}`
    resResta.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- multiplicación ---------------------------

let formMult = document.getElementById("formMult")
formMult.addEventListener("submit", validarM)

let resultadoM = 0
function multiplicar(a, b) {
    resultado = parseFloat(a) * parseFloat(b)
    return resultado;
}

let resMult = document.getElementById("resMult")

function validarM(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[0].value
    let b = form.children[2].value
    multiplicar(a,b)
    let resultadoText = `El resultado de ${a} x ${b} es ${resultado}`
    resMult.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- división ---------------------------

let formDiv = document.getElementById("formDiv")
formDiv.addEventListener("submit", validarD)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

function dividir(a, b) {
    resultado = parseFloat(a) / parseFloat(b)
    resultadoRedD = redondear2(resultado)
    return resultadoRedD;
}

let resDiv = document.getElementById("resDiv")

function validarD(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[0].value
    let b = form.children[2].value
    dividir(a,b)
    let resultadoText = `El resultado de ${a} / ${b} es ${resultadoRedD}`
    resDiv.innerHTML = `${resultadoText}`;
    form.reset()
}