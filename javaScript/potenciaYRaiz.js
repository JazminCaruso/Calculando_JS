// --------------------------- redondeo ---------------------------

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- potencia ---------------------------

let formPot = document.getElementById("formPot")
formPot.addEventListener("submit", validarP)

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
    resultadoText = ``
    potencia(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `${a} elevado a ${b} es ${resultadoRedP}`
    resPot.innerHTML = `${resultadoText}`;
    form.reset()
}

// --------------------------- raíz ---------------------------

let formRaizG = document.getElementById("formRaizG")
formRaizG.addEventListener("submit", validarRG)

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
    resultadoText = ``
    raizG(a, b)
    isNaN(a) || isNaN(b) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La raíz ${a} de ${b} es ${resultadoRed}`
    resRaizG.innerHTML = `${resultadoText}`;
    form.reset()
}

const partesPotencia = document.getElementById("partesPotencia")
partesPotencia.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/potencia.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la potencia',
        text: 'En la imagen podes ver los nombres de las partes de la raíz. Ingresa los datos según corresponda',
        confirmButtonText: "Ok"
    })
})

const partesRaiz = document.getElementById("partesRaiz")
partesRaiz.addEventListener('click', () => {
    Swal.fire({
        imageUrl: "../../img/raiz.jpg",
        imageHeight: 300,
        imageAlt: 'Partes de la potencia',
        confirmButtonText: "Ok"
    })
})
