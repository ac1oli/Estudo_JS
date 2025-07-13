function Pessoa() {
    this.idade = 0
    const self = this

    function contadorDeIdade() {
        self.idade++
        console.log(self.idade)
    }
    
    setInterval(contadorDeIdade, 1000)
}

new Pessoa 