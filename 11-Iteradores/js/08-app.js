const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JS"];

// for in va a iterar sobre un objeto mientras que for of sobre un arreglo

for (let pendiente in pendientes) {
  console.log(pendiente);
}

const automovil = {
  modelo: "Camaro",
  year: 1969,
  motor: 6.9,
};

for (let propiedad in automovil) {
  //   console.log(propiedad.modelo);
  console.log(`${automovil.modelo} - ${automovil.year}  `);
}

for (let [llave, valor] of Object.entries(automovil)) {
  console.log(llave, valor);
}
