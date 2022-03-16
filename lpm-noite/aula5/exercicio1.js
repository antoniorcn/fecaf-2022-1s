
console.log("Programa para pedir o nome do usuario");

const readline = require('readline-sync');

let nome = readline.question("Por favor digite seu nome");

// console.log("Você digitou ", nome);

console.log(`O seu nome é ${nome}`);
