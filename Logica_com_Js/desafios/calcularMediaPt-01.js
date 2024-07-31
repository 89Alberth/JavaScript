function sum() {
    const number = Array.from(arguments)

    return number.reduce(function (valor, total) {
        return valor + total
    }, 0)

}

function avarege() { 
    return sum(...arguments) / arguments.length
}

const media = avarege(5, 6, 6, 9)
console.log(media)














// function sum() {
//     const number = Array.from(arguments)

//     return number.reduce(function (valor, total) {
//         return valor + total
//     }, 0)
// }

// function avarege() {
//     console.log(sum(...arguments))
//     return sum(...arguments) / arguments.length
// }

// console.log(avarege(5, 10, 6, 3))


