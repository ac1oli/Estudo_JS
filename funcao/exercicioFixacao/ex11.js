const anotacao1 = function (pontuacoesString) {
    const pontuacoes = pontuacoesString.split(" ").map(Number)

    let record = pontuacoes[0]
    let pior = pontuacoes[0]
    let quebraDeRecorde = 0
    let piorJogo = 1

    for(let i = 1; i < pontuacoes.length; i++) {
        const atual = pontuacoes[i]

        if(atual > record) {
            record = atual
            quebraDeRecorde++
        }else if(atual < pior) {
            pior = atual
            piorJogo = i + 1
        }
    }

    return [quebraDeRecorde, piorJogo]
}


console.log(`teste ${anotacao1("10 20 20 8 25 3 0 30 1")}`);


