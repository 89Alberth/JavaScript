function somar() {
    let media = 0

    for (let i = 0; i < arguments.length; i++){
        media += arguments[i]
    }

    return console.log((media / arguments.length).toFixed(2))
}

somar(5, 13, 32)