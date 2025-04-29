function classificarNota(nota) {
    if (nota >= 7) {
      console.log("Aprovado");
    } else if (nota >= 4) {
      console.log("Recuperação");
    } else {
      console.log("Reprovado");
    }
  }
  
  classificarNota(6);
  