function sum() {
    const notas = Array.from(arguments)

    const isNumber = notas.some(function (elemento) {
        return typeof elemento !== "number"
    })

    if (isNumber){
        throw Error("Only numbers")
    }

    const total = notas.reduce(function (soma, atual) {
        return soma + atual
    })

    return total
}

function average() {
    return sum(...arguments) / arguments.length
}

console.log(average(6, 10, 5).toFixed(2))
