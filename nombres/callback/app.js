
const ciudades = ['Londres','New York','Madrid','Paris','Viena'];


//Se agrega un nuevo pais despues de dos segundos
function nuevaCiudad(ciudad,callback){
    setTimeout(function(){
        ciudades.push(ciudad);
        callback();
    },2000);
}

//Vamos a ver como utilizar un callback
function mostrarCiudades(){
    setTimeout(function(){
        let html = '';
        ciudades.forEach(function(ciudad){
            html+=`<li>${ciudad}</li>`
        });
        document.getElementById('resultado').innerHTML = html;
    },1000);
}

nuevaCiudad('CDMX',mostrarCiudades);
mostrarCiudades();

