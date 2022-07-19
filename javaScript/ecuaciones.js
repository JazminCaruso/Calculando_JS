// --------------------------- redondeo ---------------------------

function roundTo2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- primer grado ---------------------------

let formLinearEquation = document.getElementById("formLinearEquation")
formLinearEquation.addEventListener("submit", validateLinearEquation)

let operation = 0
let result = 0
function linearEquation(a, b) {
    operation = (parseFloat(-b)) / parseFloat(a)
    result = roundTo2(operation)
    return result;
}

let showLinearEquation = document.getElementById("showLinearEquation")
let resultLinearEquation = document.getElementById("resultLinearEquation")

function validateLinearEquation(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    linearEquation(a,b)
    let bNeg = b*-1
    b >= 0 ?  equation = `La ecuación es: ${a}X + ${b} = 0` : equation = `La ecuación es: ${a}X - ${bNeg} = 0`
    if ((a == 0) && isNaN(b)) {
        resultEquation = `No existe raíz y los valores deben ser numéricos`
        equation = `No es posible calcular la ecuación`
    } else if (isNaN(a) || isNaN(b)) {
        resultEquation = `Debe ingresar valores numéricos`
        equation = `No es posible calcular la ecuación`
    } else if (a == 0) {
        resultEquation = `No existe raíz`
    } else {
        resultEquation = `La raíz es: ${result}`
    }
    localStorage.setItem("resultLinearEquation", resultEquation)
    localStorage.setItem("linearEquation", equation)
    showLinearEquation.innerHTML = `${equation}`;
    resultLinearEquation.innerHTML = `${resultEquation}`;
    form.reset()
}

function getLocalStorageLinearEquationResult() {
    if (localStorage.getItem("resultLinearEquation") === null) {
        resultLinearEquation.innerHTML = `La raíz es:`
    } else {
        let show = localStorage.getItem("resultLinearEquation")
        resultLinearEquation.innerHTML = `${show}`;
    }
}

function getLocalStorageLinearEquation() {
    if (localStorage.getItem("linearEquation") === null) {
        showLinearEquation.innerHTML = `La ecuación es:`
    } else {
        let show = localStorage.getItem("linearEquation")
        showLinearEquation.innerHTML = `${show}`;
    }
}

getLocalStorageLinearEquationResult()
getLocalStorageLinearEquation()

// --------------------------- segundo grado ---------------------------

let formQuadraticEquation = document.getElementById("formQuadraticEquation")
formQuadraticEquation.addEventListener("submit", validateQuadraticEquation)

function quadraticEquation(aC, bC, cC) {
    let a = parseFloat(aC)
    let b = parseFloat(bC)
    let c = parseFloat(cC)
    if (b > 0) {
        x_1 = (-b - ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
        x_2 = (c / a) / x_1;
        result = [x_1, x_2];
    } else {
        x_1 = (-b + ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
        x_2 = (c / a) / x_1;
        result = [x_1, x_2];
    }
    return result
}


let showQuadraticEquation = document.getElementById("showQuadraticEquation")
let resultQuadraticEquation = document.getElementById("resultQuadraticEquation")

function validateQuadraticEquation(e) {
    e.preventDefault()
    let form = e.target
    let aC = form.children[1].value
    let bC = form.children[4].value
    let cC = form.children[7].value
    quadraticEquation(aC, bC, cC)
    let bCNeg = bC*-1
    let cCNeg = cC*-1
    if ((bC>=0) && (cC>=0)) {
        equation = `La ecuación es: ${aC}X² + ${bC}X + ${cC}= 0`
    } else if ((bC<0) && (cC<0)) {
        equation = `La ecuación es: ${aC}X² - ${bCNeg}X - ${cCNeg} = 0`
    } else if ((bC<0) && (cC>=0)) {
        equation = `La ecuación es: ${aC}X² - ${bCNeg}X + ${cC} = 0`
    } else if ((bC>=0) && (cC<0)) {
        equation = `La ecuación es: ${aC}X² + ${bC}X - ${cCNeg} = 0`
    }
    if ((bC**2 - 4*aC*cC) < 0) {
        resultEquation = `No existe solución real`
    } else if ((aC == 0) && (isNaN(aC) || isNaN(bC) || isNaN(cC))) {
        resultEquation = `La ecuación no es cuadrática y los valores deben ser numéricos`
        equation = `No es posible calcular la ecuación`
    } else if (aC == 0) {
        resultEquation = `La ecuación no es cuadrática`
    } else if (isNaN(aC) || isNaN(bC) || isNaN(cC)) {
        resultEquation = `Debe ingresar valores numéricos`
        equation = `No es posible calcular la ecuación`
    } else {
        resultEquation = `Las raíces son: ${roundTo2(result[0])} y ${roundTo2(result[1])}`
    }
    localStorage.setItem("resultQuadraticEquation", resultEquation)
    localStorage.setItem("quadraticEquation", equation)
    showQuadraticEquation.innerHTML = `${equation}`;
    resultQuadraticEquation.innerHTML = `${resultEquation}`;
    form.reset()
}

function getLocalStorageQuadraticEquationResult() {
    if (localStorage.getItem("resultQuadraticEquation") === null) {
        resultQuadraticEquation.innerHTML = `Las raíces son:`
    } else {
        let show = localStorage.getItem("resultQuadraticEquation")
        resultQuadraticEquation.innerHTML = `${show}`;
    }
}

function getLocalStorageQuadraticEquation() {
    if (localStorage.getItem("quadraticEquation") === null) {
        showQuadraticEquation.innerHTML = `La ecuación es:`
    } else {
        let show = localStorage.getItem("quadraticEquation")
        showQuadraticEquation.innerHTML = `${show}`;
    }
}

getLocalStorageQuadraticEquationResult()
getLocalStorageQuadraticEquation()

// --------------------------- sweet alert ---------------------------

const infoLinearEquation = document.getElementById("infoLinearEquation")
infoLinearEquation.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/ecuacionPG.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la ecuación lineal',
        title: 'Partes de la ecuación lineal',
        text: 'El coeficiente lineal es el número que está multiplicado por la incógnita. El término independiente no se encuentra acompañado por la incógnita. Ingresa los valores (números) según corresponda.',
        confirmButtonText: "Ok"
    })
})

const infoQuadraticEquation = document.getElementById("infoQuadraticEquation")
infoQuadraticEquation.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/ecuacionSG.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la potencia',
        title: 'Partes de la ecuación cuadrática',
        text: 'El coeficiente cuadrático es el número que está multiplicado por la incógnita elevada al cuadrado. El coeficiente lineal es el número que está multiplicado por la incógnita. El término independiente no se encuentra acompañado por la incógnita. Ingresa los valores (números) según corresponda.',
        confirmButtonText: "Ok"
    })
})