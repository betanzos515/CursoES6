//patron de diseño module
const comprarBoleto = (function(){
    //Todo lo que exista dentro del este bloque es privado
    const evento = 'Conferencia JS 2019',
          precio = 200;
    const adquirirBoletos = ()=>{
        const elemento = document.createElement('p');
        elemento.textContent = `Acabas de adquirir boletos para: ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    };


    return{
        //Todo lo que esté dentro del return sera publico
        mostrarBoletos:function(){
            adquirirBoletos();
        }
    }
})();

comprarBoleto.mostrarBoletos();