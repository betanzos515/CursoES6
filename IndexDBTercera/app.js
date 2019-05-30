let DB;
document.addEventListener('DOMContentLoaded',()=>{
    
    let crearDB = window.indexedDB.open('Pruebisima',1);

    crearDB.onerror = ()=>{
        console.log("Ah ocurrido un error inesperado con la creaciòn de la base de datos");
    }

    crearDB.onsuccess = ()=>{

        console.log('La base de datos se ah creado con exito');

        DB = crearDB.result;
        console.log(DB);
    }

    
});