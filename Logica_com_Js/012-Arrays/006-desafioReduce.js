const numbers = [1, 5, 8, 28, 6, 5, 28, 1, 6, 7, 12, 89, 7, 6, 89, 12]

const simpleNumber = numbers.reduce(function (array, number) {
   if (array.indexOf(number) < 0 ) {
      array.push(number)
   }
   return array
}, [])

console.log(simpleNumber)
