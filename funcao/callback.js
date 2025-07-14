// Teste 1 utilizando callback
const resultado = media => {media = media >= 7 ?  console.log(`Aprovado com media: ${media}`) : console.log(`Reprovado com a media: ${media}`)}

const notas = (a, b, callback) => {
    let media = (a + b) / 2

    callback(media)
}

notas(10,10, resultado)


// Teste 2 utilziando callback
const executando = () => console.log("Executando.....")

function teste1 (testo) {
    console.log("Antes")
    testo()
    console.log("Depois")
}

teste1(executando)

