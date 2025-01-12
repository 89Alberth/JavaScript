const telephone = "98564-8541"
const hyphenIndex = telephone.indexOf("-")
const first = telephone.slice(0, hyphenIndex)
const last = telephone.slice(hyphenIndex + 1)
const twoLast = last.slice(-2)

console.log(twoLast)

console.log(first[0].padEnd(first.length, "*") + "-" + twoLast.padStart(last.length, "*"))