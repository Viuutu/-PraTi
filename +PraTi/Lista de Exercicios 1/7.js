let qtd = parseInt(prompt("Quantas maçãs você quer comprar?"));
let preco = qtd < 12 ? 0.30 : 0.25;
let total = qtd * preco;

console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
