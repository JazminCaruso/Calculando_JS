function ecSegundoGrado(a, b, c) {
    if ((b**2 - 4*a*c) < 0) {
        alert("El discriminante es menor que 0");
    } else if (b > 0) {
        x_1 = (-b - ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
        x_2 = (c / a) / x_1;
        let resultado = [x_1, x_2];
        alert("Las raíces de la función son: " + resultado);
    } else {
        x_1 = (-b + ((b**2 - 4*a*c)**0.5)) / (2.0 * a);
        x_2 = (c / a) / x_1;
        let resultado = [x_1, x_2];
        alert("Las raíces de la función son: " + resultado);
    }
}

alert("La siguiente calculadora reseulve ecuaciones de segundo grado.\nEstas son del tipo ax**2 + bx + c.")

let cond = prompt("Ingrese la palabra calcular si quiere calcular las raíces de una ecuación.\nSi desea salir, escriba otra cosa.")
while (cond == "calcular") {
    alert("Por favor, a continuación ingrese los datos requeridos.\nPrimero el valor de a, luego el de b, y por último el de c.")
    let a = parseInt(prompt("Ingrese el coeficiente cuadrático, a"))
    let b = parseInt(prompt("Ingrese el coeficiente lineal, b"))
    let c = parseInt(prompt("Ingrese el término independiente, c"))
    let operacion = ecSegundoGrado(a, b, c)
    cond = prompt("Ingrese la palabra calcular si quiere realizar otro cálculo.\nSi desea salir, escriba otra cosa.")
}
