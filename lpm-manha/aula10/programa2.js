function somar(numero1, numero2) {
  let soma = numero1 + numero2;
  return soma;
}

console.log("Programa para somar dois numeros");
console.log("O valor da soma é: ");
let s = somar(4, 35);
console.log(s);

let resposta = prompt("Digite um valor");
let valor = parseInt( resposta );

console.log("A multiplicação da soma pelo valor é: ");
console.log(s * valor);


