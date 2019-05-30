import '../css/style.scss';

const clientes = ['cliente1','cliente2','cliente3','cliente4','cliente 5'];

let html = '';
clientes.forEach(cliente=>{
    html += `
    <li>El cliente es : ${cliente}</li>
    `
})

document.querySelector('#clientes').innerHTML = html;
