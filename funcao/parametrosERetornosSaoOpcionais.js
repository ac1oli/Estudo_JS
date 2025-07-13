function area(largura, altura) {
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2.`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,2,2)) // Mesmo passando mais parametros, ele so vai pegar os dois primeiro, pois é oq esta sendo pedido na função
console.log(area(5,5))