// --------------------------- interés ---------------------------

let formularioInt = document.getElementById("formularioInt")
formularioInt.addEventListener("submit", validar)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

let resultado = 0 
let resRed = 0
let resFinal = 0

function intereses(a, b) {
    resultado = (parseFloat(a)*parseFloat(b))/100
    resRed = redondear2(resultado)
    resFinal = resRed + parseFloat(a)
    return resFinal;
}

let resultI0 = document.getElementById("resI0")
let resultI1 = document.getElementById("resI1")
let resultI2 = document.getElementById("resI2")

function validar(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let resultadoTe = ``
    let resultadoTex = ``
    let resultadoText = ``
    intereses(a,b)
    if (isNaN(a) || isNaN(b)) {
        resultadoTe = `Debe ingresar valores numéricos`
        resultadoTex = ``
        resultadoText = ``
    } else {
        resultadoTe = `Si el precio es ${a} pesos y la tasa de interés es ${b}`
        resultadoTex = `El interés es: ${resRed}`
        resultadoText = `El precio final es: ${resFinal} pesos`
    }
    localStorage.setItem("datosIntereses", resultadoTe)
    localStorage.setItem("valorAgregado", resultadoTex)
    localStorage.setItem("valorFinal", resultadoText)
    resultI0.innerHTML = `${resultadoTe}`;
    resultI1.innerHTML = `${resultadoTex}`;
    resultI2.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageDatos() {
    if (localStorage.getItem("datosIntereses") === null) {
        resultI0.innerHTML = ``
    } else {
        let mostrar = localStorage.getItem("datosIntereses")
        resultI0.innerHTML = `${mostrar}`;
    }
}

function obtenerLocalStorageValorA() {
    if (localStorage.getItem("valorAgregado") === null) {
        resultI1.innerHTML = `El valor agregado es:`
    } else {
        let mostrar = localStorage.getItem("valorAgregado")
        resultI1.innerHTML = `${mostrar}`;
    }
}

function obtenerLocalStorageValorF() {
    if (localStorage.getItem("valorFinal") === null) {
        resultI2.innerHTML = `El valor final es:`
    } else {
        let mostrar = localStorage.getItem("valorFinal")
        resultI2.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageDatos()
obtenerLocalStorageValorA()
obtenerLocalStorageValorF()
