const _ = require('lodash');
const n = [5, 3, 2, 8, 1, 5, 7, 2];
const ordenar = _.sortBy(n);

const nDuplicados = _.uniq(n);

const nPares = _.filter(n, num => num % 2 === 0);

const nDobro = _.map(n, num => num * 2);

const somarTudo = _.sum(n);

console.log("Array original:", n);
console.log("Array ordenado:", ordenar);
console.log("Array sem elementos duplicados:", nDuplicados);
console.log("Números pares:", nPares);
console.log("Dobro de cada número:", nDobro);
console.log("Soma de todos os elementos:", somarTudo);
