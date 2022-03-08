let temperatura = 5;
let qtdCarros = 5000;

let frio = temperatura < 10;
let transito = qtdCarros > 3500;

let preguica = frio || transito;
let remoto = frio && transito;

console.log("Estou com preguiça: ", preguica)
console.log("Trabalho remoto: ", remoto);
