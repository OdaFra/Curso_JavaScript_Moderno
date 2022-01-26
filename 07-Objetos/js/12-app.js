//Object literal
const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
};

//Object constructor

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = true;
}

const producto2 = new Producto("Macbook pro", 3500);
const producto3 = new Producto("Huawei P20", 850);

console.log(producto2);
console.log(producto3);
