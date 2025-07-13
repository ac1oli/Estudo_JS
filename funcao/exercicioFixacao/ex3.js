// Calcular a potencia utilizando arrow function
const potencia = (base, expoente) => {
    let tmp = 1
    let i = 0

    do{
        tmp *= base
        i++
    } while (i < expoente)

    return tmp 
}

console.log(potencia(4,4))