/* class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
 */

class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    //Esta es la forma de declarar metodos dentro de una clase en JavaScript
    imprimirSaldo(){
        return `El saldo disponible en la cuenta de ${this.nombre} es de ${this.saldo}`;
    }

    
    //Existen metodos estaticos los cuales pueden ser ocupados sin necesidad de crear una instancia de la clase
    static saludar(){
        console.log(`Hola ${this.nombre} te saludo desde una función`);
    }

}

class Empresa extends Cliente{
    constructor(nombre, saldo,telefono,tipo){
        //va hacia el construnctor padre
        super(nombre,saldo);
        this.telefono = telefono;
        this.tipo = tipo;
    }
}


const maria = new Cliente('Maria','Lopez',10000);
Cliente.saludar();
const empresa = new Empresa('David',1200,9511057859,'Desarrollo');
console.log(empresa.imprimirSaldo());