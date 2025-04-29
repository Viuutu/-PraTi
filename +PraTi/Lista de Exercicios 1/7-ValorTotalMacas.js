function calcularCompraMacas(qtdMacas) {
    let preco = qtdMacas < 12 ? 0.30 : 0.25;
    let total = preco * qtdMacas;
    console.log(`Valor total: R$ ${total.toFixed(2)}`);
  }
  
  calcularCompraMacas(15);
  