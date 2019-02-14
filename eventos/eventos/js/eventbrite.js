class EventBrite{
    constructor(){
        this.token_auth = 'P2ZJMCE5OV6GZIC224PY';
        this.ordenar = 'date';
    }

    //obtiene las categorias en init()
    async obtenerCategorias(){
        //consultar las categorias a la REST API de event brite
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //esperar la respuesta de las categorias y devolver un JSON
        const categorias = await respuestaCategorias.json();

        return{
            categorias
        }
    }
}