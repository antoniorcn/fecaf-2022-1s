console.log("Programa para avaliar a humidade do ar");

let humidade = prompt("Digite a porcentagem de humidade do ar");

if(humidade > 70) {
  console.log("O ar esta humido");
} else {
  if (humidade >= 30 && humidade <= 70) {
    console.log("O ar está seco");
  } else {
    console.log("O ar está muito seco");
  }
}

console.log("Fim do programa");