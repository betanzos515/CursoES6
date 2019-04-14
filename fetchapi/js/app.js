const botonTXT = document.getElementById('txtBtn');
const botonJSON = document.getElementById('jsonBtn');
const botonFETCH = document.getElementById('apiBTN');

botonTXT.addEventListener('click',cargarTXT);


function cargarTXT(){
    fetch('datos.txt')
    .then(function(res){
        return res.text();
    })
    .then(function(data){
        document.getElementById('resultado').innerHTML = data;
    })
}

botonJSON.addEventListener('click',cargarJSON);

function cargarJSON(){
    fetch('empleados.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html='';
        data.forEach(function(datos){
            html+= `
                <li>Nombre : ${datos.nombre}, Puesto : ${datos.puesto}</li>
            `;

        });
        document.getElementById('resultado').innerHTML = html;
    }).catch(function(error){
        console.log(error);
    })
}

botonFETCH.addEventListener('click',cargarAPI);

function cargarAPI(){
    fetch('https://picsum.photos/list')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let html = '<ul>';
        data.forEach(function(dato){
            html += `
                <li>
                    <a href='${dato.post_url}'>Ver imagen</a>
                    Autor: ${dato.author}
                </li>
            `;
        })
        html += '</ul>'
        document.getElementById('resultado').innerHTML = html;
    })
}