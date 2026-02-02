const carrito = {
    idCompra:662,
    productos: ["Teclado", "Mouse"],
    total: 45
}

const carritoJSON = JSON.stringify(carrito);

console.log(typeof carritoJSON)