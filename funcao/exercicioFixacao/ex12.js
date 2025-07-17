function arrendodamento (nota){
    if(nota < 38 ) {
        return `Nota final: ${nota} -> Reprovado`
    }

    const multiploDe5 = nota + (5 - (nota % 5))

    if(multiploDe5 - nota < 3) {
        nota = multiploDe5
    }

    const situacao = nota >= 40 ? "Aprovado" : "Reprovado"

    return `Nota Final: ${nota} -> ${situacao}`
}

console.log(arrendodamento(38))