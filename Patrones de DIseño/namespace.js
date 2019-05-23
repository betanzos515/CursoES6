//El name space es una forma de evitar coliciones con nombres en el scope global de JavaScript, la idea del namespace es crear un objeto global al rededor de toda la aplicacion y agregar todas las funciones y metodos.


const restaurApp = {};
restaurApp.platillo = [
    {
        platillo:'Pizza',
        precio:25
    },
    {
        platillo: 'Hamburguesa',
        precio:20
    },
    {
        platillo:'Hotdog',
        precio:15
    }

];

//funciones

restaurApp.funciones={
    ordenar: id=>{
        console.log(`Tu platillo: ${restaurApp.platillo[id].platillo} se está preparando`);
    },
    agregarPlatillo:(platillo,precio)=>{
        const nuevo={
            platillo,
            precio
        }
        restaurApp.platillo.push(nuevo);
    },
    mostrarMenu:platillos =>{
        console.log(`Bienvenido a nuestro menu`);
        platillos.forEach((platillo,index)=>{
            console.log(`${index}: ${platillo.platillo} $ ${platillo.precio}`);
        });
    }
}

restaurApp.funciones.agregarPlatillo('Alitas',40);
restaurApp.funciones.ordenar(3);
const { platillo } = restaurApp;
restaurApp.funciones.mostrarMenu(platillo);