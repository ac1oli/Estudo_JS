const local = "Recife";

console.log(local.charAt(4)); // Aqui ele ira pegar o caracter que estiver na posição especificada
console.log(local.charCodeAt(5)); // Aqui ele vai pegar o codigo do caracter na psição  especificado
console.log(local.indexOf('e')); // Aqui ele indica qual a posição o caracter especificado está

console.log(local.substring(1)); // Aqui ele vai me retornar todo o conteudo a partir da posição que eu especificar
console.log(local.substring(1,4));// Já aqui ele vai me retorna a partir da posição que eu especificar, mas sem me retornar a ultima posição que eu especifiquei.

console.log("Cidade: " + local); //Aqui estamos concatenando a String com a variavel utilizando o "+"

console.log(local.replace('c', 't')); // Aqeui podemos especificar um caracter para ser alterado

console.log('Recife, Baiha, São Paulo'.split(',')); //Esse .split (',') ele esta tranformando essa string em um array de string separando por virgula