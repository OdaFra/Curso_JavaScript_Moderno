const producto = 'Monitor 20 pulgadas';

console.log(producto);

//.replace para reemplzar
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

//.slice para cortar
console.log(producto.slice(0,5));

//Alternativa al .slice
console.log(producto.substring(0,5));
console.log(producto.substring(2,1));

const usuario ='Oscar';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));