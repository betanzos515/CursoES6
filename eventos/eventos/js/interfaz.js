class Interfaz{
    constructor(){
        this.init();
        //leer el resultado
        this.listado = document.getElementById('resultado-eventos');
    }
    init(){
        this.imprimirCategorias();
    }

    //impimirCategorias
    imprimirCategorias(){
        const listaCategorias = eventBrite.obtenerCategorias()
        .then(categorias=>{
            const cats = categorias.categorias.categories;
            const selectCategoria = document.querySelector('#listado-categorias');
            cats.forEach(categoria=>{
                const option = document.createElement('option');
                option.value = categoria.id;
                option.appendChild(document.createTextNode(categoria.name_localized));
                selectCategoria.appendChild(option);
            })
        })

    }
    
    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));

        //seleccionar mensajes
        const divMensajes = document.querySelector('#buscador');
        divMensajes.appendChild(div);

        //mostrar contenido
        setTimeout(()=>{
            div.remove();
        },1500);
    }

    mostrarEventos(eventos){
        console.log(eventos);
        //leer los eventos y agregarlos a una variable 
        const listaEventos = eventos;

        listaEventos.forEach(evento=>{
            this.listado.innerHTML += `
                <div class='col-md-4 mb-4'>
                    <div class='card'>
                            <img class='img-fluid mb-2' src='${evento.logo !== null ? evento.logo.url:''}'>
                        <div class="card-body">
                            <div class='card-text'>
                                <h2 class="text-center">${evento.name.text}</h2>
                                <p class='lead text-info'>Informacion del evento</p>
                                <p>${evento.description.text.substring(0,280)}...</p>
                                <span class='badge badge-primary'>Capacidad : ${evento.capacity}</span>
                                <span class='badge badge-secondary'>Fecha y Hora : ${evento.start.local}</span>
                                <a href="${evento.url}" target='_blank' class='btn btn-primary btn-block mt-4'">Comprar Boletos</a>
                            </div>
                        </div>
                    </div>
            `;
        });
    }

    limpiarResultadosPrevios(){
        this.listado.innerHTML = '';
    }
}