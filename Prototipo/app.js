function Cliente(nombre,saldo){
    
    this.nombre = nombre;
    this.saldo = saldo;
}
 

//crear un prototype 
/* Cliente.prototype.tipoCliente = function(edad){
    let tipo 

    if(this.slado >1000){
        tipo = 'Gold';
    }
    else if(this.saldo > 500){
        tipo = 'Platinum'; 
    }
    else{
        tipo = 'Nomal';
    }
    return tipo;
}
 */
//Prototipo que imprime saldo y nombre

/* Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}`
} */

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, tu Saldo: ${this.saldo}`;
}

/* Cliente.prototype.retirarSaldo = function(retiro){
    return this.saldo -= retiro;
} */

function Empresa(nombre,saldo,edad,direccion){
    Cliente.call(this,nombre,saldo);
    this.edad = edad;
    this.direccion = direccion;
}

function Empresario(nombre,saldo,edad,direccion,costo){
    Empresa.call(this,nombre,saldo,edad,direccion);
    this.costo = costo;
}

//Aqui si podemos checar en el prototip del objeto Empresario no podemos acceder al prototype de Cliente ya que el prototipo tiene que se asignado manualmente.


Empresa.prototype = Object.create(Cliente.prototype);
Empresario.prototype =  Object.create(Empresa.prototype);
const empresa = new Empresa('Carr',2000,27,'Martinez Gomez S/N');
const empresario = new Empresario('dad',12300,25,'Jose Gorostiza',5000);






console.log(empresa);
console.log(empresario.nombreClienteSaldo());
/* const cliente = new Cliente('Pedro',5000);
console.log(cliente.nombreClienteSaldo());
console.log(cliente.retirarSaldo(100)); */