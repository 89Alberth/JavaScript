const mainArray = [5, true, null, 9, 10, "Sei lá"]

// método every, retorna um boolean true se caso todos os elementos do array atenda o requisito da função callback, caso ao contrario retorna false

const onlyNumber = mainArray.every(function (el) {
    return typeof el === "number"
})

console.log("Every: ", onlyNumber)





//some retorna um boolean true se ao menos um elemento do array atenda requisito da função passada, se todos os elementos não atender o requisito retorna false

const onlyNumber2 = mainArray.some(function (el) {
    return typeof el === "number"
})

console.log("Some: ", onlyNumber2)




//forEach sempre retonara undefined,Ele execulta uma função para cada elemento do array 

const arrForeach = [5, 8, 17, 4, 6]
let sum = 0

arrForeach.forEach(function (el) {
    sum += el
})

console.log("forEach: ", sum)



//map executa uma função para cada item do array, e retorna um novo array com os novos resultados
const arraymap = [1, 100, 8, 94]

const callbackMap = function (el) {
    return el * 2
}
console.log("Map: ", arraymap.map(callbackMap))



//filter Ele retorna um novo array com todos elementos que passaram no teste  aplicado

const idadePessoas = [16, 32, 64, 12, 25, 89, 45, 5]

const idadeFiltrada = idadePessoas.filter(function (el){
    return el >= 18
})

console.log("Array original: ", idadePessoas)
console.log("Array filtrado: ", idadeFiltrada)

