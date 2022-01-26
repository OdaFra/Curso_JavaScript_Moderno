//Switch case

const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    // console.log(`Pagaste con ${metodoPago}`);
    pagar();
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log("Aún no has seleccionado un metodo de pago");
    break;
}

function pagar() {
  console.log("Pagando....");
}
