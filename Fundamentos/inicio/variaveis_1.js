//Estamos iniciando uma variavel, pode ser com (var, let ou const), e ja definindo um valor para ela.
let produto = "Caneta";
var quantidade = 10; 
var preco = 6.4;
var imposto = 1.5;


//Aqui o console.log() ele esta pegando o valor que tem na minha variavel e amostrando na tela.
console.log(produto);
console.log("Em estoque: " + quantidade);
console.log("Preço sem imposto: R$ " + preco);
console.log("Imposto: R$ " + imposto)
console.log("Preço final com imposto: R$ " + (preco + imposto) ); 

//Esse sinal de '+' é utilizado para concatenar em javaScrip, dependendo da linguagem esse sinal pode mudar