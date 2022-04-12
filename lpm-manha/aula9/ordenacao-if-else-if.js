console.log("Programa para ordenar 3 numeros");

const n1 = parseInt(prompt("informar o primeiro numero"));
const n2 = parseInt(prompt("informar o segundo numero"));
const n3 = parseInt(prompt("informar o terceiro numero"));


if (n1 < n2 && n2 < n3) {
  console.log (n1, n2, n3);
} else if (n1 < n3 && n3 < n2) {
  console.log(n1, n3, n2);
} else if (n2 < n1 && n1 < n3) {
  console.log(n2, n1, n3);
} else if (n2 < n3 && n3 < n1) {
  console.log(n2, n3, n1);
} else if (n3 < n1 && n1 < n2) { 
  console.log(n3, n1, n2);
} else { 
  console.log(n3, n2, n1);
}
        
      
    
  




console.log("Fim do programa");
