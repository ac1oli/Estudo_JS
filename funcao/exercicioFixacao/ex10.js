const bhaskara = (ax2, bx, c) => {
    let delta = Math.pow(bx, 2) - (4 * ax2 * c)

    if(delta < 0) {
        console.log(`Delta negativo: ${delta}`)
    }
    else {
        let resultados = []

        console.log(resultados[0] = (-bx + Math.sqrt(delta)) / (2*ax2))
        console.log(resultados[1] = (-bx - Math.sqrt(delta)) / (2*ax2))
    }
}

bhaskara(1, 3, 2)
bhaskara(3, 1, 2)