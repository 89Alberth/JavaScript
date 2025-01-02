const  arr = [5, 9, 25, 789, 1025]

//push adiciona um elemento noo final da array
arr.push("Novo item")
console.log("Push: ", arr)

//pop remove ultimo item do array e retorna ele
const ultimoItem = arr.pop()
console.log("\n Array original: ", arr)
console.log(" Retorno Pop(): ", ultimoItem)

//shift remove primeiro item de um e retorna ele
const primeriroItem = arr.shift()
console.log("\n Array original: ", arr)
console.log(" Retorno shift(): ", primeriroItem)

//unshift adiciona elemento por primeiro em um array
arr.unshift("Item incluso")
console.log("\n Array original: ", arr)

//slice
const arrSlice = arr.slice(0, 3)
console.log(" Slice: ", arrSlice)

//splice