const numbers = [2, 10, 5, 89, 23, 35, 89]

//Qualquer um dos dois métodos (indexOf ou LastIndexOf) retorna -1 se caso não encontrar o elemento que foi pedido
//indexOf retorna o indice do primeiro elemento encontrado  que foi pesquisado dentro de um array
console.log("IndexOf: ", numbers.indexOf(88))
console.log("IndexOf: ", numbers.indexOf(89))

//LastindexOf retorna o indice do ultimo elemento encontrado  que foi pesquisado dentro de um array
console.log("LastIndexOf: ", numbers.lastIndexOf(87))
console.log("LastIndexOf: ", numbers.lastIndexOf(89))

//Includes retorna true ou false true: se encontra o elemento dentro de uma array, false: se não encontrar
console.log("Includes: ", numbers.includes(23))
console.log("Includes: ", numbers.includes(25))

//Find retorna sempre o primeiro elemento após o valor de retorno da callback for true
console.log("Find: ", numbers.find(function (el) {
    return el > 18
}))

//FindIndex é assim com find só que retorna o indice do elemento
console.log("FindIndex: ", numbers.findIndex(function (el) {
    return el > 18
}))