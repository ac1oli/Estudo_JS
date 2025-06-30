// par nome/valor

const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhasdos de pares nome/valor

const client = {
    neme: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua Muito Longe',
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)