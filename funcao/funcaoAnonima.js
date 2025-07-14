const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function ( a, b, operacao = soma) {
    console.log(`o resultado da operação é: ${operacao(a,b)}`)
}

imprimirResultado(3,4)
imprimirResultado(-10, 10)
imprimirResultado(4,6, (a,b) =>  a - b)
imprimirResultado(10, 9, (a,b) => a * b)
imprimirResultado(4, 2, function (a,b) {
    return a / b
})