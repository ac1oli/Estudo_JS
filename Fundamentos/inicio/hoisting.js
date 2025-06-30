console.log('a = ', a)
var a = 2
console.log('a = ', a)

// A variavel com VAR sofreu o efeito do Hoisting que é, mesmo que uma variavel nao foi iniciada e so velha a ser colocada depois, ao inves de da erro ela meio que conta que a variavel foi iniciada mais nao foi atribuida nenhum valor para ela. Por isso nesse codigo assima, quando é chamada pela primeira vez, da undefined e quando é chamada depois, aparece o valor

console.log('a = ', a)
var a = 2
console.log('a = ', a)

// O mesmo efeito de Hoisting não é aplicado quando se usa a variavel LET