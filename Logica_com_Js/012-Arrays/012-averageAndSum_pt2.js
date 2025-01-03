function sum() {
    const notas = Array.prototype.reduce.call(arguments, function (total, atual) {
        return total + atual
    })

    return notas
}

function average () {
    const soma = sum.apply(null, arguments)
    return soma / arguments.length
}

console.log(average(8, 6 , 4))