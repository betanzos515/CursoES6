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
headingAdministra = document.querySelector('#administra');


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
        mostrarCitas();
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
        //el IndexedDB lo utilizamos para las transacciones
        // con esta linea asignamos que vamos a insertar valores en la BD.
        let transaction = DB.transaction(['citas'],'readwrite');
        
        //esto nos retorna la base de datos
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.add(nuevaCita);
        console.log(peticion);
        peticion.onsuccess = ()=>{
            form.reset();
        }
        
        transaction.oncomplete = ()=>{
            console.log('Cita agregada');
            mostrarCitas();
        }

        transaction.onerror = ()=>{
            console.log('Hubo un error');
        }
    }

    function mostrarCitas(){
        //limpiar citas anteriores
        while(citas.firstChild){
            citas.removeChild(citas.firstChild);
        }

        //creamos un objectStore 
        let objectStore = DB.transaction('citas').objectStore('citas');

        //esto retorna una peticion
        objectStore.openCursor().onsuccess = function(e){
            //cursor se va a ubicar en el registro indicado para acceder a los datos

            let cursor = e.target.result;
            /* console.log(cursor.value.cliente); */

            if(cursor){

                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id',cursor.value.key);

                citaHTML.classList.add('list-group-item');
                citaHTML.innerHTML = `
                    <p class='font-weight-bold'>Mascota : <span class='font-weight-normal'>${cursor.value.mascota}</span></p>
                    <p class='font-weight-bold'>Cliente : <span class='font-weight-normal'>${cursor.value.cliente}</span></p>
                    <p class='font-weight-bold'>Telefono : <span class='font-weight-normal'>${cursor.value.telefono}</span></p>
                    <p class='font-weight-bold'>Fecha : <span class='font-weight-normal'>${cursor.value.fecha}</span></p>
                    <p class='font-weight-bold'>Hora : <span class='font-weight-normal'>${cursor.value.hora}</span></p>
                    <p class='font-weight-bold'>Sintomas : <span class='font-weight-normal'>${cursor.value.sintomas}</span></p>
                `;

                // boto de borrar

                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar','btn','btn-danger');
                botonBorrar.innerHTML = `<span aria-hidden='true'>X</span> Borrar`;
                //botonBorrar.addEventListener('click',borrarCita);
                botonBorrar.onclick = borrarCita;
                citaHTML.appendChild(botonBorrar);

                //apend en el padre
                citas.appendChild(citaHTML);
                //mostrar los nuevos recursos
                cursor.continue();
            }
            else{
                comprobarCitas();
            }
        }
    }

    function comprobarCitas(){
        if(!citas.firstChild){
            //cuando no hay registros
            headingAdministra.textContent = 'Agrega citas para comenzar';
            let listado = document.createElement('p');
            listado.classList.add('text-center');
            listado.textContent = 'No hay registros';
            citas.appendChild(listado);
        }
        else{
            headingAdministra.textContent = "Administra tus citas";
        }
    }

    function borrarCita(e){
        /* let elementoBorrar;
        if(e.target.classList.contains('borrar')){
            elementoBorrar = e.target.parentElement;
        }
        else{
            elementoBorrar = e.target.parentElement.parentElement;
        }

        citas.removeChild(elementoBorrar); */
        const citaID = Number(e.target.parentElement.getAttribute('data-cita-id'));
        let transaction = DB.transaction(['citas'],'readwrite');
        
        //esto nos retorna la base de datos
        let objectStore = transaction.objectStore('citas');
        let peticion = objectStore.delete(citaID);
        transaction.oncomplete = ()=>{
            mostrarCitas();
            comprobarCitas();
        }
        

        
    }
});

