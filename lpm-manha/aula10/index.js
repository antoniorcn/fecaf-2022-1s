let vetor = [];
//       0  1  2  3  4
vetor = [4, 5, 6, 7, 9];
vetor.push(8.5);
//  0, 1, 2, 3, 4, 5
// [4, 5, 6, 7, 9, 8.5]

// Inserir 4.3  na 2a posição do vetor
//  0, 1, 2, 3, 4, 5
// [4, 5, 6, 7, 9, 8.5]
// vetor.splice(1, 0, 4.3);
//  0, 1,   2, 3, 4, 5, 6
// [4, 4.3, 5, 6, 7, 9, 8.5]


// Jeito dificil de somar os valores
// let soma = vetor[0] + vetor[1] + vetor[2] + vetor[3] + vetor[4];

// Jeito facil de somar os valores
let soma = 0;
for (let i = 0; i < 5; i++) {
  soma = soma + vetor[i];
}
let media = soma / 5;
console.log("Soma: ", soma, "   Media: ", media);