class Calculadoras {
    constructor(nombre, imagen, url) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.url = url;
    }
}

const matematica = new Calculadoras("MATEMÁTICA", "./img/matematica.jpg", "./pag/matematica.html")
const finanzas = new Calculadoras("FINANZAS", "./img/finanzas.jpg", "./pag/finanzas.html")
const fisica = new Calculadoras("FÍSICA", "./img/fisica.jpg", "./pag/fisica.html")

const listaCalculadoras = [matematica, finanzas, fisica]

let inicio = document.getElementById("inicio")

for (const calculadora of listaCalculadoras) {
    let contenedor = document.createElement("div");
    contenedor.className = "card"

    contenedor.innerHTML = ` 
                            <img class="card-img-top" src=${calculadora.imagen} alt=${calculadora.nombre}>
                            <h5 class="card-body tituloCard"><a href=${calculadora.url}>${calculadora.nombre}</a></h5>
                            </div>`

    inicio.appendChild(contenedor);
}



// function suma(a, b) {
//     return a + b;
// }

// console.log(suma(2, 5))

// function resta(a, b) {
//     return a - b;
// }

// console.log(resta(2, 5))

// function multiplicacion(a, b) {
//     return a * b;
// }

// console.log(multiplicacion(2+3, 5))

// function division(a, b) {
//     return a / b;
// }

// console.log(division(7, 3))

// // a > b
// function resto(a, b) {
//     return a % b;
// }

// console.log(resto(7, 3))



// function potencia(a, b) {
//     return a**b;
// }

// console.log(potencia(2, 3))

// function raizCuadrada(a) {
//     return a**0.5;
// }

// console.log(raizCuadrada(25))



// function pCuadrado(a) {
//     return a*4;
// }

// function pRectangulo(a, b) {
//     return (a*2) + (b*2);
// }

// function pTriangEq(a) {
//     return a*3;
// }

// function pTriangIs(a, b) {
//     return (a*2) + b;
// }

// function pTriangEs(a, b, c) {
//     return a + b + c;
// }

// function pRombo(a) {
//     return a*4;
// }

// function pTrapecio(a, b, c) {
//     return (a*2) + b + c;
// }

// function pPoligonoReg(a, b) {
//     return a * b;
// }

// function pPoligonoEsc(a, b) {
//     return 2 * (a + b);
// }

// function pCirculo(a) {
//     return 2 * a * 3.141592;
// }

// function aCuadrado(a) {
//     return a * a;
// }

// function aRectangulo(a, b) {
//     return a * b;
// }

// function aTriangulo(a, b) {
//     return (a * b) / 2;
// }

// function aRombo(a, b) {
//     return (a * b) / 2;
// }

// function aRomboide(a, b) {
//     return a * b;
// }

// function aTrapecio(a, b, c) {
//     return ((a + b) * c) / 2;
// }

// function aPoligono(a, b) {
//     return (a * b) / 2;
// }

// function aCirculo(a, b) {
//     return 3.141592 * (a * b);
// }

// function vCilindro(a, b) {
//     return 3.141592 * (a**2) * b;
// }

// function vEsfera(a) {
//     return 3.141592 * (a**3) * (4/3);
// }

// function vCono(a, b) {
//     return (3.141592 * (a**2) * b) / 3;
// }

// function vPrisma(a, b, c) {
//     return a * b * c;
// }

// function vPiramide(a, b) {
//     return ((a**2) * b) / 3;
// }

// function vCubo(a) {
//     return a**3;
// }



// function porcentaje(a, b) {
//     return (a * b) / 100;
// }

// function reglaDe3(a, b, c) {
//     return (c * b) / a;
// }

// function vAbsoluto(a) {
//     if (a >= 0) {
//         return a;
//     } else {
//         return a * -1;
//     }
// }



// function hipotenusa(a,b) {
//     return ((a**2)+(b**2))**0.5
// }



// function ecPrimerGrado(a,b) {
//     return (-b) / a;
// }

// console.log(ecPrimerGrado(3,-2))

// ---------------------------------------- funciona -----------------------------------------

