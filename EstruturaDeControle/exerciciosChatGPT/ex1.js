const imprimirInformacao = function (num){
    if(num > 0){
        console.log('Numero Positivo.')
    } else if(num < 0){
        console.log('Numero Negativo.')
    }else{
        console.log('Zero')
    }
}

imprimirInformacao(10)
imprimirInformacao(-5)
imprimirInformacao(0)