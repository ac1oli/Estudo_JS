const notas = [6.7, 7.4, 8.1,9.2,8.2]

for (let i in notas) {
    console.log(`i = ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 20,
    peso: 64
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}