// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero:123
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa //extraindo o nome e idade, mas alterando os seus nomes para ficar mais facil de ser chamados.
console.log(n,i);

const { endereco: {logadouro: l, numero}} = pessoa //extraidno o logadouro e o numero de endereço
console.log(l, numero)

const { endereco: {logadouro, numero: n1, cep}} = pessoa // quando é colocado uma veriavel que nao esta no objeto, ela acaba retornando 'undefined'
console.log(logadouro, n1, cep)