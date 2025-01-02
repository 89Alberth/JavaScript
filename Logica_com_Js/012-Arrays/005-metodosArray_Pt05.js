const arr = [1,2,3,4]

//reverse inverte os itens de um array 
console.log(arr.reverse())

//reduce: O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

const reduceF = arr.reduce(function (acumulador, atual) {
    console.log("acumulador: ",acumulador)
    console.log("atual: ", atual)
    return acumulador + atual
})

console.log("Retorno: ", reduceF)

const nomes = ["João", "Maria", "José", "Arthur", "Gabriel", "Samira", "Franciele", "Alberth", "Francisco"]

const ordemNome = nomes.reduce(function(objetoAtual, nome){
    let primeiraLetra = nome[0]
  
    if(objetoAtual[primeiraLetra]){
        objetoAtual[primeiraLetra]++
    } else {
        objetoAtual[primeiraLetra] = 1
    }

    return objetoAtual
}, {})

console.log(ordemNome)