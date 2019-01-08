// /* // Eliminar de Local Storage
// localStorage.clear();

// let objeto = document.forms;
// console.log(objeto);

// let imagenes = document.images;
// console.log(imagenes);

// //si el valor de retorno es un HTML Collection puedes crear un arreglo desde esa colección;

// let imagenesArreglo =  Array.from(imagenes);
// console.log(imagenesArreglo);

// imagenesArreglo.forEach(function(imagen){
//     console.log(imagen);
// });
//  */


// /*  let encabezado = document.getElementById('encabezado');    
//  encabezado.innerHTML = "Bienvenidos Vamos a Aprender";
//  encabezado.style.background = "#333";
//  encabezado.style.color = "#fff";
//  console.log(encabezado);

//  //Query selector

//  TRAVERSING ES UNA TECNICA EN LA CUAL ACCEDEMOS DE UN HIJO HACIA UN PADRE EN LOS ELEMENTOS HTML 

  
//  const encabezado2 = document.querySelector('#encabezado');
//  encabezado2.innerHTML = "Udemy la mejor plataforma de aprendizaje Online"; */

// /*  const navegacion = document.querySelector('#principal');
//  //regresa todos los nodos que contenga ese elemento HTML
//  console.log(navegacion.childNodes);

// //A diferencia de childNodes el metodo children solo devuelve los que son elementos HTML este nos regresa una coleccion de datos a los que podemos acceder a travez de sus indices.

// //el metodo nodeName nos regresa el nombre del Nodo al que estamos refiriendo.
//  console.log(navegacion.children[0].nodeName);

//  //nodeType es un metodo el cual nos ayuda a identificar los tipos de nodos que conforman el HTML.
//  console.log(navegacion.children[0].nodeType); */

//  //1 = ELEMENTOS
//  //2 = Atributos
//  //3 = Text Node
//  //8 = Comentarios
//  //9 = documentos
//  //10 = doctype

// /*  console.log(navegacion.children[0].textContent = 'Bienvenidos'); */

//  //El metodo children nos permite acceder a cuantos hijos tenga el elemento de la siguiente manera

//  const barra = document.querySelector('.barra');

//  console.log(barra.children[0].children[0].children);

//  //Traversin de Hijo a padre

// /*  const enlaces = document.querySelectorAll('.enlace');
//  */
// //De está forma accedemos a los nodos padre del elemento que está seleccionado aunque la manera mas recomendada de acceder es con el parentElement 
// /*  console.log(enlaces[0].parentNode); */
// /* 
//  console.log(enlaces[0].parentElement.textContent); */


//  const cursos = document.querySelector('.card');
//  console.log(cursos.parentElement.parentElement.parentElement.children[0].textContent = 'Hola desde Traversing');

//  //hay otra forma de hacer Traversing

// /*  const enlaces = document.querySelectorAll('.enlace');
//  */

//  //Esta funcion nos toma el elemento que está antes del elemento seleccionado
//  /* console.log(enlaces[4].previousElementSibling);

//  console.log(enlaces[0].nextElementSibling); */

//  //creando elementos con javaScript

//  /* const enlace = document.createElement('a');
//  //agregamos una classe
//  enlace.className = 'enlace';
//  //agregamos el ID
//  enlace.id = 'nuevo-id';
//  //agregando atributos
//  enlace.setAttribute('href','#');
//  enlace.textContent = 'Este es un nuevo enlace';

//  console.log(enlace);
//  */
// let primero = localStorage.createElement = 'David';


// //remplazar elementos 

// const nuevoEncabezado = document.createElement('h2');
// nuevoEncabezado.id = 'encabezado';
// console.log(nuevoEncabezado); 

// //appendChild() agrega un elemento hijo a quien esté haciendo uso de el
// nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'));

// //Elemento anterior sera reemplazado

// const anterior = document.querySelector('#encabezado');

// const elPadre = document.querySelector('#lista-cursos');
// elPadre.replaceChild(nuevoEncabezado,anterior);


// const elemNuevo = document.createElement('h1');

// elemNuevo.appendChild(document.createTextNode('Acabamos de cambiar este elemento'));

// elemRemplazar = document.querySelector('#encabezado');
// const elemPadre = document.getElementById('lista-cursos');

// elemPadre.replaceChild(elemNuevo,elemRemplazar);

// //agregando y quitando enlaces y otros atributos

// let enlaces = document.querySelectorAll('.enlace');
// const navegacion = document.querySelector('#principal');

