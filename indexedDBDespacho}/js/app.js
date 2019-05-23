//crearemos variable global para base de datos
let DB; 

//selectores de la interfaz

const form = document.querySelector('form'),
nombreMascota = document.querySelector('#mascota'),
nombreCliente = document.querySelector('#cliente'),
telefono = document.querySelector('#telefono'),
fecha = document.querySelector('#fecha'),
hora = document.querySelector('#hora'),
sintomas = document.querySelector('#sintomas'),
citas = document.querySelector('#citas'),
headingAdministra = document.querySelector('#adminstrar');


document.addEventListener('DOMContentLoaded',()=>{
    //Crear la base de datos.
    let crearDB = window.indexedDB.open('citas',1);

    //si hay un error enviarlo a la consola
    crearDB.onerror = ()=>{
        console.log('Hubo un error');
    }

    //Si todo está bien
    crearDB.onsuccess = ()=>{
        
        DB = crearDB.result;
    }

    //Este metodo solo se ejecuta una vez y es ideal para crear el schema de la BD
    crearDB.onupgradeneeded = (e)=>{
       //El evento es la misma base de datos

       let db = e.target.result;
       console.log("Este es el database"+db);
       
       //definir el objectStore, toma 2 parametros en el  nobre de la base de datos y segundo las opciones.

       //keyPath es el indice de la base de datos.
       let objectStore = db.createObjectStore('citas', {keyPath: 'key',
        autoIncrement: true });

        //crear los indices y campos de la base de datos, createIndex: 3 parametros, nombre, keypath y opciones
        objectStore.createIndex('mascota','mascota', {unique:false});
        objectStore.createIndex('cliente','cliente', {unique:false});
        objectStore.createIndex('telefono','telefono', {unique:false});
        objectStore.createIndex('fecha','fecha', {unique:false});
        objectStore.createIndex('hora','hora', {unique:false});
        objectStore.createIndex('sintomas','sintomas', {unique:false});

        console.log('Base de datos creada y lista');
    }

    //cuando el formulario se envia
    form.addEventListener('submit',agregarDatos);

    function agregarDatos(e){
        e.preventDefault();
        const nuevaCita = {
            mascota: nombreMascota.value,
            cliente: nombreCliente.value,
            telefono: telefono.value,
            fecha:fecha.value,
            hora:hora.value,
            sintomas:sintomas.value
        }
        console.log(nuevaCita);
    }
});

