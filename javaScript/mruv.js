// --------------------------- redondeo ---------------------------

function redondear2(a) {
    return +(Math.round(a + "e+2")  + "e-2");
}

// --------------------------- velocidad 1 ---------------------------

let formularioVel1 = document.getElementById("formVel1")
formularioVel1.addEventListener("submit", validarV1)

let resultado = 0
function velocidad1(a, b, c) {
    resultado = parseFloat(a) + (parseFloat(b)*parseFloat(c))
    resRed = redondear2(resultado)
    return resRed;
}

let resultV1 = document.getElementById("resV1")

function validarV1(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultadoText = ``
    velocidad1(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La velocidad es: ${resRed} m/s`
    localStorage.setItem("valorV1", resultadoText)
    resultV1.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageV1() {
    if (localStorage.getItem("valorV1") === null) {
        resultV1.innerHTML = `La velocidad es:`
    } else {
        let mostrar = localStorage.getItem("valorV1")
        resultV1.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageV1()

// --------------------------- velocidad 2 ---------------------------

let formularioVel2 = document.getElementById("formVel2")
formularioVel2.addEventListener("submit", validarV2)

function velocidad2(a, b, c) {
    resultado = ((parseFloat(a)**2) + (2*parseFloat(b)*parseFloat(c)))**0.5
    resRed = redondear2(resultado)
    return resRed;
}

let resultV2 = document.getElementById("resV2")

function validarV2(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultadoText = ``
    velocidad2(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La velocidad es: ${resRed} m/s`
    localStorage.setItem("valorV2", resultadoText)
    resultV2.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageV2() {
    if (localStorage.getItem("valorV2") === null) {
        resultV2.innerHTML = `La velocidad es:`
    } else {
        let mostrar = localStorage.getItem("valorV2")
        resultV2.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageV2()

// --------------------------- aceleración ---------------------------

let formularioAcel = document.getElementById("formAcel")
formularioAcel.addEventListener("submit", validarA)

function aceleracion(a, b, c) {
    resultado = (parseFloat(b) - parseFloat(a)) / parseFloat(c)
    resRed = redondear2(resultado)
    return resRed;
}

let resultA = document.getElementById("resA")

function validarA(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultadoText = ``
    aceleracion(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La aceleración es: ${resRed} m/s²`
    localStorage.setItem("valorA", resultadoText)
    resultA.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageA() {
    if (localStorage.getItem("valorA") === null) {
        resultA.innerHTML = `La aceleración es:`
    } else {
        let mostrar = localStorage.getItem("valorA")
        resultA.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageA()

// --------------------------- tiempo ---------------------------

let formularioTiempo = document.getElementById("formTiempo")
formularioTiempo.addEventListener("submit", validarT)

function tiempo(a, b, c) {
    resultado = (parseFloat(b) - parseFloat(a)) / parseFloat(c)
    resRed = redondear2(resultado)
    return resRed;
}

let resultT = document.getElementById("resT")

function validarT(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultadoText = ``
    tiempo(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `El tiempo es: ${resRed} s`
    localStorage.setItem("valorT", resultadoText)
    resultT.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageT() {
    if (localStorage.getItem("valorT") === null) {
        resultT.innerHTML = `El tiempo es:`
    } else {
        let mostrar = localStorage.getItem("valorT")
        resultT.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageT()

// --------------------------- distancia 1 ---------------------------

let formularioDis1 = document.getElementById("formDis1")
formularioDis1.addEventListener("submit", validarD1)

function distancia1(a, b, c) {
    resultado = ((parseFloat(a) + parseFloat(b)) / 2)*(parseFloat(c))
    resRed = redondear2(resultado)
    return resRed;
}

let resultD1 = document.getElementById("resD1")

function validarD1(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultadoText = ``
    distancia1(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La distancia es: ${resRed} metros`
    localStorage.setItem("valorD1", resultadoText)
    resultD1.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageD1() {
    if (localStorage.getItem("valorD1") === null) {
        resultD1.innerHTML = `La distancia es:`
    } else {
        let mostrar = localStorage.getItem("valorD1")
        resultD1.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageD1()

// --------------------------- distancia 2 ---------------------------

let formularioDis2 = document.getElementById("formDis2")
formularioDis2.addEventListener("submit", validarD2)

function distancia2(a, b, c) {
    resultado = (parseFloat(a)*parseFloat(c)) + ((parseFloat(b)*(parseFloat(c)**2))/2)
    resRed = redondear2(resultado)
    return resRed;
}

let resultD2 = document.getElementById("resD2")

function validarD2(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultadoText = ``
    distancia2(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La distancia es: ${resRed} metros`
    localStorage.setItem("valorD2", resultadoText)
    resultD2.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageD2() {
    if (localStorage.getItem("valorD2") === null) {
        resultD2.innerHTML = `La distancia es:`
    } else {
        let mostrar = localStorage.getItem("valorD2")
        resultD2.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageD2()

// --------------------------- distancia 3 ---------------------------

let formularioDis3 = document.getElementById("formDis3")
formularioDis3.addEventListener("submit", validarD3)

function distancia3(a, b, c) {
    resultado = (parseFloat(b)**2 - parseFloat(a)**2) / (2*parseFloat(c))
    resRed = redondear2(resultado)
    return resRed;
}

let resultD3 = document.getElementById("resD3")

function validarD3(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let resultadoText = ``
    distancia3(a, b, c)
    isNaN(a) || isNaN(b) || isNaN(c) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La distancia es: ${resRed} metros`
    localStorage.setItem("valorD3", resultadoText)
    resultD3.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageD3() {
    if (localStorage.getItem("valorD3") === null) {
        resultD3.innerHTML = `La distancia es:`
    } else {
        let mostrar = localStorage.getItem("valorD3")
        resultD3.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageD3()

// --------------------------- posicion ---------------------------

let formularioPos = document.getElementById("formPos")
formularioPos.addEventListener("submit", validarP)

function posicion(a, b, c, d) {
    resultado = parseFloat(a) + (parseFloat(b)*parseFloat(d)) + ((parseFloat(c)*(parseFloat(d)**2))/2)
    resRed = redondear2(resultado)
    return resRed;
}

let resultP = document.getElementById("resP")

function validarP(e) {
    e.preventDefault()
    let form = e.target
    let a = form.children[1].value
    let b = form.children[4].value
    let c = form.children[7].value
    let d = form.children[10].value
    let resultadoText = ``
    posicion(a, b, c, d)
    isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) ? resultadoText = `Debe ingresar valores numéricos` : resultadoText = `La posición es: ${resRed} metros`
    localStorage.setItem("valorP", resultadoText)
    resultP.innerHTML = `${resultadoText}`;
    form.reset()
}

function obtenerLocalStorageP() {
    if (localStorage.getItem("valorP") === null) {
        resultP.innerHTML = `La posición es:`
    } else {
        let mostrar = localStorage.getItem("valorP")
        resultP.innerHTML = `${mostrar}`;
    }
}

obtenerLocalStorageP()
