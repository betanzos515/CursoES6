//Expresiones Regulares

let expReg;
let valor;

expReg = /[^0-9]/;
valor = 1992;

expReg = /\d\d:\d\d \D\D/;
valor = '10:35 AM';


//Estas expresiones regulares nos indican que recibira una cantidad de un rago de 1 a 2 digitos, por eso se hace mencion dentro de las llaves y la ultima especifica que sera una cantidad fija de 4 digitos.

expReg = /\d{1,2}-\d{1,2}-\d{4}/;
valor = '17-09-2003';

console.log(expReg.test(valor));

//Expresion regular para evaluar que solo sean letras o numeros lo que se está introduciendo

expReg = /\w+/;
valor = 'Mensaje de prueba';
valor = '1234';
console.log(expReg.test(valor));

//si quisieras evaluar que son puros numeros se ocupa la siguiente expresion regular
expReg = /\d+/;
valor = 1234;
console.log(expReg.test(valor));
expReg = /([0-9]\w+)/;
valor = 12353;
console.log(expReg.test(valor));

//para evaluar que todas las letras sean mayusculas ocuparemos la siguiente expresion
expReg = /([A-Z]\w+)/;
valor = 'HOLA MUNDO';
console.log(expReg.test(valor));

