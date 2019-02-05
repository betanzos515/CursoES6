//Aqui aprenderemos a trabajar con JSON
const boton1 = document.getElementById('boton1');



boton1.addEventListener('click',function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','empleado.json',true);
    xhr.onload = function(){
        if(this.status == 200){
            const persona = JSON.parse(this.responseText);
            const htmlTemplate = `
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Actividades: ${persona.trabajo}</li>
            `;

            const elemento =document.createElement('ul');
            elemento.innerHTML = htmlTemplate;


            document.getElementById('empleado').appendChild(elemento);
        }
    }

    xhr.send();
});

const boton2 = document.getElementById('boton2');
boton2.addEventListener('click',function(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','empleados.json',true);

    xhr.onload = function(){
        if(this.status === 200){
            const personal = JSON.parse(this.responseText);
            personal.forEach(function(persona){
                const htmlTemplate = `
                    <li>ID: ${personal.id}</li>
                    <li>Nombre: ${personal.nombre}</li>
                    <li>Empresa: ${personal.empresa}</li>
                    <li>Actividades: ${personal.trabajo}</li>
            `;

            const elemento = document.createElement('ul');
            elemento.innerHTML = htmlTemplate;
            document.getElementById('empleados').appendChild(elemento);
            });
        }
    }

    xhr.send();
});