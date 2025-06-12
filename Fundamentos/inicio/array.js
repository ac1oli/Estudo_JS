
// Para iniciar um array em JS é so colocar o nome da variavel e ir colocando dentro do colchetes os valores separando-os por virgula
const valores = [7.8, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);


// se tentar imprimir na tela um valor que nao esta no array, vai dar "indefinido", mas nao vai dar erro
console.log(valores[5]);

// podemos colocar um valor para uma variavel no arrey a qualquer comento
valores[4] = 20;
console.log(valores[4]);

// O length serve para contabilizar o tamanho do array
console.log("O tamanho do meu array é: " + valores.length);
valores.push({id: 3}, false, null, 'texto');
console.log(valores);

// O pop serve para retirar o ultimo elemento do array
console.log(valores.pop());

// O delete por motivos obvis serve para excluir algum elemento do meu array
delete valores[0];
console.log(valores);

// O typeof serve para nos dizer qual é o tipo de uma variavel, nesse caso, a variavel de array é do tipo "Object"
console.log(typeof valores);