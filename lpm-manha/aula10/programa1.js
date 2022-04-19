// let cabecalho = require("./biblioteca.js");

function cabecalho() {
  console.log("Faculdade FECAF");
  console.log("Curso de Analise e Desenvolvimento de Sistemas");
  console.log("2º e 3º semestres")
  console.log("Nome: Antonio Rodrigues Carvalho Neto")
  console.log("RA: 123123132"); 
}



console.log("Programa para calcular media de notas");
cabecalho();
let soma = 0;
for(let i = 0; i < 5; i++) {
  let nota = parseFloat(prompt("Digite uma nota"));
  soma = soma + nota;
}
let media = soma / 5;
console.log("A média é : " + media);

console.log("este programa foi feito por:");
cabecalho();