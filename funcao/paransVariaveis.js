function soma() {
    let soma = 0
    for (let i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.2, 2.4, 0.2, 1.1))
console.log(soma(1.2, 2.4, 0.2, 1.1, " teste"))

