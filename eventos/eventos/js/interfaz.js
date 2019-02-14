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
}