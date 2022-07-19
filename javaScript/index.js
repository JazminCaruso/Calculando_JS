class Calculator {
    constructor(name, image, url) {
        this.name = name;
        this.image = image;
        this.url = url;
    }
}

const matematica = new Calculator("MATEMÁTICA", "./img/matematica.jpg", "./pag/matematica.html")
const finanzas = new Calculator("FINANZAS", "./img/finanzas.jpg", "./pag/finanzas.html")
const fisica = new Calculator("FÍSICA", "./img/fisica.jpg", "./pag/fisica.html")

const listCalculadoras = [matematica, finanzas, fisica]

let calculatorPage = document.getElementById("calculatorPage")

for (const calculator of listCalculadoras) {
    let container = document.createElement("div");
    container.className = "card"

    container.innerHTML = ` 
                            <img class="card-img-top" src=${calculator.image} alt=${calculator.name}>
                            <h5 class="card-body tituloCard"><a href=${calculator.url}>${calculator.name}</a></h5>
                            </div>`

    calculatorPage.appendChild(container);
}