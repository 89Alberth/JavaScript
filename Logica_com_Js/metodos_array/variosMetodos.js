//Todos esses métodos altera o array original

//push() inclui um novo elemento que é passado no fim de uma array e o seu novo indice
let names = ["primeiro", "segundo", 125, true, "mundo"]
console.log("Array original: ", names, "\n")

names.push("Último")

console.log("Com push(): ", names, "\n")

//pop() ele exclui o último elemento da array

names.pop()
console.log("Com pop(): ", names, "\n")

//shift parecido com pop(),mas porém exclui  o primeiro elemento do array

names.shift()
console.log("Com shift: ", names, "\n")

// unshift igual o push mas ao invés de incluir no final da array inclui no começo
names.unshift("Primeiro novamente")
console.log("unshift: ", names), "\n"

//slice recorta o array a partir de um indice ate outro. Ex: slice(indice start, indice end)
let _slice = names.slice(0, 3)
console.log("slice(): ", _slice, "\n")

//splice altera o array original,removendo elementos  indicados passado pelo index (start e end) e retorna os elementos removidos e pode se incluir novos elementos a partir do removidos sendo a sintax splice(start, end, "novoElemento")

console.log(names)

let _splice = names.splice(0, 2, "não é mais o segundo")
console.log(names)
console.log("splice(): ", _splice, "\n")

// reverse() ele inverte os elementosde uma array 
let array_2 = [1, 2, 3, 4, 5]
console.log(array_2)
array_2.reverse()
console.log(array_2)

//reduce ele faz iteração para cada item de um a array dentro de uma function
let numeros = [1, 2, 3]

function somarArray(acumulador, atual) {
    return acumulador + atual
}

console.log(numeros.reduce(somarArray))




