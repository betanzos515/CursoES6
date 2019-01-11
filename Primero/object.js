//function prompt

// const nombre = prompt('Cual es tu nombre');
// console.log(`Bienvenido ${nombre}`);


// if(confirm('Eliminar'))
//     console.log('Eliminado');
// else
//     console.log('Nada paso');

//outer nos da el ancho del navegador.
let anchura,
    altura;

    anchura = window.outerHeight;
    altura = window.outerWidth;

    console.log(anchura);
    console.log(altura);

//inner nos da la anchura solo de la ventana

    anchura = window.innerHeight;
    altura = window.innerWidth;

    console.log(anchura);
    console.log(altura);

let protocolo = window.location.protocol 

if(protocolo == 'http:'){
    console.log('Este puerto no es seguro');
}
else
    console.log('Puerto seguro');
console.log(protocolo);

// window.location.href = "https://www.google.com";

//navegador

let ubicacion;

ubicacion = window.navigator;
ubicacion = window.navigator.appName;
ubicacion = window.navigator.appVersion;
ubicacion = window.navigator.userAgent;
ubicacion = window.navigator.language;

console.log(ubicacion);

//scope 

