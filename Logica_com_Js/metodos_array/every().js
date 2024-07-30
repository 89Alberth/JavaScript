//Método every() retorna true caso todos os elemento do array corresponder as condições true, caso contrário se um dos elementos for false ele retorna false

const age = [18, 30, 65, 20, 40]

let checkAge = ages =>  ages >= 18

// function checkAge(ages, i, arr){
//     console.log(ages)
//     return ages >= 18
// }

console.log("Todos os candidatos são maiores de idade ? ", age.every(checkAge))