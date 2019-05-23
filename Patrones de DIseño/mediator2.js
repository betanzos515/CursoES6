const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

const Comprador  = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`Tenemos el siguiente articulo ${articulo}, inciamos en ${precio}`);
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador} (Sonido de mazo)`);
    }

}

Comprador.prototype={
    oferta: function(mensaje,comprador){
        console.log(`${comprador.nombre} : ${mensaje}`);
    }
}

const Subasta = function(){
    let compradores ={};

    return{
        registrar:function(usuario){
            console.log(usuario.nombre);
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

//Instanciamos las clases

const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const karen = new Comprador('Karen');

const vendedor = new Vendedor('vendedor');
const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(karen);

/* console.log(subasta);


const subasta2 = new Subasta();
subasta2.registrar(karen);

console.log(subasta2); */

vendedor.oferta('Mustang',3000);
juan.oferta(3000,juan);
pablo.oferta(3500,pablo);
karen.oferta(10000,karen);
vendedor.vendido(karen.nombre);
