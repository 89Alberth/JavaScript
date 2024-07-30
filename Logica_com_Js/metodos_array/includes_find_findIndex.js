let array = [10, 15, 18, 32, 64]

//include retorna um boolean (true our false) dependedo da condicional
console.log(array.includes(10))


//find retorna o primerio elemento que satisfaça uma condição
function checkAge(el) {
    return el > 18
}
console.log(array.find(checkAge))


//findIndex retorna o index do elemento encontrado que atende a condição 
console.log(array.findIndex(checkAge))