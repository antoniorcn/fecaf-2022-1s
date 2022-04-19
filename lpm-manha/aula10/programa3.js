// Function normal
// function multiplicar(n1, n2) {
//  return n1 * n2;
// }
// Arrow Function
const multiplicar = (n1, n2) => {
  return n1 * n2;
}
const numeros = () => {
  let numeros = "";
  for(let i = 0; i < 5; i++) {
    numeros += i + " - ";
  }
  return numeros;
};
console.log( numeros() ) ;
