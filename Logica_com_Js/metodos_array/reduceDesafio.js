const numeros = [1, 6, 89, 22, 12, 100, 12, 89, 22, 1, 100, 8]
    
const numerosUnicos = numeros.reduce(_numeros, [])

function _numeros(numero, numeroAtual){
    if(numero.indexOf(numeroAtual) < 0){
        numero.push(numeroAtual)
    }

    return numero
}



