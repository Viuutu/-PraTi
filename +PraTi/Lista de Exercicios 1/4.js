// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.

let opcao = parseInt(prompt("Escolha uma opção:\n1 - Ver perfil\n2 - Editar perfil\n3 - Sair"));

switch (opcao) {
    case 1:
        console.log("Você escolheu Ver perfil");
        break;
    case 2:
        console.log("Você escolheu Editar perfil");
        break;
    case 3:
        console.log("Saindo...");
        break;
    default:
        console.log("Opção inválida.");
}
