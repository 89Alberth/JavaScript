function calcularMedia() {
    if (arguments.length == 0) {
        return console.log("Nenhuma nota foi digitada")
    }

    let total = 0
    let n
    for (let i = 0; i < arguments.length; i++) {
        n = arguments[i]
        if(typeof n != "number"){
            throw Error("Only number")
        }
        total = total + n
    }
    return console.log("A média é", (total / arguments.length).toFixed(1))
}

calcularMedia(10, 4, 2, "oi")