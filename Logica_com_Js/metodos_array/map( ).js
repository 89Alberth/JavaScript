//map() retorna um novo array com os novos elementos 
const numbers = [10, 2, 5, 8]
const newArray = numbers.map(myFunction)

function myFunction (el){
    return el * 10
}

console.log(newArray)