function calcular(notas) {
    let soma = 0;
    let maior = notas[0];
    let menor = notas[0];
  
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
      if (notas[i] > maior) {
        maior = notas[i];
      }
      if (notas[i] < menor) {
        menor = notas[i];
      }
    }
    const media = soma / notas.length;
    return {
      media: media,
      maiorNota: maior,
      menorNota: menor
    };
  }
  export default calcular
  