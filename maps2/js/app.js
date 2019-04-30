const ui = new UI();

document.addEventListener('DOMContentLoaded',()=>{
    ui.mostarEstablecimientos();
})

//Busqueda de estabecimientos
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input',()=>{
    if(buscador.value.length > 5){
        //buscar en la api
        ui.obtenerSugerencias(buscador.value);
    }
});