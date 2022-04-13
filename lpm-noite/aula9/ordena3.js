console.log("Programa para ordenar 3 numeros");
let n1 = parseInt(prompt("Digite o 1º numero"));
let n2 = parseInt(prompt("Digite o 2º numero"));
let n3 = parseInt(prompt("Digite o 3º numero"));

if (n1 < n2) {
  if (n2 < n3) {
    console.log(n1, n2, n3);
  } else {
    if (n1 < n3) {
      console.log(n1, n3, n2);
    } else {
      console.log(n3, n1, n2);
    }
  }
} else {
  if (n3 < n2) {
    console.log(n3, n2, n1);
  } else {
    if (n1 < n3) {
      console.log(n2, n1, n3);
    } else {
      console.log(n2, n3, n1);
    }
  }
}

console.log("Fim do programa");