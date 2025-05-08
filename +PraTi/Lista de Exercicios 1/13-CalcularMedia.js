let soma = 0;
let count = 0;
let num;

do {
    num = parseFloat(prompt("Digite um número decimal (0 para sair):"));
    if (num !== 0) {
        soma += num;
        count++;
    }
} while (num !== 0);

if (count > 0) {
    console.log("Média:", (soma / count).toFixed(2));
} else {
    console.log("Nenhum número foi inserido.");
}
