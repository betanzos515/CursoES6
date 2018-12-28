/* let numero1 = "10",
    numero2 = "11.10";

    console.log(parseInt(numero1));
    console.log(parseInt(numero2));
    console.log(Number(numero2));
    console.log(parseFloat(numero2));

let dato = 12124234234.491234234;
    console.log(dato.toFixed());  

let numero = '1550';
    console.log(numero);
let segundo = String(numero);
    console.log(typeof segundo);

//Ejemplo de los String Templates.

const producto = 'Pizza',
        precio = 30,
        producto2 = 'Hamburguesa',
        precio2 = 40;

    let html  = '<ul>'+
                '<li> Orden : '+producto+'</li>'+
                '<li> Precio :'+precio+'</li>'+
                '<li> Orden:' +producto2+'</li>'+
                '<li> Precio:'+precio2+'</li></ul>';
    document.getElementById('app').innerHTML = html;

    function total(precio,precio2){
        return precio+precio2;
    }

//Ejemplo de Template Literal.

    let html2 = `
        <ul>
            <li>Orden : ${producto}</li>
            <li>Precio : ${precio}</li>
            <li>Orden : ${producto2}</li>
            <li>Precio : ${precio2}</li>
            <li>Total : ${total(precio,precio2)}</li>
        </ul>
    `;

    document.getElementById('app').innerHTML = html + html2;


    const numeros = [10,20,30,40,50,60];
    numeros.fl
//metodo para saber si un arreglo es un arreglo.

    let diaSemana = new Array("Martes","Miercoles","Jueves","Viernes","Sabado");

    let NuevoArreglo = new Array(10);
    NuevoArreglo[0] = 10;
    NuevoArreglo[1] = 11;
    NuevoArreglo[2] = 30;

    console.log(Array.isArray(NuevoArreglo)); 

    //para agregar un valor al ultimo a un arreglo ocuparemos el metodo push() de la siguiente manera, tomaremos el arreglo diaSemana para demostrar el funcionamiento del metodo push().

    diaSemana.push('Domingo');
    console.log(diaSemana);
    //para poder ingresar un dato pero en este caso al incio del arreglo podemos ocupar el metodo unshift();

    diaSemana.unshift('Lunes');
    console.log(diaSemana);

    //para quitar el ultimo elemento del arreglo ocuparemos el metodo .pop();
    diaSemana.pop();
    console.log(diaSemana);

    //quitar el primer elemento ocupamos el metodo shift();
    diaSemana.shift();
    console.log(diaSemana);

    //para quitar un elemento intermedio del arreglo ocupamos el motodo splice();

    diaSemana.splice(1); */

    /* let arreglo = [1,2,3,4,5,6];
    console.log(arreglo);
    console.log(arreglo.splice(4));
    let arreglo2 = ['1','2','3','4','5','6'];
    console.log(arreglo2); 
    console.log(arreglo2.splice(2,2));
    console.log(arreglo2);

    let arreglo1 = [1,2,3,4],
        arreglo3 = [5,6,7,8];

    console.log(arreglo1.concat(arreglo3));

    let letras = ['a','b','c','d','e','f'];
    console.log(letras.sort());

    let numeros = [1,2,45,67,54,87,98,23,13,54,3];
    console.log(numeros.sort(function(x,y){
        return y-x;
    })); 

    //creacion de objetos
    //La creacion de los objetos se realiza de la siguiente forma. nombre_objeto
    // y adentro las llaves : valores de las llaves.    
    const persona = {
        nombre:'Miguel',
        apellido:'Martinez',
        profesion:'Diseñador Grafico',
        email:'correo@correo.com',
        edad:20,
        musica:['Trance','Rock','Grunge'],
        hogar:{
            ciudad:'Oaxaca',
            pais:'México'
        },
        nacimiento:function(){
            return new Date().getFullYear() - this.edad;
        }
    }

    //los objetos pueden contener cualquier tipo de dato primitivo dentro de ellos en este caso estamos modificando un arreglo que es encuentra dentro del objeto persona.
    persona.musica.unshift('Baladas');

    //la forma de acceder a los objetos es nombredelObjeto.llave 
    console.log(persona.nombre +' '+persona.edad+' '+persona.musica[0]+' '+ persona.hogar.ciudad);

    //existe otra forma de acceder a los objetos que es la que se muestra a continuacion:

    console.log(persona['nombre']);
    console.log(persona.nacimiento());
 */

 //vamos a crear un arreglo de objetos a continuacion:

/*  const autos = [
    {modelo:'mustang',motor:6.0},
    {modelo:'Camaro',motor:6.3},
    {modelo:'Challenger',motor:6.3}
 ];

 for(let i = 0; i<autos.length;i++){
     console.log(autos[i]);
 }


 */

