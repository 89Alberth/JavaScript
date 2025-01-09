let telefone = "97999-7979"

function hiddenNumber(numero){
    let indexHifem = numero.indexOf("-")
    let inicio = numero.slice(0, indexHifem)
    let fim = numero.slice(indexHifem + 1)
    let ultimosNumeros = numero.slice(-2)

    return console.log(`${inicio[0].padEnd(inicio.length, "*")} - ${ultimosNumeros.padStart(fim.length, "*")} `)
}

hiddenNumber(telefone)