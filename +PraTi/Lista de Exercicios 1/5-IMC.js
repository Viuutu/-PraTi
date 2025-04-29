function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
  
    if (imc < 18.5) {
      console.log("Baixo peso");
    } else if (imc >= 18.5 && imc < 24.9) {
      console.log("Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
      console.log("Sobrepeso");
    } else {
      console.log("Obesidade");
    }
  }
  
  calcularIMC(70, 1.75);
  