function soma() {
    let total = 0

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
        total = arguments[i] + total
     }

     return total / arguments.length
}

console.log("A média é:",soma(5, 6, 8, 9))