// --------------------------- redondeo ---------------------------

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- suma ---------------------------

let formSuma = document.getElementById("formSuma")
formSuma.addEventListener("submit", validarS)

let resultado = 0;
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
    let resultadoText = ``
    sumar(a,b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El resultado de ${a} + ${b} es ${resultado}`
    localStorage.setItem("resultadoGuardadooo", resultadoText)
    let resultadoFinal = localStorage.getItem("resultadoGuardadooo")
    resSuma.innerHTML = `${resultadoFinal}`;
    form.reset()
}

// --------------------------- resta ---------------------------

let formResta = document.getElementById("formResta")
formResta.addEventListener("submit", validarR)

let resultadoRed = 0;
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
    let resultadoText = ``
    restar(a,b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El resultado de ${a} - ${b} es ${resultadoRed}`
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
    let resultadoText = ``
    multiplicar(a,b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El resultado de ${a} x ${b} es ${resultado}` 
    resMult.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- división ---------------------------

let formDiv = document.getElementById("formDiv")
formDiv.addEventListener("submit", validarD)

let resultadoRedD = 0;
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
    let resultadoText = ``
    dividir(a,b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El resultado de ${a} / ${b} es ${resultadoRedD}`
    resDiv.innerHTML = `${resultadoText}`;
    form.reset()
}