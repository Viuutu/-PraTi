function menu() {
    let opcao = prompt("Escolha uma opção: \n1. Opção 1\n2. Opção 2\n3. Opção 3");
  
    switch (opcao) {
      case "1":
        console.log("Você escolheu a Opção 1");
        break;
      case "2":
        console.log("Você escolheu a Opção 2");
        break;
      case "3":
        console.log("Você escolheu a Opção 3");
        break;
      default:
        console.log("Opção inválida");
    }
  }
  
  menu();
  