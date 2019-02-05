//variables
const presupuestoSemanal = prompt('Cual es el presupuesto Semanal ?');
let cantidadPresupuesto;
const formulario = document.getElementById('agregar-gasto');

//clases
class Presupuesto{
    constructor(cantidad){
        this.cantidad = Number(cantidad) ;
        this.restante = Number(cantidad);
    }

    //metodo para ir restando del presupuesto actual
    calcularRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}

//maneja toda la relacion que se tenga con el HTML
class Interfaz{

    insertarPresupuesto(presupuesto){
        console.log(presupuesto);
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        //insertar al HTML
        presupuestoSpan.innerHTML = `${presupuesto}`;
        restanteSpan.innerHTML = `${presupuesto}`;
    }
    imprimirMensaje(mensaje,tipo){
        const div = document.createElement('div');
        div.classList.add('text-center','alert');
        console.log(mensaje);
        console.log(tipo);

        if(tipo === 'error'){
            div.classList.add('alert-danger');
        }
        else{
            div.classList.add('alert-success');
        }
        div.appendChild(document.createTextNode(mensaje));
        
        //insertar en el DOM 
        document.querySelector('.primario').insertBefore(div,formulario);
        
        setTimeout(function(){
            div.remove();
            formulario.reset();
        },2500);

    }

    agregarGastoListado(gasto,cantidad){

        const gastosListado = document.querySelector('#gastos ul ');
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            ${gasto}
            <span class='badge badge-primary badge-pill'> $ ${cantidad}</span>
        `; 
        gastosListado.appendChild(li);
    }

    presupuestoRestante(presupuesto){
        const restante = document.querySelector('span#restante');
        const presupuestoRestanteUsuario = cantidadPresupuesto.calcularRestante(presupuesto);
        restante.innerHTML = `${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto();
    }

    //cambia de color el presupuesto restante;
    comprobarPresupuesto(){
        const presupuestoTotal = cantidadPresupuesto.cantidad;
        const presupuestoRestante = cantidadPresupuesto.restante;
        
        //comprobar el 25%
        if((presupuestoTotal/4) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success','alert-warning');
            restante.classList.add('alert-danger');
        }else if((presupuestoTotal / 2) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }

}


//Event Listener
document.addEventListener('DOMContentLoaded',function(){
    if(presupuestoSemanal == null || presupuestoSemanal == '' || presupuestoSemanal == NaN){
        window.location.reload();
    }
    else{
        cantidadPresupuesto = new Presupuesto(presupuestoSemanal);
        //instanciar la clase de Interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.cantidad);
    }
});

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    const gastoFormulario = document.getElementById('gasto').value;
    const cantidadFormulario = document.getElementById('cantidad').value;

    const ui = new Interfaz();

    if(gastoFormulario ==='' || cantidadFormulario === ''){
        //Dos parametros, mensaje y tipo
        ui.imprimirMensaje('Hubo un problema al ingresar el texto','error');
    }
    else 
    {
        ui.imprimirMensaje('Correcto','correcto');
        ui.agregarGastoListado(gastoFormulario,cantidadFormulario);
        ui.presupuestoRestante(cantidadFormulario);
    }

})