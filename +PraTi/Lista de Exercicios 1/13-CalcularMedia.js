function calcularMedia() {
    let soma = 0;
    let count = 0;
  
    while (true) {
      let num = parseFloat(prompt("Digite um número (digite 0 para parar):"));
      if (num === 0) break;
      soma += num;
      count++;
    }
  
    if (count > 0) {
      console.log(`Média: ${soma / count}`);
    } else {
      console.log("Nenhum número foi inserido.");
    }
  }
  
  calcularMedia();
  