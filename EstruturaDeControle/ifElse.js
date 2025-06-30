const imprimirResultado = function(nota1,nota2){
    let resultado = (nota1 + nota2) / 2

    if(resultado >= 7){
        console.log('Parabens, você passou com a nota: ', resultado)
    }else{
        console.log('Infelismente você não passou, sua nota ficou: ', resultado)
    }
}
 
imprimirResultado(10, 10) // exibir o resultado da condição 'if'
imprimirResultado(7,6) // exibir o resultado que não foi valido na condição 'if' e exibiu o 'else'
imprimirResultado(2)
imprimirResultado(9,0)