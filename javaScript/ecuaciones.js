// --------------------------- primer grado ---------------------------

let formulario = document.getElementById("formulario1")
formulario.addEventListener("submit", validar)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

let operacion = 0
let resultado = 0
function ecPrimerGrado(a, b) {
    if (a == 0) {
        resultado = "inexistente"
    } else {
        operacion = (-b) / a
        resultado = redondear2(operacion)
    return resultado;
    }
}

let ecuac = document.getElementById("ecL")
let result = document.getElementById("resL")

function validar(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    ecPrimerGrado(a,b)
    let bNeg = b*-1
    b >= 0 ?  ecuacion = `La ecuación es: ${a}X + ${b} = 0` : ecuacion = `La ecuación es: ${a}X - ${bNeg} = 0`
    let resultadoText = `La raíz es: ${resultado}`
    ecuac.innerHTML = `${ecuacion}`;
    result.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- segundo grado ---------------------------

let formularioC = document.getElementById("formulario2")
formularioC.addEventListener("submit", validarC)

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

let resultadoC = 0
function ecSegundoGrado(aC, bC, cC) {
    if (bC > 0) {
        x_1 = (-bC - ((bC**2 - 4*aC*cC)**0.5)) / (2.0 * aC);
        x_2 = (cC / aC) / x_1;
        resultadoC = [x_1, x_2];
    } else {
        x_1 = (-bC + ((bC**2 - 4*aC*cC)**0.5)) / (2.0 * aC);
        x_2 = (cC / aC) / x_1;
        resultadoC = [x_1, x_2];
    }
    return resultadoC
}


let ecuacC = document.getElementById("ecC")
let resultC = document.getElementById("resC")

function validarC(e) {
    e.preventDefault()
    let form = e.target
    let aC = form.children[1].value
    let bC = form.children[4].value
    let cC = form.children[7].value
    ecSegundoGrado(aC, bC, cC)
    let bCNeg = bC*-1
    let cCNeg = cC*-1
    if ((bC>=0) && (cC>=0)) {
        ecuacionC = `La ecuación es: ${aC}X² + ${bC}X + ${cC}= 0`
    } else if ((bC<0) && (cC<0)) {
        ecuacionC = `La ecuación es: ${aC}X² - ${bCNeg}X - ${cCNeg} = 0`
    } else if ((bC<0) && (cC>=0)) {
        ecuacionC = `La ecuación es: ${aC}X² - ${bCNeg}X + ${cC} = 0`
    } else if ((bC>=0) && (cC<0)) {
        ecuacionC = `La ecuación es: ${aC}X² + ${bC}X - ${cCNeg} = 0`
    }
    if ((bC**2 - 4*aC*cC) < 0) {
        resultadoTextC = `No existe solución real`
    } else if (aC == 0) {
        resultadoTextC = `La ecuación no es cuadrática`
    } else {
        resultadoTextC = `Las raíces son: ${redondear2(resultadoC[0])} y ${redondear2(resultadoC[1])}`
    }
    ecuacC.innerHTML = `${ecuacionC}`;
    resultC.innerHTML = `${resultadoTextC}`;
    form.reset()
}