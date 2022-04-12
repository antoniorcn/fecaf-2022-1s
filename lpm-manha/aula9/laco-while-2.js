console.log("Programa para somar numeros");
let a = 'S';
while(a === 'S') {
  let n1 = parseInt(prompt("Digite o primeiro numero"));
  let n2 = parseInt(prompt("Digite o segundo numero"));
  let soma = n1 + n2;
  console.log("A soma dos numeros é", soma);
  a = prompt("Deseja executar novamente ? (S/N)").toUpperCase();
}