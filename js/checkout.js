import { productosFav } from "./carrito.js"

const tableBody = document.querySelector('tbody')

const retornarTablaHTML = (productosFav)=> {
return `<tr>
            <td>${productosFav.nombre}</td>
            <td>${productosFav.imagen}</td>
            <td>$ ${productosFav.precio}</td>
        </tr>`
}

if (productosFav.length > 0) {
    productosFav.forEach((producto)=> tableBody.innerHTML += retornarTablaHTML(producto))
}

const btnComprar = document.querySelector("#btnComprar")

btnComprar.addEventListener("click", ()=> {
    alert("Gracias por su compra")
    productosFav.length = 0
    localStorage.removeItem('MisProductosFavoritos')
    tableBody.innerHTML = ""
})