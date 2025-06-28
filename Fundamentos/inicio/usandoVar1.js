// Qaundo se cria uma variavel tipo var, ela pode ser chamada ou alterada em qualque pate do codigo.

{{{{
    var nome = "Lucas"
}}}}

console.log(nome);

// Dentro de uma função, a sitiuação muda, pois ao criar uma variavel VAR em uma função, a variavel so fica visivel dentro da mesmo, sem poder ser consultada em outras partes do codigo.

function teste(){
    var numero = 521
}

console.log(numero);

//Nesse caso a variavel VAR não esta retornando nada e acaba dando "ERRO", pois esta sendo chamada fora do escorpo da função.

function teste(){
    var numero = 521
    console.log(numero);
}

teste();

//Ja nesse outro caso a variavel esta sendo chamada dentro da função, por isso esta retornando um valor