function areaRetangulo(larg, alt) {
    if (typeof larg !== "number" || typeof alt !== "number") {
        throw Error("Este programa aceita apenas números")
    }
    return larg * alt
}

function areaTriangulo(bas, alt) {
    if (typeof bas !== "number" || typeof alt !== "number") {
        throw Error("Este programa aceita apenas números")
    }
    return (bas * alt) / 2
}

function areaCirculo(base){
    const pi = Math.PI
    if(typeof base !== "number"){
        throw Error("Este programa aceita somente números")
    }

    return (pi * (base ** 2)).toFixed(2)
}

