// Eliminar de Local Storage
localStorage.clear();

let elemento;

elemento = document;
elemento = document.head;
console.log(elemento);

//vamos a seleccionar las imagenes de la pagina y convertirlas a un arreglo

let imagenes = document.images;
//podemos crear un Array desde una fuente de datos, siempre y cuando sean compatibles

let imagenesArreglo = Array.from(imagenes);

imagenesArreglo.forEach(function(imagen){
    console.log(imagen);
});