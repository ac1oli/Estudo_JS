const triangulo = function (a,b,c) {
    if(a === b && b === c){
        console.log("Triangulo Equilatero")
    }else if(a === b || a === c || b === c){
        console.log("Triangulo Isósceles")
    }else{
        console.log("Triangulo Escaleno")
    }
}

triangulo(10,9,1)