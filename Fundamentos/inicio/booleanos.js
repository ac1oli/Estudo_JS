let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //esses sinais de !! serve para identificar o valor original dele, ai vai nos dizer se é verdadeiro ou falso

console.log("Os Verdadeiros...");
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // aqui está sendo definido que a variavel 'isAtivo' é verdadeiro, ai quando comparar utilizando !! ele vai retornar verdadeiro, pois é o valor original dele.

console.log("Os Falsos.....");
