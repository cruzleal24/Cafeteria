const productos=[
    {
        id:1,
        nombre: "Ristretto",
        precio: 5000
    },
    {
        id:2,
        nombre: "Café latte macchiato",
        precio: 3500
    },
    {
        id:3,
        nombre: "Café con leche",
        precio: 1800
    },
    {
        id:4,
        nombre: "Cappuccino",
        precio: 9200
    },
    {
        id:5,
        nombre: "Mocca",
        precio: 1200
    },
    {
        id:5,
        nombre: "Expreso o espresso",
        precio: 1200
    },
    {
        id:5,
        nombre: "MCortado o macchiatoocca",
        precio: 1200
    }
]



let cartProducts=[]
let productsContainer= document.getElementById("products-container")

function renderProductos(productsArrays){
    productsArrays.forEach(producto => {
        const cart = document.createElement("div");
        cart.classList.add('producto');
        cart.innerHTML=`<h3> ${producto.nombre}</h3>
                        <p> ${producto.precio}</p>
                        <button class="productoAgregar" id=" ${producto.id}">Agregar</h4>`
            productsContainer.appendChild(cart)
        
    })
    addToCartButton
}
renderProductos(productos)

function addToCartButton () {
    addButton = document.querySelectorAll(".productoAgregar")
    addButton.forEach(button => {
        button.onclick = (e) => {
            const productId = e.currentTarget.id
            const selecterProducts = productos.find(producto => producto.id == productId)
            cartProducts.push(selecterProducts)
            console.log(cartProducts)

            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
    })
}