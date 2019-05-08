class UI{
    constructor(){
        //instanciamos la API
        this.api = new API();

        //crear los markers con layerGroup
        this.markers = new L.LayerGroup();

        //Inicializar el mapa
        this.mapa = this.inicializarMapa();
    }

    inicializarMapa(){
        const map = L.map('mapa').setView([19.390519,-99.3739778],6);
        //const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy' +  'contributors',
            maxZoom:18,
        }).addTo(map);

        return map;
    }

    mostarEstablecimientos(){
        this.api.obtenerDatos()
        .then(datos =>{
            const resultado = datos.respuestaJSON.results;

            //ejecutar la función para mostrar los pines
            this.mostrarPines(resultado);
        })

    }

    mostrarPines(datos){
        
        //Limpiar los Markers
        this.markers.clearLayers();

        //recorrer los establecimientos
        datos.forEach(dato =>{

            //referenciamos los atributos que queremos tomar del objeto dato
            const {latitude,longitude, calle,regular,premium} = dato;

            //podemos crear un popup para mostrar datos cuando el cliente le de click en el marcador
            const pop = L.popup()
                .setContent(`<p>Calle: ${dato.calle}</p>
                             <p><b>Regular:</b> $ ${dato.regular}</p>
                             <p><b>Premium:</b> $ ${dato.premium}</p>`)

            //creamos el marcador  basado en la latitud y longitud del objeto que estamos recorriendo
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
                
            ]);


            //Creamos el Popup en el marcardor
            marker.bindPopup(pop);
            //Primer Forma con la que logré mostrar los datos
           /*  marker.bindPopup(`<b>Calle: ${dato.calle}<br>
            Regular: ${dato.regular}
            <br>
            Premium: ${dato.premium}`)
                .openPopup(); */

            //con esto agregamos el marcador a la capa
            this.markers.addLayer(marker);
        });
 
        //asignamos la capa al mapa 
        this.markers.addTo(this.mapa);
       
    }

    obtenerSugerencias(busqueda){
        this.api.obtenerDatos()
        .then(datos =>{
            const resultado = datos.respuestaJSON.results;

            //enviar el JSON para el filtrado
            this.filtrarSugerencias(resultado,busqueda);


        })
    }

    //filtra las sugerencias para el filtrado
    filtrarSugerencias(resultado, busqueda){
        
        //filtrar con .filter
        const filtro = resultado.filter(filtro => filtro.calle.indexOf(busqueda) !== -1);
        console.log(filtro);
        
        //mostrar los pines
        this.mostrarPines(filtro);
    }   
}