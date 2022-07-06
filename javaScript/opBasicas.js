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

let sumaA = document.getElementById("sumaA")
let sumaB = document.getElementById("sumaB")

function validarS(e) {
    e.preventDefault()
    let form = e.target
    let a = sumaA.value
    let b = sumaB.value
    let resultadoText = ``
    sumar(a,b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El resultado de ${a} + ${b} es ${resultado}`
    localStorage.setItem("resultadoSuma", resultadoText)
    resSuma.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageSuma() {
    if (localStorage.getItem("resultadoSuma") === null) {
        resSuma.innerHTML = `El resultado es:`
    } else {
        let mostrar = localStorage.getItem("resultadoSuma")
        resSuma.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageSuma()

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

let restaA = document.getElementById("restaA")
let restaB = document.getElementById("restaB")

function validarR(e) {
    e.preventDefault()
    let form = e.target
    let a = restaA.value
    let b = restaB.value
    let resultadoText = ``
    restar(a,b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El resultado de ${a} - ${b} es ${resultadoRed}`
    localStorage.setItem("resultadoResta", resultadoText)
    resResta.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageResta() {
    if (localStorage.getItem("resultadoResta") === null) {
        resResta.innerHTML = `El resultado es:`
    } else {
        let mostrar = localStorage.getItem("resultadoResta")
        resResta.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageResta()

// --------------------------- multiplicación ---------------------------

let formMult = document.getElementById("formMult")
formMult.addEventListener("submit", validarM)

let resultadoM = 0
function multiplicar(a, b) {
    resultado = parseFloat(a) * parseFloat(b)
    return resultado;
}

let resMult = document.getElementById("resMult")

let multA = document.getElementById("multA")
let multB = document.getElementById("multB")

function validarM(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[0].value
    let b = form.children[2].value
    let resultadoText = ``
    multiplicar(a,b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El resultado de ${a} x ${b} es ${resultado}` 
    localStorage.setItem("resultadoMult", resultadoText)
    resMult.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageMult() {
    if (localStorage.getItem("resultadoMult") === null) {
        resMult.innerHTML = `El resultado es:`
    } else {
        let mostrar = localStorage.getItem("resultadoMult")
        resMult.innerHTML = `${mostrar}`;
    }
    
}

obtenerLocalStorageMult()

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

let divA = document.getElementById("divA")
let divB = document.getElementById("divB")

function validarD(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[0].value
    let b = form.children[2].value
    let resultadoText = ``
    dividir(a,b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El resultado de ${a} / ${b} es ${resultadoRedD}`
    localStorage.setItem("resultadoDiv", resultadoText)
    resDiv.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageDiv() {
    if (localStorage.getItem("resultadoDiv") === null) {
        resDiv.innerHTML = `El resultado es:`
    } else {
        let mostrar = localStorage.getItem("resultadoDiv")
        resDiv.innerHTML = `${mostrar}`;
    }
    
}

obtenerLocalStorageDiv()