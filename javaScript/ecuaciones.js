let coefLineal = prompt("Ingrese el coeficiente lineal:")
let a = parseInt(coefLineal)
let terminoInd = prompt("Ingrese el término independiente:")
let b = parseInt(terminoInd)

let operacion = 0
let resultado = 0
function ecPrimerGrado(a, b) {
    if (a == 0) {
        resultado = "inexistente"
    } else {
        operacion = (-b) / a
        resultado = operacion.toFixed(3)
    return resultado;
    }
}

ecPrimerGrado(a,b)

let bNeg = b*-1
if (b>=0) {
    ecuacion = `La ecuación es ${a}X + ${b} = 0`
} else {
    ecuacion = `La ecuación es ${a}X - ${bNeg} = 0`
}

let resultadoText = `La raíz es ${resultado}`

let calcu = document.querySelector(".seccionCalcu");

let tabla = document.createElement("table");
tabla.className = "calcuMG table-bordered"

let fila1 = document.createElement("tr");
fila1.className = "fila"
let columna1 = document.createElement("th");
columna1.innerHTML = "PRIMER GRADO / LINEAL";
columna1.className = "tituloCalcu";

let fila2 = document.createElement("tr");
let columna2 = document.createElement("th");
let input2 = document.createElement("input");
input2.className = "input form-control"
columna2.innerHTML = "<p>Coefiente lineal:</p>";
columna2.className = "cuadroOperaciones";

let fila3 = document.createElement("tr");
let columna3 = document.createElement("th");
let input3 = document.createElement("input");
input3.className = "input form-control"
columna3.innerHTML = "<p>Término independiente:</p>";
columna3.className = "cuadroOperaciones";

let fila4 = document.createElement("tr");
let columna4 = document.createElement("th");
columna4.className = "resultadoCalcu"
let boton = document.createElement("button");
boton.innerHTML = "<p>Calcular</p>"
boton.className = "botonCalc"

let fila5 = document.createElement("tr");
let columna5 = document.createElement("th");
columna5.innerHTML = `${ecuacion}`;
columna5.className = "resultadoCalcu"

let fila6 = document.createElement("tr");
let columna6 = document.createElement("th");
columna6.innerHTML = `${resultadoText}`;
columna6.className = "resultadoCalcu"


fila1.append(columna1);
columna2.append(input2);
fila2.append(columna2);
columna3.append(input3);
fila3.append(columna3);
columna4.append(boton);
fila4.append(columna4);
fila5.append(columna5);
fila6.append(columna6);
tabla.append(fila1);
tabla.append(fila2);
tabla.append(fila3);
tabla.append(fila4);
tabla.append(fila5);
tabla.append(fila6);
calcu.append(tabla);