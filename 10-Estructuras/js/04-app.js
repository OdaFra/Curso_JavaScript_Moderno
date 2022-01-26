//Operador mayor que y menor que

const dinero = 300;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

if (dinero >= totalAPagar) {
  console.log("Si podemos pagar.");
} else if (tarjeta) {
  console.log("Si tengo la tarjeta");
} else if (cheque) {
  console.log("Si tengo el cheque");
} else {
  console.log("Fondos insuficientes");
}
