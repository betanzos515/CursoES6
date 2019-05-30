let DB;

//selecctores de la interfaz
const form = document.querySelector('form'),
idCliente = document.querySelector('#id');
nombreCliente = document.querySelector('#nombre_cliente'),
apellidoCliente = document.querySelector('#apellido_cliente'),
maternoCliente = document.querySelector('#materno_cliente'),
telefono = document.querySelector('#telefono');
//Esperar por el DOM Ready
//La creacion de la base de dato se realizara de forma automatica dentro del enevento DOMContentLoaded
document.addEventListener('DOMContentLoaded',()=>{

    //creamos una variable que toma el valor de la creación o apertura de la base de datos
    const crearBase = window.indexedDB.open('PruebaNueva',1);

    /* 
        Cuando se hace uso de indexedDB tenemos que implementar 2 metodos basicos que es onerror y onsuccess
        estos metodos van a atrapar las excepciones en caso de tener algún error o retornarnos el resultado
        en caso de que todo salga bien
    */

    crearBase.onerror = ()=>{
        console.log('Se ah creado un error al crear la base de datos');
    }

    crearBase.onsuccess = ()=>{
        console.log('Base de datos creada correctamente');
        DB = crearBase.result;
        console.log(DB);
    }

    //El metodo onupgradeneeded es un metodo que se ejecuta una sola vez este es el recomendado para la creacion de los esquemas de la base de datos se le pasa como parametro un evento que este tomara o será desencadenado por el elemento que lo invoca
    crearBase.onupgradeneeded = (e)=>{
        const db = e.target.result;

        let objetcStored = db.createObjectStore('Pruebas',{KeyPath:'PrimaryKey',autoIncrement : true});

        objetcStored.createIndex('identificador','id',{unique:true} );
        objetcStored.createIndex('Nombre','Nombre',{unique:false});
        objetcStored.createIndex('Apellido_paterno','Apellido_paterno',{unique:false});
        objetcStored.createIndex('Apellido_Materno','Apellido_Materno',{unique:false});
        objetcStored.createIndex('Telefono','Telefono',{unique:true});
 
        console.log('Tabla Creada y lista');
    }
});
 
form.addEventListener('submit',(e)=>{

    const nuevaCita = {
        id:Number(idCliente.value),
        Nombre : nombreCliente.value,
        Apellido_paterno:apellidoCliente.value,
        Apellido_Materno:maternoCliente.value,
        Telefono:Number(telefono.value)
    }
    e.preventDefault();
    //Establecemos el tipo de transaccion que utilizaremos para manipular la tabla
    let transaction = DB.transaction(['Pruebas'],'readwrite');
    let objectStored = transaction.objectStore('Pruebas');

    let peticion = objectStored.add(nuevaCita);

    peticion.onerror = (e)=>{
        console.log(e);
        let codigo = e.srcElement.error.code
        
        if(codigo === 0){
            alert('Ah ocurrido un error ya existe ese numero de Identificador');
        }
    }

    peticion.onsuccess = ()=>{
        console.log(e);
        form.reset();
    }

    peticion.oncomplete = ()=>{
        alert('Cita agregada');
        form.reset();
    }

});