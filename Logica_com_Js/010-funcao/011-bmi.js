//must receive the number
//must return a string
//must throw an error if given a parameter that not is number
//must return error when not  receiving any parameter

const calcularImc = function (altura, peso, cb) {

    if (typeof peso !== "number" || typeof altura !== "number") {
        throw Error("Only Number !!!")
    }

    let imc = (peso / (altura ** 2)).toFixed(2)

    if (typeof cb === "function") {
        return cb(imc)
    }

    return imc
}

const classificaImc = function (imc) {
    if (imc < 16.9) {
        return "Muito abaixo do peso"
    } else if (imc <= 18.4) {
        return "Abaixo do peso"
    } else if (imc <= 24.9) {
        return "Peso normal"
    } else if (imc <= 29.9) {
        return "Acima do peso"
    } else if (imc <= 34.9) {
        return "Obesidade Grau I"
    } else if (imc <= 40) {
        return "Obesidade Grau II"
    } else {
        return "Obesidade Grau III"
    }
}

let peso = 75
let altura = 1.75
let imc = calcularImc(altura, peso)
let imc_2 = calcularImc(altura, peso, classificaImc)

console.log("Seu IMC é de: " + imc + " - " + imc_2)