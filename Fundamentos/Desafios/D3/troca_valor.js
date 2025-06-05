// Nesse desafio do curso, o professor pedio para eu realizar a troca dos valores de duas variaveis, que a variavel A passe a ser a B e B passace a ser A

let a = 7;
let b = 94;

console.log("A: " + a);
console.log("B: " + b);

[a,b] = [b,a];// aqui temos uma função que vai pegar o valor de A e B e depois vai recolocar eles como se A fosse B e B fosse A pelo fato da posição deles. Bora supor que o B tivesse antes do A, entao a troca de valor das variaveis nao iria funconar, pq a posição que o B ia esta ja é a que era para ele esta, É como se fosse [1,2] = [2,1], ele inverteu por conta da posição.

console.log("A: " + a);
console.log("B: " + b);