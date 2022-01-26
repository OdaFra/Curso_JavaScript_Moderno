const producto={
    nombre:'Monitor de 20 Pulgadas',
    precio:300,
    disponible:true,
 
}

// const nombre = producto.nombre;
// console.log(nombre);


//Destructuring extraer del objeto
const {nombre, precio, disponible} = producto
// const {precio} = producto
console.log(nombre, precio, disponible);