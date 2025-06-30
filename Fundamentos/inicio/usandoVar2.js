var numero = 1;

{
    var numero = 2;
    console.log('Dentro = ', numero);
}

console.log('Fora = ', numero);

// Esse conportamento veio a acontecer pois o var é uma variavel global, e ela ignora quase todos os elementos, so nao ignora a função.

