const nome = 'Rebeca';
const concatenacao = 'Ola ' + nome + '!';
console.log(concatenacao); 

// Em cima temos a forma basica de se concatenar, mas aqui a baixo tem uma nova forma utilizando o Template String.

const template = `Olá ${nome}!`; 
const template2 =`\n Olá ${nome}!`; 
const template3 =`\n1 + 1: ${1 + 1}`; 
/* 
   - Aqui como pode ver a gente uliza a crase iniciar e dar o fim nesse template;
   - Nesse modelo, todo o espaço conta, então se você for colocar um `olá`, sertifiquesse que ele nao tem espaço no começo, pois isso contará;
   - Tem o `\n` que serve para quebrar a linha;
   - E para chamarmos uma variavel ou alguma esperação matematica, temos que utilizar o '${}' para que seja contado o cahamdo da variavel ou a operação matematica.
*/
console.log(template,template2,template3);