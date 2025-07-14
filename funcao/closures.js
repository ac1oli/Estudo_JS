// Closure é o escopo criado quando uam função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas a função

// Função tem ciencia de onde ela esta sendo declarada

const x = 'Valor Pimario'

function minhaFuncao() {
    const x = 'Valor Segundario'
    function teste() {
        return x
    }
    return teste
}

const closures = minhaFuncao()
console.log(closures())