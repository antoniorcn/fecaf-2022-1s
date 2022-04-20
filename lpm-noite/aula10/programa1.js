console.log("Faculdade FECAF");
console.log("Curso de Analise e Desenvolvimento de Sistemas");
console.log("Antonio - RA 11111");

//              0         1         2         3         4
let frutas = ["maça", "banana", "laranja", "limão", "abacate"];
// array    vetor   lista
let i = 0;
while (i <= 2) { 
  console.log(  frutas[ i ] );   // Iterar
  i = i + 1;
}
// Transformar o codigo acima para utilizar o FOR ao inves do WHILE
//    inicialização;     condição;      incremento;
for (     let i = 0;      i <= 2;          i++ ) { ... }