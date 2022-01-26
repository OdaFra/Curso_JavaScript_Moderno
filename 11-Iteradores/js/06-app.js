//forEach

const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];

pendientes.forEach((pendientes, indice) =>
  console.log(`${indice} : ${pendientes}`)
);

const carrito = [
  { nombre: "Monitor de 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 700 },
];

// carrito.forEach((producto) => {
//   console.log(`Este ${producto.nombre} tiene un precio: ${producto.precio}`);
// });

// carrito.map((producto) => {
//   console.log(`Este ${producto.nombre}  tiene un precio: ${producto.precio}`);
// });

const nvoArreglo = carrito.forEach(
  (producto) => `Este ${producto.nombre} tiene un precio: ${producto.precio}`
);

const nvoArreglo2 = carrito.map(
  (producto) => `Este ${producto.nombre}  tiene un precio: ${producto.precio}`
);

console.log(nvoArreglo);
console.log(nvoArreglo2);
