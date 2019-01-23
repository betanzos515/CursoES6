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

        if(this.tipo === 'error'){
            div.classList.add('alert-danger');
        }
        else{
            div.classList.add('alert-sucess');
        }
        div.appendChild(document.createTextNode(mensaje));
        
        //insertar en el DOM 
        document.querySelector('.primario').insertBefore(div,formulario);

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
        
    }

})