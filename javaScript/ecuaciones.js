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
    if (b>=0) {
        ecuacion = `La ecuación es: ${a}X + ${b} = 0`
    } else {
        ecuacion = `La ecuación es: ${a}X - ${bNeg} = 0`
    }
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


// let coefLineal = document.getElementById("coefLineal")
// let terminoInd = document.getElementById("terminoInd")

// coefLineal.addEventListener("change", () => {
//     a = coefLineal.value
// })

// terminoInd.addEventListener("change", () => {
//     b = terminoInd.value
// })


// console.log(ecPrimerGrado(a,b))




// let coefLineal = prompt("Ingrese el coeficiente lineal:")
// let a = parseInt(coefLineal)
// let terminoInd = prompt("Ingrese el término independiente:")
// let b = parseInt(terminoInd)

// let operacion = 0
// let resultado = 0
// function ecPrimerGrado(a, b) {
//     if (a == 0) {
//         resultado = "inexistente"
//     } else {
//         operacion = (-b) / a
//         resultado = operacion.toFixed(3)
//     return resultado;
//     }
// }

// ecPrimerGrado(a,b)

// let bNeg = b*-1
// if (b>=0) {
//     ecuacion = `La ecuación es ${a}X + ${b} = 0`
// } else {
//     ecuacion = `La ecuación es ${a}X - ${bNeg} = 0`
// }

// let resultadoText = `La raíz es ${resultado}`

// let ecuac = document.getElementById("ecL")
// ecuac.innerHTML = `${ecuacion}`;

// let result = document.getElementById("resL")
// result.innerHTML = `${resultadoText}`;

// ----------------------- ecuación primer grado -----------------------

// let coefLineal = document.getElementById("coefLineal")
// let a = parseInt(coefLineal.value)
// let terminoInd = document.getElementById("terminoInd")
// let b = parseInt(terminoInd.value)

// let operacion = 0
// let resultado = 0
// function ecPrimerGrado(a, b) {
//     if (a == 0) {
//         resultado = "inexistente"
//     } else {
//         operacion = (-b) / a
//         resultado = operacion.toFixed(2)
//     }
//     return resultado;
// }

// ecPrimerGrado(a,b)

// let bNeg = b*-1
// if (b>=0) {
//     ecuacion = `La ecuación es: ${a}X + ${b} = 0`
// } else {
//     ecuacion = `La ecuación es: ${a}X - ${bNeg} = 0`
// }

// let resultadoText = `La raíz es: ${resultado}`

// let ecuac = document.getElementById("ecL")
// let result = document.getElementById("resL")

// let botonCalc = document.getElementById("botonCalc")

// botonCalc.addEventListener("click", calcular)
// function calcular() {
//     ecuac.innerHTML = `${ecuacion}`;
//     result.innerHTML = `${resultadoText}`;
// }

// // ----------------------- ecuación segundo grado -----------------------

// let coefCuadC = document.getElementById("coefCuadC").value
// let aC = parseInt(coefCuadC)
// let coefLinealC = document.getElementById("coefLinealC").value
// let bC = parseInt(coefLinealC)
// let terminoIndC = document.getElementById("terminoIndC").value
// let cC = parseInt(terminoIndC)

// let resultadoC = 0
// function ecSegundoGrado(aC, bC, cC) {
//     if (bC > 0) {
//         x_1 = (-bC - ((bC**2 - 4*aC*cC)**0.5)) / (2.0 * aC);
//         x_2 = (cC / aC) / x_1;
//         resultadoC = [x_1, x_2];
//     } else {
//         x_1 = (-bC + ((bC**2 - 4*aC*cC)**0.5)) / (2.0 * aC);
//         x_2 = (cC / aC) / x_1;
//         resultadoC = [x_1, x_2];
//     }
//     return resultadoC
// }

// ecSegundoGrado(aC, bC, cC)

// let bCNeg = bC*-1
// let cCNeg = cC*-1
// if ((bC>=0) && (cC>=0)) {
//     ecuacionC = `La ecuación es: ${aC}X² + ${bC}X + ${cC}= 0`
// } else if ((bC<0) && (cC<0)) {
//     ecuacionC = `La ecuación es: ${aC}X² - ${bCNeg}X - ${cCNeg} = 0`
// } else if ((bC<0) && (cC>=0)) {
//     ecuacionC = `La ecuación es: ${aC}X² - ${bCNeg}X + ${cC} = 0`
// } else if ((bC>=0) && (cC<0)) {
//     ecuacionC = `La ecuación es: ${aC}X² + ${bC}X - ${cCNeg} = 0`
// }

// if ((bC**2 - 4*aC*cC) < 0) {
//     resultadoTextC = `No existe solución real`
// } else if (aC == 0) {
//     resultadoTextC = `La ecuación no es cuadrática`
// } else {
//     resultadoTextC = `Las raíces son: ${resultadoC[0].toFixed(2)} y ${resultadoC[1].toFixed(2)}`
// }

// let ecuacC = document.getElementById("ecC")
// let resultC = document.getElementById("resC")

// let botonCalcC = document.getElementById("botonCalcC")

// botonCalcC.addEventListener("click", calcularC)
// function calcularC() {
//     ecuacC.innerHTML = `${ecuacionC}`;
//     resultC.innerHTML = `${resultadoTextC}`;
// }





// let calcu = document.querySelector(".seccionCalcu");

// let tabla = document.createElement("table");
// tabla.className = "calcuMG table-bordered"

// let fila1 = document.createElement("tr");
// fila1.className = "fila"
// let columna1 = document.createElement("th");
// columna1.innerHTML = "PRIMER GRADO / LINEAL";
// columna1.className = "tituloCalcu";

// let fila2 = document.createElement("tr");
// let columna2 = document.createElement("th");
// let input2 = document.createElement("input");
// input2.className = "input form-control"
// columna2.innerHTML = "<p>Coefiente lineal:</p>";
// columna2.className = "cuadroOperaciones";

// let fila3 = document.createElement("tr");
// let columna3 = document.createElement("th");
// let input3 = document.createElement("input");
// input3.className = "input form-control"
// columna3.innerHTML = "<p>Término independiente:</p>";
// columna3.className = "cuadroOperaciones";

// let fila4 = document.createElement("tr");
// let columna4 = document.createElement("th");
// columna4.className = "resultadoCalcu"
// let boton = document.createElement("button");
// boton.innerHTML = "<p>Calcular</p>"
// boton.className = "botonCalc"

// let fila5 = document.createElement("tr");
// let columna5 = document.createElement("th");
// columna5.innerHTML = `${ecuacion}`;
// columna5.className = "resultadoCalcu"

// let fila6 = document.createElement("tr");
// let columna6 = document.createElement("th");
// columna6.innerHTML = `${resultadoText}`;
// columna6.className = "resultadoCalcu"


// fila1.append(columna1);
// columna2.append(input2);
// fila2.append(columna2);
// columna3.append(input3);
// fila3.append(columna3);
// columna4.append(boton);
// fila4.append(columna4);
// fila5.append(columna5);
// fila6.append(columna6);
// tabla.append(fila1);
// tabla.append(fila2);
// tabla.append(fila3);
// tabla.append(fila4);
// tabla.append(fila5);
// tabla.append(fila6);
// calcu.append(tabla);