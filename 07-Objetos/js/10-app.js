const producto = {
  nombre: "Monitor de 20 Pulgadas",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "1m",
};

console.log(producto);
console.log(medidas);

const res = Object.assign(producto, medidas);

//Spread Operator o Rest Operator
const res2 = { ...producto, ...medidas };

console.log(res);
console.log(res2);
