    function JurosCompostos (capital, taxa, tempo) {
        let montante = capital * (Math.pow((1 + taxa), tempo))
        return montante 
    }

    function jurosSimples (capital, taxaDeJuros, tempo) {
        let juros = capital * taxa * tempo
        return capital += juros
    }

console.log(`juros simples = ${jurosSimples(500, 0.03, 18)}`)
console.log(`juros compostos = ${JurosCompostos(500, 0.03, 18)}`)