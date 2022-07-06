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
        resultadoTe = `Si el precio es ${a} pesos y el interés es de ${b}%`
        resultadoTex = `El valor agregado es: ${resRed} pesos`
        resultadoText = `El valor final es: ${resFinal} pesos`
    }
    resultI0.innerHTML = `${resultadoTe}`;
    resultI1.innerHTML = `${resultadoTex}`;
    resultI2.innerHTML = `${resultadoText}`;
    form.reset()
}