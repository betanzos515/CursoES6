//Importamos los modulos del fichero clientes.
import { nombreCliente, ahorro, Cliente } from './cliente.js'

import {ahorro as ahorroEmpresa} from './empresa.js';

//Otra fora de exportar es remplazando los corchetes por un * y agregando un alias des pues de la palabra as 'alias'

//import * as clientes from './cliente.js';
console.log(nombreCliente);
console.log(ahorro);
console.log(ahorroEmpresa);

/* console.log(empresa.ahorro);

let cliente = new Cliente(nombreCliente,ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion()); */
//const info  = mostrarInformacion(nombreCliente,ahorro);
//console.log(info);
