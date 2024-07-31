function sum() {
    let numbers = []

    // for(let i = 0; i < arguments.length; i++){
    //     numbers.push(arguments[i])
    // }

    Array.prototype.forEach.call(arguments, function (argument) {
        numbers.push(argument)
    })

    return numbers.reduce(function (valor, total) {
        return valor + total / arguments.length
    }, 0)

}

function avarege() { 
    const soma = sum.apply(null, arguments)
    console.log(soma)
}

avarege(5, 9, 8,  6)