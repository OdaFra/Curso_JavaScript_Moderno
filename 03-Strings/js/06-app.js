const producto = 'Monitor 20 pulgadas';

//.repeat te va a permitir repetir una cadena de texto

const texto= ' en promoción '.repeat(4);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split, dividir un string 

const actividad = 'Estoy aprendiendo JavaScript';

console.log(actividad.split(' '));

const hobbies='Leer, caminar, escuchar música, escribir, aprender a programar';

console.log(hobbies.split(', '));

const tweet = 'Aprendiendo JS, #aprendiendojs';

console.log(tweet.split('#'));