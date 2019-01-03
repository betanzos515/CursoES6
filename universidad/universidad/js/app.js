/* // Eliminar de Local Storage
localStorage.clear();

let objeto = document.forms;
console.log(objeto);

let imagenes = document.images;
console.log(imagenes);

//si el valor de retorno es un HTML Collection puedes crear un arreglo desde esa colección;

let imagenesArreglo =  Array.from(imagenes);
console.log(imagenesArreglo);

imagenesArreglo.forEach(function(imagen){
    console.log(imagen);
});
 */


/*  let encabezado = document.getElementById('encabezado');    
 encabezado.innerHTML = "Bienvenidos Vamos a Aprender";
 encabezado.style.background = "#333";
 encabezado.style.color = "#fff";
 console.log(encabezado);

 //Query selector

 TRAVERSING ES UNA TECNICA EN LA CUAL ACCEDEMOS DE UN HIJO HACIA UN PADRE EN LOS ELEMENTOS HTML 

  
 const encabezado2 = document.querySelector('#encabezado');
 encabezado2.innerHTML = "Udemy la mejor plataforma de aprendizaje Online"; */

 const navegacion = document.querySelector('#principal');
 //regresa todos los nodos que contenga ese elemento HTML
 console.log(navegacion.childNodes);

//A diferencia de childNodes el metodo children solo devuelve los que son elementos HTML este nos regresa una coleccion de datos a los que podemos acceder a travez de sus indices.

//el metodo nodeName nos regresa el nombre del Nodo al que estamos refiriendo.
 console.log(navegacion.children[0].nodeName);

 //nodeType es un metodo el cual nos ayuda a identificar los tipos de nodos que conforman el HTML.
 console.log(navegacion.children[0].nodeType);

 //1 = ELEMENTOS
 //2 = Atributos
 //3 = Text Node
 //8 = Comentarios
 //9 = documentos
 //10 = doctype

 console.log(navegacion.children[0].textContent = 'Bienvenidos');

 //El metodo children nos permite acceder a cuantos hijos tenga el elemento de la siguiente manera

 const barra = document.querySelector('.barra');

 console.log(barra.children[0].children[0].children);

 //Traversin de Hijo a padre

 const enlaces = document.querySelectorAll('.enlace');

//De está forma accedemos a los nodos padre del elemento que está seleccionado aunque la manera mas recomendada de acceder es con el parentElement 
 console.log(enlaces[0].parentNode);

 console.log(enlaces[0].parentElement.textContent);


 const cursos = document.querySelector('.card');
 console.log(cursos.parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde Trasversing');;
