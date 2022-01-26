const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];

const meses2 = ["Agosto", "Septiembre"];
const meses3 = ["Octubre", "Noviembre", "Diciembre"];

// .concat
const res = meses.concat(meses2, meses3, "Otro mes");

console.log(res);

// .spread operator

const res2 = [...meses, ...meses2];

console.log(res2);
