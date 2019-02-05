

let maximo = new Date().getFullYear();
let minimo = maximo - 20;
let listaAnio = document.querySelector('#anio');
let boton = document.querySelector('.btn');

boton.addEventListener('click',validarFormulario);


console.log(maximo);
console.log(minimo)

for(let i = maximo;i>=minimo;i--){
    let option = document.createElement('option');
    option.innerHTML = i;
    console.log(option);
    listaAnio.appendChild(option);    
}

function validarFormulario(e){
    e.preventDefault();
    let anios = document.querySelector('#anio');
    console.log(anios.value);
    let spinner = document.querySelector('img').style.display = 'block';
    setTimeout(() => {
        let spinner = document.querySelector('img').style.display = 'none';
    }, 3000);
}
