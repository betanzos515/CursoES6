const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const enviar = document.querySelector('#enviar');
const btnResetear = document.querySelector('#resetBtn');



eventDefault();

function eventDefault(){

    email.addEventListener('blur',comprobarDatosEmail);
}

function comprobarDatosEmail(e){
    if(e.target.value.indexOf('@') != -1){
        console.log('Es un correo electronico')
    }
    else{
        
        e.target.style.border = '1px solid red;';
    }
}

