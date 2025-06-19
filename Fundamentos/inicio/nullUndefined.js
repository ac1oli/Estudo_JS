// Atribição por endereço

const a = {name: 'Teste'}
const b = a;

// console.log(a);
// console.log(b);
b.name = 'Opa';

console.log(a);
console.log(b);

console.log("--------------------------------------")

// Atribuição do tipo primitivo, ou copia por valor

let c = 3
let d = c
d++

console.log(c,d);
