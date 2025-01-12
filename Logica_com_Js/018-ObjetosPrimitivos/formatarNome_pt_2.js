function formatarNome(nome){
    let nomeArray = nome.split(" ")
    
    if(nomeArray.length === 1){
        return nomeArray.join("")
    }

    let _nome = nomeArray.shift()

    return nomeArray.join("") + "," + _nome
    
}

console.log(formatarNome("Alberth"))
console.log(formatarNome("Alberth Costa"))
console.log(formatarNome("Alberth Costa Santana"))