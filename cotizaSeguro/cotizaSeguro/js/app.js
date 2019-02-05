
<<<<<<< HEAD

let maximo = new Date().getFullYear();
let minimo = maximo - 20;
let listaAnio = document.querySelector('#anio');
let boton = document.querySelector('.btn');

boton.addEventListener('click',validarFormulario);


console.log(maximo);
console.log(minimo)

for(let i = maximo;i>=minimo;i--){
    let option = document.createElement('option');
    option.innerHTML = i;
    console.log(option);
    listaAnio.appendChild(option);    
}

function validarFormulario(e){
    e.preventDefault();
    let anios = document.querySelector('#anio');
    console.log(anios.value);
    let spinner = document.querySelector('img').style.display = 'block';
    setTimeout(() => {
        let spinner = document.querySelector('img').style.display = 'none';
    }, 3000);
}

function Seguro(marca,anio,tipo){
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function(){
    
    /* 
    1.- Americano 1.15
    2.- Asiatico 1.05
    3.- Europeo 1.35
   */
   let cantidad;
   const base = 2000;

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
    }

    //Leer el año
      const diferencia = new Date().getFullYear() - this.anio;

    //cada año de diferencia hay que reducir 3% al valor del seguro
    cantidad -= ((diferencia*3)*cantidad)/100;
    
    console.log(diferencia);
    /*
        Si el seguro es basico se multiplica por 30% mas
        Si el seguro es completo por 50% mas
    */

    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }
    else{
        cantidad *= 1.50;
    }

    return cantidad;
}

//todo lo que se muestra
function Interfaz(){};

//mensaje que se imprime en el HTML
Interfaz.prototype.mostrarMensaje = function(mensaje,error){
    const div = document.createElement('div');

    if(error === 'error'){
        div.classList.add('mensaje','error');
    }
    else{
        div.classList.add('mensaje','correcto');
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));
    
    setTimeout(function(){
        div.remove();
    },3000);
}

Interfaz.prototype.mostrarResultado = function(seguro,total){
    const resultado = document.getElementById('resultado');
    let marca;
    switch(seguro.marca){
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiatico';
            break;
        case '3':
            marca = 'Europeo';
            break;
    }
    
    const div = document.createElement('div');
    div.innerHTML = `
        <p class="header">Tu resumen:</p>
        <p>Marca : ${marca}</p>
        <p>Año : ${seguro.anio}</p>
        <p>Tipo: ${seguro.tipo}</p>
        <p>Total : ${total}</p>
    `;

    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    setTimeout(function(){
        resultado.appendChild(div);
        spinner.style.display = 'none';
    },1000);
    
}


//event listener
const formulario = document.getElementById('cotizar-seguro')
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    
    //leer la marca
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    
    //leer el año
    const anio 
     = document.getElementById('anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    //leer el valor de los radiobutton
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    const interfaz = new Interfaz();


    //revisamos que los campos no estén vacios
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo ===''){
        interfaz.mostrarMensaje('Faltan datos, revisa el formulario y prueba de nuevo','error');
    }
    else{
        //Limpiar resultados 
        const resultado = document.querySelector('#resultado div');
        if(resultado !=null ){
            resultado.remove();
        }
         
        const seguro = new Seguro(marcaSeleccionada,anioSeleccionado,tipo);
        //cotizar el seguro
        const cantidad = seguro.cotizarSeguro();
        interfaz.mostrarResultado(seguro,cantidad);
        interfaz.mostrarMensaje('Cotizando...','correcto')
    }
});


cargarAnios();

function cargarAnios(){
    let anioActual = new Date().getFullYear(),
        ultimoAnio = anioActual-20;
        let campoAnios = document.querySelector('#anio');
        for(let i = anioActual ; i>=ultimoAnio;i--){
            let campo = document.createElement('option');
            campo.value = i;
            campo.innerText = i;
            campoAnios.appendChild(campo);
        }
}
>>>>>>> 6ae9e8e45bf7629d053569828cabd3b7fc7acd00
