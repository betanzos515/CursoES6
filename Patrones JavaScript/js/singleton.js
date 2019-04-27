const alumnos ={
    listaAlumnos : [],

    get: function(id){
        console.log(id);
    },
    //metodo para crear alumnos
    crear: function(datos){
        console.log(datos);
    },

    //metodo para listar todos los alumnos
    listado: function(){
        return this.listaAlumnos;
    }
}