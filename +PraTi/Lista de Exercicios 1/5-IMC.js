let peso = parseFloat(prompt("Digite o peso (kg):"));
let altura = parseFloat(prompt("Digite a altura (m):"));

let imc = peso / (altura * altura);
console.log("IMC:", imc.toFixed(2));

if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}
