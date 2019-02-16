/* const cliente ={
    nombre:'Alejandra',
    tipo:'premium'
}
 */
//Este es em metodo tradicional
/* let nombre = cliente.nombre,
    tipo = cliente.tipo;

console.log(nombre);
console.log(tipo); */

/* let {nombre,tipo} = cliente;
console.log(nombre);
console.log(tipo);
 */

 const cliente ={
     tipo:'Premium',
     nombre:'Alvaro',
     datos:{
         ubicacion:{
             ciudad:'Jalisco',
             pais:'Mexico'
         },
         cuenta:{
             desde:'10-12-1012',
             saldo:4000
         }
     }
 }

 let ={datos:{ubicacion},datos:{cuenta}}=cliente;

 let={datos} = cliente;

 console.log(datos);

 //como hacer destructiring a un arreglo

 const ciudad = ['Londres','Madrid','Japon','Paris'];

 //los valores se sustituyen por los reales del arreglo
 let [primero,segundo,tercero,cuarto] = ciudad;

 //si necesitaramos imprimir un solo valor lo podriamos hacer de la siguiente forma
 let [,,,valorcuarto] = ciudad;

 console.log(primero);
 console.log(valorcuarto);


 const clienta = {
     tipo:'premium',
     saldo: 3000,
     datos:{
         nombre:'Pedro',
         apellido:'Perez',
         residencia:{
             ciudad:'Mexico'
         }
     },
     movimientos:['12-03-2018','15-03-2018','17-03-2018']
 }

 let {
    tipo,
    datos:{nombre}
 }=clienta;

 console.log(nombre);

 //en este lado veremos la manera de hacer destructuring a una funcion

 function reservacion(completo,opciones){
    /*  opciones = opciones || {};
     if(completo)
        console.log(opciones.metodoPago);
     else
        console.log('No se pudo completar la operación'); */
    let {metodoPago,cantidad,dias}=opciones
    console.log(metodoPago);
    console.log(cantidad);
    console.log(dias);
 }

 reservacion(
    true,
    {
        metodoPago:'Credit Card',
        cantidad:2000,
        dias:3
    }

 );

 //en caso de necesitar que se asignen valores por default en un funcion se hace de la siguiente manera 

 function reservacion2(completo,
    {
    metodoPago='efectivo',
    cantidad=0,
    dias=0
    }={})
    {
        console.log(metodoPago);
        console.log(cantidad);
        console.log(dias);
    }



 reservacion2(true,{
     metodoPago:'Credit-card'
 })

 //set te permite crear una lista de valores o arreglo solo que no te permite tener valores duplicados

 let carrito = new Set();

 //para agregar un valor al ser se agregar el metodo add();

 carrito.add('Camisa');
 carrito.add('Disco 1');
 carrito.add('Disco 2');
 carrito.add('Disco 3');
 carrito.add('Disco 3');

 console.log(carrito);
 console.log(carrito.size);

 //comprobando que algun valor exista en el set
//En este primero podemos ver como nos retorna False ya que el lenguaje es suseptible a mayusculas y minusculas por ende está mal escrito y no puede encontrarlo
 console.log(carrito.has('camisa'));

 //El valor de retorno es True
 console.log(carrito.has('Camisa'));

  //los set se pueden convertir a arreglos de la siguiente forma
  let arregloCarrito = [...carrito];
  console.log(arregloCarrito);
 

 //la forma de eliminar valores en el set es con el metodo delete();

 carrito.delete('Disco 3');
 console.log(carrito);


 //de igual manera puede vaciarse totalmente si ocupamos el metodo .clear()
 carrito.clear();
 console.log(carrito);















