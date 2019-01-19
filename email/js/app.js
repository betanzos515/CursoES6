const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');
const btnResetear = document.querySelector
('#resetBtn');

const spinner = document.querySelector('#spinner');
let contador = 0;

eventDefault();

function eventDefault(){

    document.addEventListener('DOMContentLoaded',iniciar);
    email.addEventListener('blur',validarCampo);
    asunto.addEventListener('blur',validarCampo);
    mensaje.addEventListener('blur',validarCampo);   
    btnResetear.addEventListener('click',resetearFormulario);
    enviar.addEventListener('click',enviarMail);
}

function iniciar(){
    enviar.disabled = true;
}


function validarCampo(){
    comprobarLongitud(this);
    if(this.type == 'email'){
        validarEmail(this);
    }
   
    let error = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        
        if(error.length ===0){
            enviar.disabled = false;
        }
    }
    else{
        enviar.disabled = true;
    }
}

function validarEmail(e){
        if(e.value.indexOf('@') != -1){
            e.style.borderBottomColor = 'green';
            e.classList.remove('error');
        }
        else{
            e.style.borderBottomColor = 'red';
            e.classList.add('error');
        }
}

function comprobarLongitud(elemento){
    if(elemento.value.length > 0){
        elemento.style.borderBottomColor = 'green';
        elemento.classList.remove('error');
    }
    else{
        elemento.style.borderBottomColor = 'red';
        elemento.classList.add('error');
    }
}   

function resetearFormulario(){

    email.value =null;
    asunto.value = null;
    mensaje.value = null;
    enviar.disabled = true;
    spinner.style.display = 'none';
    document.querySelector('#loaders').style.display = 'none';
}

function enviarMail(e){
    e.preventDefault();
    spinner.style.display = "block";   

    const enviado  = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    
    //ocultar spinner y mostrar gif enviado
    
    setTimeout(function(){
        spinner.style.display = 'none';
        const loaders = document.querySelector('#loaders');
        loaders.appendChild(enviado);
        setTimeout(function(){
            enviado.remove();
            document.querySelector('#enviar-mail').reset();;
        },3000);

    },3000);
} 
















/* function comprobarDatosEmail(e){
    if(e.target.value.indexOf('@') != -1){
        e.target.style.borderBottom = '2px solid    green';
        habilitarBoton(1);
    }
    else{
        
        e.target.style.borderBottom = '2px solid red';
    }
}

function comprobarDatosAsunto(e){
    if(e.target.value != ''){
        e.target.style.borderBottom = '2px solid green';
        habilitarBoton(1);
        
    }
    else{
        e.target.style.borderBottom = '2px solid red';
    }
    
}

function comprobarDatosMensaje(e){
    if(e.target.value != ''){
        e.target.style.borderBottom = '2px solid green';
        habilitarBoton(1);
    }
    else{
        e.target.style.borderBottom = '2px solid red';
    }
} */


/* function habilitarBoton(valor){
    contador += valor; 
    
    if(contador == 3){
        enviar.disabled = false;
        contador = 0;
    }
    else{
        enviar.disabled = true;
    }

}

function resetearFormulario(){

    email.value =null;
    asunto.value = null;
    mensaje.value = null;
    contador = 0;
    spinner.style.display='none';
    contador = 0;
    enviar.disabled = true;
}

function enviarMail(e){
    e.preventDefault();
    spinner.style.display = "block";    
} 


 */