var numero = 1;

{
    let numero = 2;
    console.log('Dentro = ', numero);
}

console.log('Fora = ',numero);

// Diferente do VAR o LET obedece os escopos/blocos, porque se ele estiver sendo definido em um bloco de codigo, ele noa vai poder ser acessado em outras partes do codigo, alem da que ele foi definido