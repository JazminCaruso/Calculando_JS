let historial = []

function ecSegundoGrado(a, b, c) {
    if ((b**2 - 4*a*c) < 0) {
        alert("El discriminante es menor que 0");
    } else if (b > 0) {
        x_1 = (-b - ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
        x_2 = (c / a) / x_1;
        let resultado = [x_1, x_2];
        alert("Las raíces de la función son: " + resultado);
        historial.push(resultado)
    } else {
        x_1 = (-b + ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
        x_2 = (c / a) / x_1;
        let resultado = [x_1, x_2];
        alert("Las raíces de la función son: " + resultado);
        historial.push(resultado)
    }
}

alert("La siguiente calculadora reseulve ecuaciones de segundo grado.\nEstas son del tipo ax**2 + bx + c.")
let cond = prompt("Ingrese la palabra calcular si quiere calcular las raíces de una ecuación.\nSi desea salir, escriba otra cosa.")
while (cond == "calcular") {
    alert("Por favor, a continuación ingrese los datos requeridos.\nPrimero el valor de a, luego el de b, y por último el de c.")
    let a = parseInt(prompt("Ingrese el coeficiente cuadrático, a"))
    let b = parseInt(prompt("Ingrese el coeficiente lineal, b"))
    let c = parseInt(prompt("Ingrese el término independiente, c"))
    ecSegundoGrado(a, b, c)
    alert("El historial de soluciones es: " + historial)
    cond = prompt("Ingrese la palabra calcular si quiere realizar otro cálculo.\nSi desea salir, escriba otra cosa.")
}

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

function pCuadrado(a) {
    return a*4;
}

function pRectangulo(a, b) {
    return (a*2) + (b*2);
}

function pTriangEq(a) {
    return a*3;
}

function pTriangIs(a, b) {
    return (a*2) + b;
}

function pTriangEs(a, b, c) {
    return a + b + c;
}

function pRombo(a) {
    return a*4;
}

function pTrapecio(a, b, c) {
    return (a*2) + b + c;
}

function pPoligonoReg(a, b) {
    return a * b;
}

function pPoligonoEsc(a, b) {
    return 2 * (a + b);
}

function pCirculo(a) {
    return 2 * a * 3.141592;
}

function aCuadrado(a) {
    return a * a;
}

function aRectangulo(a, b) {
    return a * b;
}

function aTriangulo(a, b) {
    return (a * b) / 2;
}

function aRombo(a, b) {
    return (a * b) / 2;
}

function aRomboide(a, b) {
    return a * b;
}

function aTrapecio(a, b, c) {
    return ((a + b) * c) / 2;
}

function aPoligono(a, b) {
    return (a * b) / 2;
}

function aCirculo(a, b) {
    return 3.141592 * (a * b);
}

function vCilindro(a, b) {
    return 3.141592 * (a**2) * b;
}

function vEsfera(a) {
    return 3.141592 * (a**3) * (4/3);
}

function vCono(a, b) {
    return (3.141592 * (a**2) * b) / 3;
}

function vPrisma(a, b, c) {
    return a * b * c;
}

function vPiramide(a, b) {
    return ((a**2) * b) / 3;
}

function vCubo(a) {
    return a**3;
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