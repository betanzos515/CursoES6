
//Exportar variables
export const nombreCliente = 'David';
export let ahorro = 200;


//Esportar funciones
function mostrarInformacion(nombreCliente,ahorro){
    return `Cliente : ${nombreCliente} - Ahorro : ${ahorro}`;
}

//Exportar una clase

export class Cliente{
    constructor(nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion(){
        return `Nombre : ${this.nombre} - Ahorro : ${this.ahorro}`;
    }
}

