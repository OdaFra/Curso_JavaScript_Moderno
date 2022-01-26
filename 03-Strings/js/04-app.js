const producto = '  Monitor 20 pulgadas      ';

console.log(producto);
console.log(producto.length);

//Elimina espacio en una direccion inicial
console.log(producto.trimStart())

//Elimina espacio en una direccion final
console.log(producto.trimEnd());

console.log(producto.trimStart().trimEnd())

//Elimina espacio en ambas direcciones
console.log(producto.trim())