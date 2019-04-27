// function *generador(){
//     //yield
//     yield 1;
//     yield 'Nombre';
//     yield 3+3;
//     yield true;
// }

// const iterador = generador();

// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);
// console.log(iterador.next().value);

function *generadorArreglo(carrito){
    for(let i=0;carrito.length;i++){
        yield carrito[i];
    }
}
const carrito = ['Producto1','Producto2','Producto3'];

let iterador2 = generadorArreglo(carrito);

console.log(iterador2.next().value);
console.log(iterador2.next().value);
console.log(iterador2.next().done);
console.log(iterador2.next().value);