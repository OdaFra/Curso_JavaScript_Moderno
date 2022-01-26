const carrito = [
  { nombre: "Monitor 27 Pulgadas", precio: 500 },
  { nombre: "Televisión", precio: 100 },
  { nombre: "Tablet", precio: 100 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 400 },
  { nombre: "Celular", precio: 700 },
];

// con un foreach

let res = "";

carrito.forEach((producto, index) => {
  if (producto.nombre === "Tablet") {
    res = carrito[index];
  }
});

console.log(res);

// con un .find
const res2 = carrito.find((producto) => producto.nombre === "Tablet");
console.log(res2);
