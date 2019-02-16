//Esta es la forma en la que se declara un Map
let cliente = new Map();

//la forma de pasarle valores a un Map es mandando una llave y un valor como se muestra en el ejemplo siguiente
cliente.set('nombre','Karen');
cliente.set('tipo','Premium');
cliente.set('saldo',3000);

console.log(cliente);
//para acceder a un cliente en espesifico es de la siguiente forma 
console.log(cliente.get('nombre'));
//metodo para comprobar un elemento dentro del map
console.log(cliente.has('saldo'));
//metodo para eliminar un elemento del map
console.log(cliente.delete('nombre'));
//metodo para limpiar el map()
cliente.clear();
console.log(cliente);

//como pasar valores definidos a un map

const paciente = new Map([
    ['propiedad1','valorPropiedad1'],
    ['propiedad2','valorPropiedad2']
]);
//notese que estamos pasando el nombre de las propiedades declaradas previamente en el set
paciente.set('propiedad1','Primero valor agregado');
paciente.set('propiedad2','Segundo Valor agregado');
console.log(paciente);