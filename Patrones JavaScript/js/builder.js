class Formulario{
    constructor(){
        this.campos = [];
    }

    agregarCampo(tipo,texto){
        let campos = this.campos;

        let campo;

        switch(tipo){
            case 'text':
                campo = new InputText(texto);
                break;
            case 'email':
                campo = new InputEmail(texto);
                break;
            case 'button':
                campo = new Boton(texto);
                break;
            default:
                throw new Error('Tipo no valido: '+tipo);
        }
        campos.push(campo);
    }

    obtenerFormulario(){
        let form = document.createElement('form'),
            campos = this.campos.length,
            campo;

            for(let i=0;i<campos;i++){
                campo = this.campos[i];
                form.appendChild(campo.crearElemento());
                let br = document.createElement('br');
                form.appendChild(br);
            } 
            
            return form;
    }
}

class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

class InputText extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const elemento = document.createElement('input');
        elemento.setAttribute('type','text');
        elemento.setAttribute('placeholder',this.texto);
        return elemento;
    }
}

class InputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const elemento = document.createElement('input');
        elemento.setAttribute('type','email');
        elemento.setAttribute('placeholder',this.texto);
        return elemento;
    }
}

class Boton extends Inputs{
    constructor(texto){
        super(texto);
    }

    crearElemento(){
        const elemento = document.createElement('button');
        elemento.setAttribute('type','submit');
        elemento.textContent = this.texto;
        return elemento;
    }
}

//Instanciar Formulario
const formulario = new Formulario();
formulario.agregarCampo('email','Bienvenidos');
formulario.agregarCampo('text','Nuevo');
formulario.agregarCampo('button','Aceptar');


document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('#app').appendChild(formulario.obtenerFormulario());
})
console.log(formulario);