import calcular from "./calculoQ4.js";




const notas = [3.5, 9.5, 6.5, 4, 10];
const resultado = calcular(notas);

console.log(`Média: ${resultado.media}`);
console.log(`Maior: ${resultado.maiorNota}`);
console.log(`Menor: ${resultado.menorNota}`);
