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

let resultI1 = document.getElementById("resI1")
let resultI2 = document.getElementById("resI2")

function validar(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    intereses(a,b)
    let resultadoTex = `El interés agregado es: ${resRed} pesos`
    resultI1.innerHTML = `${resultadoTex}`;
    let resultadoText = `El valor final es: ${resFinal} pesos`
    resultI2.innerHTML = `${resultadoText}`;
    form.reset()
}