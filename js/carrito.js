let cartStorage = localStorage.getItem("cartProducts")
cartStorage = JSON.parse(cartStorage)

let cartContainer = document.getElementById("tablet")

function renderCarrito(cartItems) {
    cartItems.forEach(producto => {
        const cart = document.createElement("tr")
        cart.innerHTML = `<td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                          <td>${producto.precio}</td>
                          <td><input type="number" value=1 ></td>`
        
        cartContainer.appendChild(cart)
    })
}
renderCarrito(cartStorage)