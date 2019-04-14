let aprendiendo;

aprendiendo = function(){
    console.log('Aprendiendo JavaScript');
}

aprendiendo();

aprendiendo = () =>{
    console.log('Aprendiendo JavaScript desde Arrow Function');
}

aprendiendo = () => console.log("Aprendiendo JavaScript desde Arrow Function 2");

aprendiendo = () => 'Aprendiendo JavaScript desde Arrow';
aprendiendo = () =>({aprendiendo:'Aprendiendo Java'});
aprendiendo = (a,b) =>{
    let suma =  a+b;
    document.getElementById('resultado').innerHTML = suma;
}

/*
    Con este ejemplo estaremos mostrando como se ocupa un
    callback utilizando inline function
*/

const productos = ['Disco','Camisa','Guitarra'];

const letraProducto = productos.map(function(producto){
    return producto.length;
})

/*
    En el siguiente ejemplo vamos a remplazar la funcion tradicional con una arrow function para que veamos como es que quedaria haciendo uso de los nuevos elementos de EC6
*/

const compras = ['Mayones','Pan Integral','Jamon','Queso'];

let letrasCompras = compras.map((articulo) =>{
    return articulo.length;
});

compras.forEach((producto, indice, arreglo) =>{
    console.log(producto, indice, arreglo);
});

let nombre = nombre => {nombre};

console.log(nombre);

console.log(aprendiendo(4,5));
console.log(letrasCompras);