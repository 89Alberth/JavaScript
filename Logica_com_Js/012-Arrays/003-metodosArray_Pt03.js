const arr = [4,5,9,90,105,89,2025]
const arr2 = [56, 986, 1065, 785]

//toString transforma um array em uma unica string separado por virgulas
console.log("toString: ", arr.toString())

//join tambm transforma um array em uma unica string,mas porm você pode escolhe qual vai ser o separador dos elementos
console.log("join: ", arr.join("-"))

//concat ele "concatena" faz uma junção de dois array 
const arr3 = arr.concat( arr2)
console.log("concat: ", arr3)