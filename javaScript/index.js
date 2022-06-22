// let historial = []

// function ecSegundoGrado(a, b, c) {
//     if ((b**2 - 4*a*c) < 0) {
//         alert("El discriminante es menor que 0");
//     } else if (b > 0) {
//         x_1 = (-b - ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
//         x_2 = (c / a) / x_1;
//         let resultado = [x_1, x_2];
//         alert("Las raíces de la función son: " + resultado);
//         historial.push(resultado)
//     } else {
//         x_1 = (-b + ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
//         x_2 = (c / a) / x_1;
//         let resultado = [x_1, x_2];
//         alert("Las raíces de la función son: " + resultado);
//         historial.push(resultado)
//     }
// }

// alert("La siguiente calculadora reseulve ecuaciones de segundo grado.\nEstas son del tipo ax**2 + bx + c.")
// let cond = prompt("Ingrese la palabra calcular si quiere calcular las raíces de una ecuación.\nSi desea salir, escriba otra cosa.")
// while (cond == "calcular") {
//     alert("Por favor, a continuación ingrese los datos requeridos.\nPrimero el valor de a, luego el de b, y por último el de c.")
//     let a = parseInt(prompt("Ingrese el coeficiente cuadrático, a"))
//     let b = parseInt(prompt("Ingrese el coeficiente lineal, b"))
//     let c = parseInt(prompt("Ingrese el término independiente, c"))
//     ecSegundoGrado(a, b, c)
//     alert("El historial de soluciones es: " + historial)
//     cond = prompt("Ingrese la palabra calcular si quiere realizar otro cálculo.\nSi desea salir, escriba otra cosa.")
// }

// -----------------listas-----------------

let calculando = ["Matemática", "Finanzas", "Física"]
let matematica = ["Operaciones Básicas", "Potencia y raíz", "Ecuaciones", "Regla de 3", "Porcentaje", "Redondeo y Truncado", "Valor absoluto", "Distancia y punto medio", "Pitágoras"]
let fisica = ["Estática", "Cinemática", "Conversor"]

// -----------------funciones-----------------

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

// a > b
function resto(a, b) {
    return a % b;
}

function potencia(a, b) {
    return a**b;
}

function raizCuadrada(a) {
    return a**0.5;
}

function porcentaje(a, b) {
    return (a * b) / 100;
}

function reglaDe3(a, b, c) {
    return (c * b) / a;
}

function vAbsoluto(a) {
    if (a >= 0) {
        return a;
    } else {
        return a * -1;
    }
}

function hipotenusa(a,b) {
    return ((a**2)+(b**2))**0.5
}

function ecPrimerGrado(a,b) {
    return (-b) / a;
}