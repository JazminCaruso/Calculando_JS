// --------------------------- redondeo ---------------------------

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- primer grado ---------------------------

let formulario = document.getElementById("formulario1")
formulario.addEventListener("submit", validar)

let operacion = 0
let resultado = 0
function ecPrimerGrado(a, b) {
    operacion = (parseFloat(-b)) / parseFloat(a)
    resultado = redondear2(operacion)
    return resultado;
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
    if ((a == 0) && isNaN(b)) {
        resultadoText = `No existe raíz y los valores deben ser numéricos`
        ecuacion = `No es posible calcular la ecuación`
    } else if (isNaN(a) || isNaN(b)) {
        resultadoText = `Debe ingresar valores numéricos`
        ecuacion = `No es posible calcular la ecuación`
    } else if (a == 0) {
        resultadoText = `No existe raíz`
    } else {
        resultadoText = `La raíz es: ${resultado}`
    }
    localStorage.setItem("resultadoEcPG", resultadoText)
    localStorage.setItem("ecuacionPG", ecuacion)
    ecuac.innerHTML = `${ecuacion}`;
    result.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageEcuacionPG() {
    if (localStorage.getItem("resultadoEcPG") === null) {
        result.innerHTML = `La raíz es:`
    } else {
        let mostrar = localStorage.getItem("resultadoEcPG")
        result.innerHTML = `${mostrar}`;
    }
}

function obtenerLocalStorageEcuacionPG2() {
    if (localStorage.getItem("ecuacionPG") === null) {
        ecuac.innerHTML = `La ecuación es:`
    } else {
        let mostrar = localStorage.getItem("ecuacionPG")
        ecuac.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageEcuacionPG()
obtenerLocalStorageEcuacionPG2()

// --------------------------- segundo grado ---------------------------

let formularioC = document.getElementById("formulario2")
formularioC.addEventListener("submit", validarC)

let resultadoC = 0
function ecSegundoGrado(aC, bC, cC) {
    let a = parseFloat(aC)
    let b = parseFloat(bC)
    let c = parseFloat(cC)
    if (b > 0) {
        x_1 = (-b - ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
        x_2 = (c / a) / x_1;
        resultadoC = [x_1, x_2];
    } else {
        x_1 = (-b + ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
        x_2 = (c / a) / x_1;
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
    } else if ((aC == 0) && (isNaN(aC) || isNaN(bC) || isNaN(cC))) {
        resultadoTextC = `La ecuación no es cuadrática y los valores deben ser numéricos`
        ecuacionC = `No es posible calcular la ecuación`
    } else if (aC == 0) {
        resultadoTextC = `La ecuación no es cuadrática`
    } else if (isNaN(aC) || isNaN(bC) || isNaN(cC)) {
        resultadoTextC = `Debe ingresar valores numéricos`
        ecuacionC = `No es posible calcular la ecuación`
    } else {
        resultadoTextC = `Las raíces son: ${redondear2(resultadoC[0])} y ${redondear2(resultadoC[1])}`
    }
    localStorage.setItem("resultadoEcSG", resultadoTextC)
    localStorage.setItem("ecuacionSG", ecuacionC)
    ecuacC.innerHTML = `${ecuacionC}`;
    resultC.innerHTML = `${resultadoTextC}`;
    form.reset()
}

function obtenerLocalStorageEcuacionSG() {
    if (localStorage.getItem("resultadoEcSG") === null) {
        resultC.innerHTML = `Las raíces son:`
    } else {
        let mostrar = localStorage.getItem("resultadoEcSG")
        resultC.innerHTML = `${mostrar}`;
    }
}

function obtenerLocalStorageEcuacionSG2() {
    if (localStorage.getItem("ecuacionSG") === null) {
        ecuacC.innerHTML = `La ecuación es:`
    } else {
        let mostrar = localStorage.getItem("ecuacionSG")
        ecuacC.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageEcuacionSG()
obtenerLocalStorageEcuacionSG2()

// --------------------------- sweet alert ---------------------------

const partesEcuacionPG = document.getElementById("partesEcuacionPG")
partesEcuacionPG.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/ecuacionPG.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la ecuación lineal',
        title: 'Partes de la ecuación lineal',
        text: 'El coeficiente lineal es el número que está multiplicado por la incógnita. El término independiente no se encuentra acompañado por la incógnita. Ingresa los valores (números) según corresponda.',
        confirmButtonText: "Ok"
    })
})

const partesEcuacionSG = document.getElementById("partesEcuacionSG")
partesEcuacionSG.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/ecuacionSG.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la potencia',
        title: 'Partes de la ecuación cuadrática',
        text: 'El coeficiente cuadrático es el número que está multiplicado por la incógnita elevada al cuadrado. El coeficiente lineal es el número que está multiplicado por la incógnita. El término independiente no se encuentra acompañado por la incógnita. Ingresa los valores (números) según corresponda.',
        confirmButtonText: "Ok"
    })
})