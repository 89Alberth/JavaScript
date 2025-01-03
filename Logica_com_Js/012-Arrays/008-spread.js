const notas = [8, 5, 9, 7.5]
let sum = 0

function average () {
    for(let i = 0; i < arguments.length; i++) {
        console.log(sum)
        sum += arguments[i]
    }
   return (sum / arguments.length).toFixed(2)
}

console.log(average(...notas)) //A sintaxe dos 3 pontos e o spread que permite quebrar um array em partes