Number.prototype.teste = function(valor1, valor2){
    return this >= valor1 && this <= valor2
}

const imprimirRespostas = function(nota){
    if(nota.teste(9,10)){
        console.log('Quadro de Honra')   
    } else if(nota.teste(7,8.99)){
        console.log('Aprovado....')
    } else if(nota.teste(4,6.99)){
        console.log('Recuperação....')
    } else if(nota.teste(0,3.99)){
        console.log('Reprovado....')
    } else{
        console.log('Nota Invalida')
    }
}

imprimirRespostas(5)