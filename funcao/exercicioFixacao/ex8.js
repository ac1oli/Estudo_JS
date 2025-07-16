function limite (num) {
    console.log(`R$ ${num.toFixed(2).replace('.', ',')}`) // o toFixed, limita a quantidade de casas decimais, e o replace, troca o "." pela ","
}


limite(Math.PI)
