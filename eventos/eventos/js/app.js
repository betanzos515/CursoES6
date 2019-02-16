const eventBrite = new EventBrite();
const ui =  new Interfaz();

//listener al buscador

document.getElementById('buscarBtn').addEventListener('click',(e)=>{
    e.preventDefault();

    const evento = document.querySelector('#evento').value;

    const categoria = document.querySelector('#listado-categorias');
    const categoriaSeleccionada = categoria.options[categoria.selectedIndex].value;
    
    //revisar que tenga escrito el buscador 

    if(evento!==''){
        eventBrite.obtenerEvento(evento,categoriaSeleccionada)
        .then(evento =>{
            const resultado = evento.eventos.events;

            if(resultado.length > 0){
                ui.limpiarResultadosPrevios();
                ui.mostrarEventos(resultado);
            }
            else{
                console.log('El arreglo no contiene datos');
            }
        })
    }
    else{
        ui.mostrarMensaje('Ingresa un evento en el formulario','alert bg-danger text-center mt-4');

    }
});