const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// const nombre = producto.nombre;
// console.log(nombre);

//Destructuring extraer del objeto
const { nombre } = producto;
// const {precio} = producto
console.log(nombre);

//Destructuring con Arreglos

const numeros = [10, 20, 30, 40, 50];

// const [primero, segundo, tercero] = numeros;

// const [, , tercero] = numeros;
const [primero, ...tercero] = numeros;

console.log(tercero);
