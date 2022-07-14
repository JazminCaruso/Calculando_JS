// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// fetch('https://api.estadisticasbcra.com/usd_of', {
//     method: "GET",
//     headers: {"Authorization": "BEARER {eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODkyNzY5NzgsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJjYXJ1c29qYXptaW5AZ21haWwuY29tIn0.t2SBCCett5GEM3PSO_y8iH2GqUIJUvz-IO6pCuLw1SDwsjBZsKESYHG2Y8o-Yp3ovnuft7XAq-B5d0kBNRvACw}"}
// })
//     .then(response => response.json()) 
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// function mostrarData(x) {
//     console.log(x)
//     for (let i = 0; i < 2; i++) {
//         body += `<tr><td>${data[i].venta}</td></tr>`
//     }
//     document.getElementById('fetch').innerHTML = body
// }

const lista = document.getElementById('listaDolar')

// fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach ((valor) => {
//             const li = document.createElement('li')
//             li.innerHTML = `
//                             <h3>${valor.casa.compra}</h3>
//                             <h3>${valor.casa.venta}</h3>
//             `
//             lista.append(li)
//         })
//         console.log(data)
//         console.log(data[0].casa.compra) // compra dolar oficial
//         console.log(data[0].casa.venta) // venta dolar oficial
//         console.log(data[1].casa.compra) // compra dolar blue
//         console.log(data[1].casa.venta) // venta dolar blue
//     })
//     .catch((error) => console.log(error))

fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales')
    .then((response) => response.json())
    .then((data) => {
        const li = document.createElement('div')
        li.className = "listaDolar"
        li.innerHTML = `
                        Dolar oficial compra: ${data[0].casa.compra}  |
                        Dolar oficial venta: ${data[0].casa.venta}  |
                        Dolar Blue compra: ${data[1].casa.compra}  |
                        Dolar Blue venta: ${data[1].casa.venta}
        `
        lista.append(li)
    })
    .catch((error) => console.log(error))