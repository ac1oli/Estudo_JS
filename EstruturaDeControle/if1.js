function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Parabens, Você passou....")
    }
}

soBoaNoticia(7)

function seForVerdade(valor){
    if(valor){
        console.log('É verdade... ', valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
seForVerdade(' ')
seForVerdade([])
seForVerdade({})
seForVerdade('teste')