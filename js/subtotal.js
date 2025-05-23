const cantidad= document.querySelector("input");
const subtotal= document.querySelector("subtotal");

cantidad.addEventListener("change", (e)=>{
    subtotal.textContent= e.currentTarget.value;
    console.log( sizeof(subtotal));
});