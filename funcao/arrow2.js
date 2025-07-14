function pessoa1 () {
    let idade = 0

    setInterval(() => {
        console.log(idade)
        idade++
    },1000)
}

// const p1 = new pessoa1  /*Eu posso criar função que vai funcionar normalmente, pois o console.log() esta dentro da função que tambem esta a varialvel criada */
// console.log(p1.idade) /* denttro da função esta escrito uma variavel do tipo "let" que so pode ser vista ou alterada dentro da função */

function pessoa2 () {
    this.idade = 0

    setInterval(() => {
        console.log(this.idade)
        this.idade++
    },9000)
}

const p2 = new pessoa2() /* Criei uma variavel para ter um direcionamento, e utilizei o "THIS", para referenciar as propriedades dentro da função, para quando eu for chamar uma propriedade dentro da função */
console.log(p2.idade) /* Com o direcionamento criado, eu posso chamar livremente a propriedade em outros lugares do codigo */