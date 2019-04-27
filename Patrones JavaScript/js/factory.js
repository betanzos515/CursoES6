function ConstructorSitios(){
    this.crearElemento = (texto,tipo)=>{
        let html;

        if(tipo === 'input'){
            html = new InputHTML(texto);
        }else if(tipo === 'img'){
            html = new ImagenHTML(texto);
        }
        else if(tipo === 'h1'){
            html = new HeadingHTML(texto);
        }else if(tipo === 'p'){
            html = new ParrafoHTML(texto);
        }

        html.tipo = tipo;
        html.mostrar = function(){
            const elemento = document.createElement(this.tipo);

            if(this.tipo === "input"){
                elemento.setAttribute('placeholder',this.texto); 
            }else if(this.tipo === 'img'){
                elemento.setAttribute('src',this.texto);
            }else{
                elemento.appendChild(document.createTextNode(this.texto));
            }

            document.querySelector('#app').appendChild(elemento);

        }

        return html;
    }
}

const InputHTML =  function(texto){
    this.texto = texto;
}

const ImagenHTML =  function(texto){
    this.texto = texto;
}
const HeadingHTML =  function(texto){
    this.texto = texto;
}

const ParrafoHTML =  function(texto){
    this.texto = texto;
}

const crearSitio = new ConstructorSitios();

const elementosWeb = [];

crearSitio.crearElemento('Bienvenidos','h1');
elementosWeb.push(crearSitio.crearElemento('Bienvenido','h1'));
elementosWeb.push(crearSitio.crearElemento('Bienvenido a mi nuevo sitio web','p'));
elementosWeb.push(crearSitio.crearElemento('lovo.svg','img'));
elementosWeb.push(crearSitio.crearElemento('Conoce más sobre nosotros','h1'));
elementosWeb.push(crearSitio.crearElemento('Contacto','input'));
elementosWeb.push(crearSitio.crearElemento('Contactanos en el formulario','h1'));
console.log(elementosWeb);
elementosWeb.forEach(elemento =>{
    elemento.mostrar();
})