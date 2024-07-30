/*
   Imc: peso  (altura * altura)
   Retornar um unico número
   Retornar uma string com a classificação do Imc
   Receber erro se parametro não for numero
   Retorna erro caso não receba nenhum parametro

Muito abaixo do peso 16 a 16,9 kg/m2
Abaixo do peso 17 a 18,4 kg/m2
Peso normal 18,5 a 24,9 kg/m2
Acima do peso 25 a 29,9 kg/m2
Obesidade Grau I 30 a 34,9 kg/m2
Obesidade Grau II 35 a 40 kg/m2
Obesidade Grau III maior que 40 kg/m2
   */

function calcularImc(peso, altura,cb) {
    if (peso === undefined || altura === undefined) {
        throw Error("Need two parameters")
    }

    let imc = peso / (altura * altura)

    if (typeof cb === "function") {
        return cb(imc)
    }
    return imc
}

function classificaImc(imc) {
    if (imc < 16.9) {
        return console.log("Muito abaixo do peso.")
    } else if (imc < 18.4) {
        return console.log("Abaixo do peso.")
    } else if (imc < 24.9) {
        return console.log("Peso Normal.")
    } else if (imc < 29.9) {
        return console.log("Acima do peso")
    } else if (imc < 34.9) {
        return console.log("Obesidade Grau I")
    } else if (imc < 40) {
        return console.log("Obesidade Grau II")
    } else {
        return console.log("Obesidade Grau III")
    }
}


let imc = calcularImc(80, 1.74)
console.log(imc.toFixed(2))
let imc2 = calcularImc(80, 1.74, classificaImc)




