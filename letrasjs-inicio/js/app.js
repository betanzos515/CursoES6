import {API} from './api.js';
import * as UI from './interfaz.js';

UI.formularioBuscar.addEventListener('submit',(e)=>{
    e.preventDefault();

    //obtener datos del formulario.
    const artista = document.querySelector('#artista').value,
        cancion = document.querySelector('#cancion').value;

    console.log(artista);
    console.log(cancion);

    if(artista === '' || cancion ===''){
        UI.divMensajes.innerHTML = 'Error todos los campos son obligatorios';
        UI.divMensajes.classList.add('error');
        setTimeout(()=>{
            UI.divMensajes.classList.remove('error');
            UI.divMensajes.innerHTML = '';
        },3000);
    }
    else{
        //El formulario está completo realizar consulta a la API
        const api = new API(artista,cancion);
        api.consultarAPI()
            .then(data=>{
                if(data.respuesta.lyrics){
                    console.log(data.respuesta.lyrics);
                    UI.divResultado.textContent = data.respuesta.lyrics;
                }
                else{
                    UI.divMensajes.innerHTML = 'No se encontraron datos';
                    UI.divMensajes.classList.add('error');
                    setTimeout(()=>{
                        UI.divMensajes.classList.remove('error');
                        UI.divMensajes.innerHTML = '';
                    },3000);
                }
            })
            .catch(error=>{
                console.log(error);
            })

    }
});

