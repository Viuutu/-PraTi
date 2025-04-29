function somarNumeros() {
    let soma = 0;
    for (let i = 0; i < 5; i++) {
      let num = parseInt(prompt(`Digite o ${i+1}° número:`));
      soma += num;
    }
    console.log(`Soma total: ${soma}`);
  }
  
  somarNumeros();
  