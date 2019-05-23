let DB;

//selecctores de la interfaz
const form = document.querySelector('form'),
nombreMascota = document.querySelector('#mascota'),
nombreCliente = document.querySelector('#cliente'),
telefono = document.querySelector('#telefono'),
fecha = document.querySelector('#fecha'),
hora = document.querySelector('#hora'),
sintomas = document.querySelector('#sintomas'),
citas = document.querySelector('#citas'),
hedingAdministra = document.querySelector('#administra');

//Esperar por el DOM Ready

document.addEventListener('DOMContentLoaded',()=>{
    
    //crear la base de datos
    let crearDB = window.indexedDB.open('citas',1);

    //si hay un error enviarlo a la consola
    crearDB.onerror = ()=>{
        console.log("Hubo un error");
    }

    //si todo esta bien mostrar en consola y asignar la base de datos
    crearDB.onsuccess = ()=>{
        console.log('Todo listo');

        //asignar a la base de datos

        DB = crearDB.result;
        console.log(DB);
    }

    //Este metodo solo corre una vez y es ideal para crear el Schema 
    crearDB.onupgradeneeded = (e)=>{
        console.log("Solo una vez");
    }

})