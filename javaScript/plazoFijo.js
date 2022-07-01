// --------------------------- interés ---------------------------

let formularioPF = document.getElementById("formularioPF")
formularioPF.addEventListener("submit", validar)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

let resultado = 0 
let resRed = 0

function plazoFijo(a, b, c) {
    resultado = (((parseFloat(c)/365)*parseFloat(b))*parseFloat(a))/100
    resRed = redondear2(resultado)
    return resRed;
}

let resultPF = document.getElementById("resPF")

function validar(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    plazoFijo(a,b,c)
    let resultadoText = `Lo ganado será: ${resRed} pesos`
    resultPF.innerHTML = `${resultadoText}`;
    form.reset()
}