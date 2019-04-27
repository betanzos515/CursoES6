/* const esperando = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Se ejecuto');
    },5000);
});

esperando.then(function(mensaje){
    console.log(mensaje);
});
 */

 const aplicarDescuento = new Promise(function(resolve,reject){
    const descuento = false;
    if(descuento){
        resolve('Descuento aplicado');
    }else{
        reject('No se puede aplicar el descuento');
    }
 });

 //Asi como los resolve van en conjunto con el then cuando no se cumple la promesa y el codigo entra al reject se debe de poner un catch para poder manejar el error
 aplicarDescuento.then(function(mensaje){
    console.log(mensaje);
 }).catch(function(error){
    console.log(error);
 });