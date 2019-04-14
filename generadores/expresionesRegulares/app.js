let valor, expReg;

expReg = /[0123456789]/;
valor = 1991;

console.log(expReg.test(valor));

let valor1, expRegu1;

//Una fecha en exp regular 20-10-2018

expReg = /\d\d\-\d\d\-\d\d\d\d/;
valor = '20-10-2018';

console.log(expReg.test(valor));

//buscar un formato de hora 10:30
expReg = /\d\d\:\d\d/;
valor = '10:30';

//si nosotros cambiaramos la forma de evaluar la expresion de la siguiente forma de igual manera nos regresa un true por que evalua solo los valores que coincidan con la expresión

expReg = /\d\d\:\d\d/;
valor = '10:30 am';
console.log(expReg.test(valor));

//Si quisieramos ser un poco más estrictos al querer leer los caracteres AM pudieramos agregar la siguiente expresion
expReg = /\d\d\:\d\d \D\D/;
valor = '10:30';
console.log(expReg.test(valor));

//la d en minuscula lee valores que son numericos, la D en mayuscula lee caracteres que no contienen valores numericos

//Negar la expresion.


   
