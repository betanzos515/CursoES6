document.getElementById('cargar').addEventListener('click',cargarDatos);

function cargarDatos(){
    const xhr = new XMLHttpRequest();

    //CREAR EL OBJETO xmlhttprequest
    xhr.open('GET','datos.txt',true);

    //una vez que carga la pagina 
    xhr.onload = function(){
        //200: Correcto
        //403: Prohibido
        //404: No encontrado

        if(this.status === 200){
            document.getElementById('listado').textContent = this.responseText;
        }
    }

    //Enviar el requiest
    xhr.send();
}