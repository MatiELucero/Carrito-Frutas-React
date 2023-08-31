import agregarAFavs from './carrito.js'

const divContainer = document.querySelector('div.container')
const productos = []
const URL = "js/productos.json"

const armarCardDinamica = (producto)=> {
    return `<div class="card">
                <div class="card-image">${producto.imagen}</div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">$ ${producto.precio.toLocaleString()}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar a Carrito">Comprar</button>
                </div>
            </div>`
}

const agregarClickEnBotonesFav = ()=> {
    const botones = document.querySelectorAll('button.button.button-outline.button-add')
    for (let boton of botones) {
        boton.addEventListener('click', (e)=> {
            agregarAFavs(e.target.id)
        })
    }
}

const cargarProductos = (array)=> {
    divContainer.innerHTML = ""
    if (array.length > 0) {
        array.forEach((producto)=> {
            divContainer.innerHTML += armarCardDinamica(producto)
        })
        agregarClickEnBotonesFav()
    }
}


const obtenerProductos = ()=> {
    fetch(URL)
        .then((response)=> response.json())
        .then((data)=> productos.push(...data))
        .then(()=> cargarProductos(productos))
        .catch((error)=> console.error(error))
}
obtenerProductos()