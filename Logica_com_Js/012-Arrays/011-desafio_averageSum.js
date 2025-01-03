function sum() {
    const notas = Array.from(arguments)

    const isNumber = notas.some(function (elemento) {
        return typeof elemento !== "number"
    })

    if (isNumber){
        throw Error("Must only numbers please")
    }

    const total = notas.reduce(function (soma, atual) {
        return soma + atual
    })

    return total
}

try{
    function average() {
    return sum(...arguments) / arguments.length
    }
    console.log(average("s", 10, 5, 10).toFixed(2))

}catch(error) {
    console.log(error.message)
}

console.log("!!! FIM !!!!")



