const carrito = [
  { nombre: "Monitor de 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 700 },
];

//.map crea un nuevo arreglo y .foreach no

const nuevoarreglo = carrito.map(
  (producto) => `${producto.nombre} - Precio: ${producto.precio}`
);
carrito.forEach((producto) =>
  console.log(`${producto.nombre} - Precio: ${producto.precio}`)
);

console.log(nuevoarreglo);
