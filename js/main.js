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


// let products= document.getElementById("productos")
// productos.forEach(producto=>{
//     let contenedor = document.createElement("div")
//     contenedor.className="card"
//     contenedor.innerHTML= `<span> ID ${producto.id}</span>
//                             <h3>Producto: ${producto.nombre}</h3
//                             <h4> Precio: ${producto.precio}</h4>`
//     products.appendChild(contenedor)
// })

let productsContainer= document.getElementById("products-containe")

function renderProductos(productsArrays){
    productsArrays.forEach(producto => {
        const cart = document.createElement("div")
    });
}
