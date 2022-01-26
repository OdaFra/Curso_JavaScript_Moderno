// const meses = ["Enero", "Febrero", "Marzo"];

// // meses[3] = "Abril";

// //Agregar al final del arreglo

// meses.push("Abril");
// meses.push("Mayo");

// console.table(meses);

const carrito = [];
//Definir un producto

const producto = {
  nombre: "Monitor de 32 pulgadas",
  precio: 400,
};

const producto2 = {
  nombre: "Celular",
  precio: 800,
};

carrito.push(producto);
carrito.push(producto2);

const producto3 = {
  nombre: "Teclado",
  precio: 50,
};

const producto4 = {
  nombre: "Smartphone",
  precio: 750,
};

carrito.unshift(producto3);
carrito.push(producto4);

console.table(carrito);

// //Eliminar último elemento de arreglo

// carrito.pop();
// console.table(carrito);

// //Eliminar del inicio del arreglo

// carrito.shift();
// console.table(carrito);

carrito.splice(1, 1);
console.table(carrito);
