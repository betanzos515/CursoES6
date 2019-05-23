const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}
const Comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta:function(articulo,precio){
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en : ${precio}`);
    },
    vendido:function(comprador){
        console.log(`Vendido a ${comprador} (sonido de mazo)`);
    }
}

Comprador.prototype={
    ofreta:function(mensaje,comprador){
        console.log(`${comprador.nombre}: ${mensaje}`);
    }
}

const Subasta = function(){
    let compradores = {};

    return{
        registrar:function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
            console.log(compradores);
        }
    }
}

const david = new Comprador('David');
const sebastian = new Comprador('Sebastian');
const alondra = new Comprador('Alondra');

const vendendor = new Vendedor('LUIS');

const subasta = new Subasta();
subasta.registrar(david);
subasta.registrar(sebastian);
subasta.registrar(alondra);

console.log(david);