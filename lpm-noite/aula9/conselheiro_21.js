console.log("Programa conselheiro de 21");

let soma = parseInt(prompt("Informe a soma das cartas"));

if (soma <= 10) {
  console.log("Sem duvida compre mais uma carta");
} else {
  if (soma <= 15) {
    console.log("Há um risco, mas aconselho a comprar mais uma carta");
  } else {
    if (soma <= 20) {
      console.log("Aconselho parar de jogar");
    } else {
      if (soma === 21) {
        console.log("Parabens você ganhou");
      } else {
        console.log("Que pena você perdeu");
      }
    }
  }
}