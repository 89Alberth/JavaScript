const nome = ["Alberth", "Samira", "Arthur", "Franciele", "Gisele", "Antônio"]

function initialName(nome, nomeAtual) {

    let primeiraLetra = nomeAtual[0]

    if (nome[primeiraLetra]) {
        nome[primeiraLetra]++
    } else { 
        nome[primeiraLetra] = 1
    }

    return nome
}

const callFunction = nome.reduce(initialName, {})

console.log(callFunction)