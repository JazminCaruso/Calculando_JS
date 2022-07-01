// let historial = []

// function ecSegundoGrado(a, b, c) {
//     if ((b**2 - 4*a*c) < 0) {
//         alert("El discriminante es menor que 0");
//     } else if (b > 0) {
//         x_1 = (-b - ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
//         x_2 = (c / a) / x_1;
//         let resultado = [x_1, x_2];
//     } else {
//         x_1 = (-b + ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
//         x_2 = (c / a) / x_1;
//         let resultado = [x_1, x_2];
//     }
// }

// let operacion = ecSegundoGrado(a, b, c)

let historial = []

function suma(a,b) {
    let resultado = a + b
    historial.push(resultado)
    return resultado
}

suma(2,3)
suma(4,5)
suma(1,3)

console.log(historial)