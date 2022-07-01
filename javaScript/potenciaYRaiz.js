// --------------------------- potencia ---------------------------

let formPot = document.getElementById("formPot")
formPot.addEventListener("submit", validarP)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

function potencia(a, b) {
    resultado = parseFloat(a) ** parseFloat(b)
    resultadoRedP = redondear2(resultado)
    return resultadoRedP;
}

let resPot = document.getElementById("resPot")

function validarP(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[0].value
    let b = form.children[2].value
    potencia(a, b)
    resultadoText = `${a} elevado a ${b} es ${resultadoRedP}`
    resPot.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- raíz ---------------------------

let formRaizG = document.getElementById("formRaizG")
formRaizG.addEventListener("submit", validarRG)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

function raizG(a, b) {
    resultado = parseFloat(b) ** (1/a)
    resultadoRed = redondear2(resultado)
    return resultadoRed;
}

let resRaizG = document.getElementById("resRaizG")

function validarRG(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[3].value
    raizG(a, b)
    resultadoText = `La raíz ${a} de ${b} es ${resultadoRed}`
    resRaizG.innerHTML = `${resultadoText}`;
    form.reset()
}