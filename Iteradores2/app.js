function crearIterador(carrito){

    let i = 0;

    return{
        siguiente:()=>{
            let final = (i>=carrito.length);
            let valor = !final ? carrito[i++]:undefined;

            return{
                fin:final,
                valor:valor
            }
        }
    }
}

const carrito = ['Producto1','Produto2','Producto3','Producto4'];

const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

//con los iteradores tenemos mejor control de las iteraciones que con el ciclo for

carrito.forEach(valor=>{
    console.log(valor);
});







