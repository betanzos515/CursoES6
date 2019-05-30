let DB;

document.addEventListener('DOMContentLoaded',()=>{
    const crearDB = window.indexedDB.open('TerceraPrueba',1);
    crearDB.onerror = ()=>{
        console.log('Se presento un error inesperado en la creacion de la base de datos');
    }
    
    crearDB.onsuccess = ()=>{
        console.log('Base de datos creada correctamente');
        DB = crearDB.result;
        console.log(DB);
    }
});