// console.log(enlaces[0]);
// //con este metodo podemos remover el elemento directo
// enlaces[0].remove();

// //de esta forma se puede eliminar algún elemento desde el padre
// navegacion.removeChild(enlaces[1]);

// //aqui vamos a aprender a Eliminar o Agregar atributos como son clases a un elemento
// /* const primerLi = document.querySelector('.enlace'); */
// /* let elemento;
//  */
// //el metodo .classList() es un metodo que nos permite listar todas las clases que contiene un elemento.
// /* elemento = primerLi.classList;
//  */
// /* console.log(elemento);
//  *///a los metodos seleccionados se les puede agregar cuantas clases sean necesarias, esto es posible con el metodo .add()
// /* elemento = primerLi.classList.add('nueva-clase');
//  *///de igual manera nos permite remover clases a nuestros elementos
// /* elemento = primerLi.classList.remove('enlace');
// elemento = primerLi.classList;
// console.log(elemento);  */

// /* elemento = primerLi.getAttribute('href');
// primerLi.setAttribute('data-id',20);
// elemento = primerLi.hasAttribute('data-href');
// console.log(elemento);
//  */
// //EventListener 

/* document.querySelector('#submit-buscador').addEventListener('click',function(event){
    event.preventDefault(); 
    alert('Buscando Cursos');
});
 */
//otra forma de ocupar el evento click es de la siguiente manera

/* document.querySelector('#img-carrito').addEventListener('click',funcionNueva);

function funcionNueva(event){
    event.preventDefault();
    console.log('logrado');
} */

const encabezado = document.querySelector('#encabezado');
const enlace = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');


/* boton.addEventListener('click',obtenerEvento);
 */

 //Evento para dar doble click
/* boton.addEventListener('dblclick',obtenerEvento); */

//Evento Mousente
/* boton.addEventListener('mouseenter',obtenerEvento); */


//Evento mouseleave
/* boton.addEventListener('mouseleave',obtenerEvento); */

//Evento mouseover
/* boton.addEventListener('mouseover',obtenerEvento); */

//mouse out
/* boton.addEventListener('mouseout',obtenerEvento); */


//Eventos par los formularios


const buscador = document.querySelector('#buscador');

//El evento nos registra todo lo que se escribe en el cuadro de texto
/* buscador.addEventListener('keydown',obtenerEvento); */

//Metodo que se ejecuta al soltar una tecla presionada
/* buscador.addEventListener('keyup',obtenerEvento); */


//Cada que estemos presionando una tecla
//buscador.addEventListener('keypress',obtenerEvento);

//Evento Focus, detecta cuando le das click al elemento
/* buscador.addEventListener('focus',obtenerEvento); */

//Evento Blur
/* buscador.addEventListener('blur',obtenerEvento); */

//Evento 
/* buscador.addEventListener('blur',obtenerEvento);
buscador.setAttribute('onpaste','alert("no puedes pegar")');

 function obtenerEvento (e){
    console.log(buscador.value);
    console.log(`Evento: ${e.type}`);
} */

//Event Bubbling
/* const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');


card.addEventListener('click',function(Event){
    Event.stopPropagation();
    console.log('Click en card');
});

//Con stopPropagation() podemos evitar el Bubbling.
infoCurso.addEventListener('click',function(Event){
    Event.stopPropagation();
    console.log('Click en info curso');
});

agregarCarrito.addEventListener('click',function(Event){
    Event.stopPropagation();
    console.log('click en agregar carrito');
}); */

//Delegation en JavaScript

//En javaScript existe algo que se le conoce como Delegation que consta en lo siguiente.

document.body.addEventListener('click',eliminarElemento);

function eliminarElemento(e){
    e.preventDefault();

    if(e.target.classList.contains('borrar-curso')){
        console.log(e.target.parentElement.parentElement.remove());
    }
    else if(e.target.classList.contains('agregar-carrito')){
        console.log('producto agregado...');
    }
}

//Local Storage

//Agregar a Local Storage

//De está forma se puede agregar un valor a Local Storage.
localStorage.setItem('nombre','juan');
localStorage.setItem('nombre','Gabriel');
localStorage.setItem('nombre','David');
localStorage.setItem('nombre','Ricardo');
localStorage.setItem('nombre','Rosa Maria');
localStorage.setItem('nombre','Abel Betanzos');
localStorage.setItem('nombre','Alfredo Betanzos');
sessionStorage.setItem('nombre','Alejandro Betanzos');

