// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

function obtenerAutos(){
    return [
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2012,
            precio: 30000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { 
            marca: 'Audi', 
            modelo: 'A4', 
            year: 2018, 
            precio: 40000, 
            puertas: 4, 
            color: 'Negro', 
            transmision: 'automatico' 
        },
        {
            marca: 'Ford',
            modelo: 'Mustang',
            year: 2015,
            precio: 20000,
            puertas: 2,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { 
            marca: 'Audi', 
            modelo: 'A6', 
            year: 2010, 
            precio: 35000, 
            puertas: 4, 
            color: 'Negro', 
            transmision: 'automatico' },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2016,
            precio: 70000,
            puertas: 4,
            color: 'Rojo',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2015,
            precio: 25000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'Chevrolet',
            modelo: 'Camaro',
            year: 2018,
            precio: 60000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        { 
            marca: 'Ford', 
            modelo: 'Mustang', 
            year: 2019, 
            precio: 80000, 
            puertas: 2, 
            color: 'Rojo', 
            transmision: 'manual' 
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2017,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { 
            marca: 'Audi', 
            modelo: 'A3', 
            year: 2017, 
            precio: 55000, 
            puertas: 2, 
            color: 'Negro', 
            transmision: 'manual' 
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2012,
            precio: 25000,
            puertas: 2,
            color: 'Rojo',
            transmision: 'manual'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 45000,
            puertas: 4,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2019,
            precio: 90000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { 
            marca: 'Ford', 
            modelo: 'Mustang', 
            year: 2017, 
            precio: 60000, 
            puertas: 2, 
            color: 'Negro', 
            transmision: 'manual' 
        },
        {
            marca: 'Dodge',
            modelo: 'Challenger',
            year: 2015,
            precio: 35000,
            puertas: 2,
            color: 'Azul',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 3',
            year: 2018,
            precio: 50000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        {
            marca: 'BMW',
            modelo: 'Serie 5',
            year: 2017,
            precio: 80000,
            puertas: 4,
            color: 'Negro',
            transmision: 'automatico'
        },
        {
            marca: 'Mercedes Benz',
            modelo: 'Clase C',
            year: 2018,
            precio: 40000,
            puertas: 4,
            color: 'Blanco',
            transmision: 'automatico'
        },
        { 
            marca: 'Audi', 
            modelo: 'A4', 
            year: 2016, 
            precio: 30000, 
            puertas: 4, 
            color: 'Azul', 
            transmision: 'automatico' 
        }
    ];
    
    // forEach
    
    // map
    
    // filter
    
    // find
    
    // reduce
    
    // some
    
    
    
}

//EventListener
const autos = obtenerAutos();
document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos);
});
function limpiarHTML(){
    const resultado = document.querySelector('#resultado');
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}
function mostrarAutos(autos){
    limpiarHTML();
    const resultado = document.querySelector('#resultado');
    autos.forEach(auto=>{
        const elemento = document.createElement('p');
        elemento.innerHTML  = `<p>Marca : ${auto.marca} Modelo : ${auto.modelo} Precio : ${auto.precio} Año : ${auto.year} Color : ${auto.color}  Puertas : ${auto.puertas} Transmision : ${auto.transmision}</p>`;
        resultado.appendChild(elemento);
    })
}

const datoBuscar = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color:''
}

const marca = document.querySelector('#marca');
marca.addEventListener('input',e =>{
    datoBuscar.marca = e.target.value;
    filtrarAuto();
});

const year = document.querySelector('#year');
year.addEventListener('input',e =>{
    datoBuscar.year = Number(e.target.value);
    filtrarAuto();
});

const minimo = document.querySelector('#minimo');
minimo.addEventListener('input',e =>{
    datoBuscar.minimo = Number(e.target.value);
    filtrarAuto();
});

const maximo = document.querySelector('#maximo');
maximo.addEventListener('input',e =>{
    datoBuscar.maximo = Number(e.target.value);
    filtrarAuto();
});

const puertas = document.querySelector('#puertas');
puertas.addEventListener('input',e =>{
    datoBuscar.puertas = Number(e.target.value);
    filtrarAuto();
});

const transmision = document.querySelector('#transmision');
transmision.addEventListener('input',e =>{
    datoBuscar.transmision = e.target.value;
    filtrarAuto();
});

const color = document.querySelector('#color');
color.addEventListener('input',e =>{
    datoBuscar.color = e.target.value;
    filtrarAuto();
});

function noResultado(){
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.innerText = "Error no se encontraron resultados";
    resultado.appendChild(noResultado);
    setTimeout(()=>{
        resultado.removeChild(noResultado);
        mostrarAutos(autos);
    },2000);

    
}

//funcion para filtrar los resultados.
function filtrarAuto(){
    const resultado =obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    if(resultado.length){
        mostrarAutos(resultado);
    }
    else{
        limpiarHTML();
        noResultado();
    }
}

function filtrarMarca(auto){
    
    if(datoBuscar.marca){
        return datoBuscar.marca == auto.marca;
    }
    else{
        return auto;
    }
}

function filtrarYear(auto){
    if(datoBuscar.year){
        return datoBuscar.year == auto.year;
    }else{
        return auto;
    }
}

function filtrarMinimo(auto){
    if(datoBuscar.minimo){
        return auto.precio>= datoBuscar.minimo;
    }else{
        return auto;
    }
}  

function filtrarMaximo(auto){
    if(datoBuscar.maximo){
        return auto.precio <= datoBuscar.maximo;
    }else{
        return auto;
    }
} 

function filtrarPuertas(auto){
    if(datoBuscar.puertas){
        return auto.puertas == datoBuscar.puertas;
    }else{
        return auto;
    }
} 

function filtrarTransmision(auto){
    if(datoBuscar.transmision){
        return auto.transmision == datoBuscar.transmision;
    }else{
        return auto;
    }
} 

function filtrarColor(auto){
    if(datoBuscar.color){
        return auto.color == datoBuscar.color;
    }else{
        return auto;
    }
} 

sessionStorage.setItem('Primero','Segundo');