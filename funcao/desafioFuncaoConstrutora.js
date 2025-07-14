function Pessoa(name) {
    this.name = name

    this.falar = () => {
        console.log(`Meu nome é ${this.name}`)
    }
}

const p = new Pessoa('Alex')
p.falar()