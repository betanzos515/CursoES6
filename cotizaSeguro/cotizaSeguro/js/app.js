
cargarAnios();

function cargarAnios(){
    let anioActual = new Date().getFullYear(),
        ultimoAnio = anioActual-20;
        let campoAnios = document.querySelector('#anio');
        for(let i = anioActual ; i>=ultimoAnio;i--){
            let campo = document.createElement('option');
            campo.value = i;
            campo.innerText = i;
            campoAnios.appendChild(campo);
        }

}