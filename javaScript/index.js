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