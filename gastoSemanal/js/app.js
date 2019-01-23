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

}


//Event Listener
document.addEventListener('DOMContentLoaded',function(){
    if(presupuestoSemanal == null || presupuestoSemanal == ''){
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
    const gastoFormulario = document.getElementById('gasto');
    const cantidadFormulario = document.getElementById('cantidad');
    console.log(gastoFormulario.value);
    console.log(cantidadFormulario.value);
})