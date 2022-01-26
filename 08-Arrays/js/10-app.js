const carrito = [
  { nombre: "Monitor de 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 700 },
];

const nuevoarreglo = carrito.forEach(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

//.map crea un nuevo arreglo y .foreach no

const nuevoarreglo2 = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(nuevoarreglo);
console.log(nuevoarreglo2);
