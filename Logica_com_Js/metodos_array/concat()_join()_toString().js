let arr1 = [1,2,3,4]
let arr2 = [6,7,8,9]

//metodo toString faz uma representação de um array em forma de string e o tipo dele passa a ser string

console.log(arr1.toString())

//método join faz o mesmo que toString so que podemos passar um parametro como separador entre elementos

console.log(arr2.join(" > "))

//Método concat() e responsavel por concatenar um array com outro array ou algum outro elemento 

console.log(arr1.concat("foi concatenado", arr2))