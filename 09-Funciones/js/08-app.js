function sumar(a, b) {
  return a + b;
}
const res = sumar(2, 3);
console.log(res);

//Ejemplo más avanzado

let total = 0;
function agregarCarrito(precio) {
  return (total += precio);
}

total = agregarCarrito(300);
total = agregarCarrito(700);

console.log(total);

function calcularImpuesto(total) {
  //   return total + total * (15 / 100);
  return total * 1.15;
}
const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es: ${totalPagar}`);
