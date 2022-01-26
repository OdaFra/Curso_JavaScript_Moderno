const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto: 
    ${this.nombre} tiene un precio de: ${this.precio}`);
  },
};

const producto2 = {
  nombre: "Macbook pro",
  precio: 3500,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto: 
      ${this.nombre} tiene un precio de: ${this.precio}`);
  },
};

producto.mostrarInfo();
producto2.mostrarInfo();
