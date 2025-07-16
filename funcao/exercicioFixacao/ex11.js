// const anotacao = function (pontos) {
//     let record = 0
//     for(let i = 1; i < pontos; i++){
//         record += pontos
//     }

//     return record
// }

// console.log(`teste ${anotacao(10, 20, 20, 8,25, 3, 0, 30, 1).toString()}`)

function compararUltimoComAnteriores(array) {
    const ultimo = array[array.length - 1];

    array.forEach((valor, index) => {
        if (index === array.length - 1) return; // pula o último (não compara com ele mesmo)

        if (valor > ultimo) {
            console.log(`Elemento na posição ${index} (${valor}) é MAIOR que o último (${ultimo})`);
        } else if (valor < ultimo) {
            console.log(`Elemento na posição ${index} (${valor}) é MENOR que o último (${ultimo})`);
        } else {
            console.log(`Elemento na posição ${index} (${valor}) é IGUAL ao último (${ultimo})`);
        }
    });
}
''
const numeros = [10, 20, 8, 25, 3, 0, 30, 1];
compararUltimoComAnteriores(numeros);