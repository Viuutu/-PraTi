let num = parseInt(prompt("Digite um número inteiro positivo:"));
let fatorial = 1;

for (let i = 1; i <= num; i++) {
    fatorial *= i;
}

console.log(`Fatorial de ${num} é ${fatorial}`);