// function ecSegundoGrado(a, b, c) {
//     if ((b**2 - 4*a*c) < 0) {
//         alert("El discriminante es menor que 0");
//     } else if (b > 0) {
//         x_1 = (-b - ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
//     } else {
//         x_1 = (-b + ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
//     }
//     x_2 = (c / a) / x_1
//     let resultado = [x_1, x_2]
//     alert("Las raíces de la función son: " + resultado)   
// }

// alert("La siguiente calculadora reseulve ecuaciones de segundo grado.\nEstas son del tipo ax**2 + bx + c\nPor favor, a continuación ingrese los datos requeridos.\nPrimero el valor de a, luego el de b, y por último el de c.")

// let a = parseInt(prompt("Ingrese el coeficiente cuadrático, a"))
// let b = parseInt(prompt("Ingrese el coeficiente lineal, b"))
// let c = parseInt(prompt("Ingrese el término independiente, c"))

// let operacion = ecSegundoGrado(a, b, c)

// -------------------------------------------------------------------------------------------------

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

































// function ecSegundoGrado(op, a, b) {
//     let resultado = 0 
//     if (op == "+") {
//         resultado = a + b;
//     } else if (op == "-") {
//         resultado = a - b;
//     } else if (op == "*") {
//         resultado = a + b;
//     } else if (op == "/"){
//         resultado = a / b;
//     } else {
//         alert("Debe ingresar una operación válida")
//     }
//     alert("El resultado es: " + resultado)
// }

// alert("La siguiente calculadora resuelve cálculos matemáticos básicos")

// let op = prompt("Ingrese una de las siguientes operaciones:\n+  -  *  /")
// let a = prompt("Ingrese el primer número")
// let b = prompt("Ingrese el segundo número")

// let operacion = calculadora(op, a, b)



// function ecSegundoGrado(op, a, b) {
//     let resultado = 0 
//     if (op == "+") {
//         resultado = a + b;
//     } else if (op == "-") {
//         resultado = a - b;
//     } else if (op == "*") {
//         resultado = a + b;
//     } else if (op == "/"){
//         resultado = a / b;
//     } else {
//         alert("Debe ingresar una operación válida")
//     }
//     alert("El resultado es: " + resultado)
// }

// alert("La siguiente calculadora resuelve cálculos matemáticos básicos")

// let op = prompt("Ingrese una de las siguientes operaciones:\n+  -  *  /")
// let a = prompt("Ingrese el primer número")
// let b = prompt("Ingrese el segundo número")

// let operacion = calculadora(op, a, b)

// ----------------------------- preguntar como hacer para que funciones --------------------------------

// function calculadora(cond, op, a, b) {
//     let resultado = 0;
//     while (cond == "calcular") {
//         if (op == "+") {
//             resultado = a + b;
//         } else if (op == "-") {
//             resultado = a - b; 
//         } else if (op == "*") {
//             resultado = a * b;
//         } else if (op == "/") {
//             resultado = a / b;
//         } else {
//             alert("Debe ingresar una operación válida")
//         }
//         alert("El resultado de la operación es: " + resultado)
//         cond = prompt("Escriba - calcular - para realizar otra operación.\nEscriba - esc - para salir.")
//     }
       
// }

// alert("La siguiente calculadora reseulve operaciones básicas de matemática.\n+ para sumar\n- para restar\n* para multiplicar\n/ para dividir")

// let cond = prompt("Escriba - calcular - para realizar una operación.\nEscriba - esc - para salir.")
// let op = prompt("Ingrese la operación que uiere realizar")
// let a = prompt("Ingrese el primer número")
// let b = prompt("Ingrese el segundo número")

// let operacion = calculadora(op, a, b)




// function ecSegundoGrado(a, b, c) {
//     if ((b**2 - 4*a*c) < 0) {
//         return 0
//     } else if (b > 0) {
//         x_1 = (-b - ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
//         x_2 = (c / a) / x_1;
//         let resultado = [x_1, x_2];
//         return resultado
//     } else {
//         x_1 = (-b + ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
//         x_2 = (c / a) / x_1;
//         let resultado = [x_1, x_2];
//         return resultado
//     }
// }

// let historial = []
// let operacion1 = ecSegundoGrado(2, 5, 2)
// let operacion2 = ecSegundoGrado(2, 3, 5)
// let operacion3 = ecSegundoGrado(2, 2, 1)
// let historial = resultados.push(resultado)
// console.log(historial)