// for (let i =0; i <10; i++ ){
//     console.log( `Numeros :  ${i}`  );
// }

// for(let i=1; i<=20; i ++){
//     if (i % 2 ===0){
//         console.log( `El numero : ${i} es par`);
//     }else{
//         console.log( `El numero : ${i} es impar`);
//     }
// }

const carrito = [
  { nombre: "Monitor de 27 Pulgadas", precio: 500 },
  { nombre: "Television", precio: 100 },
  { nombre: "Tablet", precio: 200 },
  { nombre: "Audifonos", precio: 300 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Celular", precio: 700 },
];

console.log(carrito.length);

for (i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}