/*  let ejemplo = {
     nombre:'David',
     edad:27,
     valores:[1,2,3,4,5],
     hogar:{
        ciudad:'Oaxaca',
        pais:'Mexico'    
     },
     nacimiento:function(){
         return new Date().getFullYear()-this.edad;
     } 
 }


 console.log(`Los valores del objeto son : Nombre: ${ejemplo.nombre},\nEdad: ${ejemplo.edad},\nValores del Arreglo : ${ejemplo.valores},\nCiudad : ${ejemplo.hogar.ciudad},\nPais: ${ejemplo.hogar.pais},\nAño de Nacimiento: ${ejemplo.nacimiento()}`)
 */


function saludar(nombre = 'visitante'){
    return `hola ${nombre}`;
}

console.log(saludar('David'));

    
//function expresion 

var saludar = function(){
    console.log('Hola Mundo');
}

//function declaration

function saludo(){
    console.log('Saludo');
}

//funciones IIFE 

(function(){
    console.log('Estoy dentro de una funcion IFFE\nuna función IFFE es una funcion que se\ninvoca en automatico');
})();


//funciones dentro de los objejos 


let musica = {
    reproducir:function(nombre = 'undefined'){
        console.log(`Reproduciendo la cancion ${nombre}`);
    },
    pausar: function(){
        console.log('La musica se ah puesto en pausa');
    }
}

musica.reproducir('La constante');
musica.pausar();


//se pueden agregar propiedades y metodos a un objeto declarandolos fuera del Objeto

musica.eliminar = function(id){
    console.log(`La pista ${id} ah sido eliminada`);
}

const pendientes = ['Tarea','Comer','Proyecto','Aprender','JavaScript'];

//uso del foreach 

pendientes.forEach(function(valor,indice, arreglo){
    console.log(arreglo);
});

let nuevo = ['Miguel','Nereyda','Andrea','Carmen','Eunice'];

for(let i = 0;i<nuevo.length;i++)
{
    console.log(`${nuevo[i]}`);
}
console.log('\n');

let nombres = [];
nuevo.forEach(function(x){
    nombres.push(x);
});

//map();

const carrito = [
    {id:1,producto:'Libro'},
    {id:2,producto:'Camisa'},
    {id:3,producto:'Guitarra'},
    {id:4,producto:'Disco'}
];

const nombreProducto = carrito.map(function(carrito,index,objeto){
    return carrito.producto ;
});

console.log(nombreProducto);

var array1 = ['A','B','C'];
var array2 = ['1','2','3'];

//Realizar una combinacion de los valores de ambos arreglos 

var array3 = [];

for(let x = 0;x<array1.length;x++)
{
    for(let y = 0;y<array2.length;y++)
    {
        array3.push(array1[x]+array2[y]);
    }
}

let array4 = [];

array1.forEach(function(valor1){
    array2.forEach(function(valor2){
        array4.push(valor1+valor2);
    });
});

let arreglo5 = [];

array1.map(function(valor){
    console.log(valor);
});

/*let automovil = {
    modelo : 'Camaron',
    motor: 6.1,
    anio:1969,
    marca:'Chevrolet'
}

for(auto in automovil){
    //console.log(`${auto} : ${automovil[auto]}`);
    console.log(auto);
}*/

const ciudades = ['Londres','New York','Madrid','Paris'];

//los set son colecciones en los que no pueden existir datos repetidos
const ordenes = new Set([123,321,131,102,123]);
const datos = new Map();
datos.set('nombre','juan');
datos.set('profesion','desarrollador web');

console.log('****************** entries ********************');
for(let ciudad of ciudades.entries())
{
    console.log(ciudad);
}
//entries iterador 
for(let entradas of ordenes.entries()){
    console.log(entradas);
}

//entries para map 

for(let entrada of datos.entries()){
    console.log(entrada);
}

//values iterador
console.log("******************** values *******************");

for(let ciu of ciudades){
    console.log(ciu);
}
for(let ciud of ordenes.values()){
    console.log(ciud);
}
for(let iuc of datos.values()){
    console.log(iuc);
}
//Keys iterador 
for(let c of ordenes.keys()){
    console.log(c);
}
for(let icu of datos.keys()){
    console.log(icu);
}
//iterador por default
for(let val1 of nombres){
    console.log(val1);
}

for(let val2 of datos){
    console.log(val2)
}

 let cadena = 'Aprendiendo JavaScript';

 for(letra of cadena){
     console.log(letra);
 }

 const enlaces = document.getElementsByTagName('a');

 for(let enlace of enlaces){
     console.log(enlace.href);
 }


