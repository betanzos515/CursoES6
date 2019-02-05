const formulario = document.getElementById('generar-nombre');


formulario.addEventListener('submit',cargarNombres);



function cargarNombres(e){
    e.preventDefault();

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const gener = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url+='http://uinames.com/api/?';

    if(origenSeleccionado != '')
        url+= `region=${origenSeleccionado}&`;
    
    if(generoSeleccionado != '')
        url+= `gender=${generoSeleccionado}&`;
    
    if(cantidad != '')
        url+= `amount=${cantidad}&`;
    
    //CONECTAR XMLHTTPREQUEST

    const xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);

    xhr.onload = function(){
        if(this.status === 200){
             const nombres = JSON.parse(this.responseText);
             let template = '<ul class="lista">';
             nombres.forEach(function(nombre){
               template+= `<li>${nombre.name}</li>`;
             });
             template+='</ul>';
             document.getElementById('resultado').innerHTML = template;
        }
    }
    xhr.send();
}
