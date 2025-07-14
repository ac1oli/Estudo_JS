function criarProduto(nome, preco) {
    return {
        Produto: nome,
        Preco: preco,
        Desconto: 0.8
    }
}

const p = criarProduto('Monitor', 900)
console.log(p.Produto, p.Preco)
console.log(`O valor do ${p.Produto} com desconto, fica por ${p.Preco * p.Desconto}`)