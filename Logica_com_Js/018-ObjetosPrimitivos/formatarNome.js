function formatarNome(nome){
    const indiceNome = nome.indexOf(" ")
    if(indiceNome < 0){
        return nome
    }
    const primeiroNome = nome.substring(0, indiceNome)
    const sobrenome = nome.substring(indiceNome + 1)
    const nomeFormatado = sobrenome + "," + primeiroNome 

    return nomeFormatado
    
}

console.log(formatarNome("Alberth"))
console.log(formatarNome("Alberth Costa"))
console.log(formatarNome("Alberth Costa Santana"))