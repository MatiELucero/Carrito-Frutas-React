import productosElectronicos from './productos.js'


export const almacenarEnFavoritos = ()=> {
    if (productosFav.length > 0) {
        localStorage.setItem('MisProductosCarrito', JSON.stringify(productosFav))
    }
}

const recuperarFavoritos = ()=> {
    return JSON.parse(localStorage.getItem('MisProductosCarrito')) || []
}

export const productosFav = recuperarFavoritos()

const agregarAFavs = (productoId)=> {
    if (productoId > 0) {
        const resultado = productosElectronicos.find((producto)=> producto.id === parseInt(productoId))
        if (resultado !== undefined) {
            productosFav.push(resultado)
            almacenarEnFavoritos()
            console.table(productosFav)
        } else {
            console.warn('No se encontró producto con ese código.')
        }
    }
}

export default agregarAFavs