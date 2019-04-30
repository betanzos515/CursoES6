const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];

//console.table(autos);

// forEach
//El forEach se recomienda para listar todos los elementos de una coleccion
autos.forEach(auto=>{
	if(auto.color === 'Rojo'){
		console.log(auto);
	}
}) 
// map
//La diferencia entre un forEach y un map es que el forEach solo nos sive para recorrer un arreglo o coleccion mas no te permite asignar el resultado a una variable. En el caso del map este nos crea una copia del arreglo o de la coleccion en la que estemos trabajando
let resultado = autos.map(auto=>{
	return auto;
});

// filter
//La sintaxis del filter es la misma solo que a diferencia de los demas el resultado se agrega siempre y cuando se cumpla la condicion
let respuesta = autos.filter(auto=>{
	//Esta linea del return es la condicion que se debe de cumplir para que se agrege al nuevo arreglo
	return auto.marca === 'BMW';
});

console.log(respuesta);
// find
//La caracteristica principal de find es que crea un arreglo con el valor que encuentre pero este solo retorna el primer valor que cumpla con la condición que se el pasa como parametro ejemplo

let respuestaFind = autos.find(auto => auto.marca === 'BMW');
console.log(`El resultado de la busqueda por fin es: ${respuestaFind}`);
console.log(respuestaFind);

// reduce
//La caracteristica general de reduce es que toma todos los valores y retorna un valor unico
let resultadoReduce = autos.reduce((total,auto)=> total + auto.precio,0
);

console.log(resultadoReduce);

// some


/* var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
 */
/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
/* function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}
 */
/* console.log(filterItems('AP')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']

 */
/* var arr = [
	{ id: 15 },
	{ id: -1 },
	{ id: 0 },
	{ id: 3 },
	{ id: 12.2 },
	{ },
	{ id: null },
	{ id: NaN },
	{ id: 'undefined' }
  ];
  
  var entradasInvalidas = 0;
 */  // Si el elemento tiene un atributo id, y su valor correspondiente es un numero
  // Y no es el valor NaN, entonces es una entrada válida
/*   function filtrarPorID(obj) {
	if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
	  return true;
	} else {
	  entradasInvalidas++;
	  return false;
	}
  }
 */  
/*   var arrPorID = arr.filter(filtrarPorID);
 */  
/*   console.log('Array Filtrado\n', arrPorID); 
 */  // [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]
  
/*   console.log('Número de Entradas Invalidas = ', entradasInvalidas); 
 */  // 4


