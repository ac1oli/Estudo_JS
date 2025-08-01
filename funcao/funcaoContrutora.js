function Carro (velocidadeMaxima = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    // Metodo publico
    this.acelerar = function () {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

let uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(320, 20)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
