function calculateAverage() {
    let average = 0
    let amount = arguments.length

    for (let i = 0; i < amount; i++) {
        
        if (typeof arguments[i] !== "number") {
            console.log(arguments[i])
            throw Error("You must enter only the number")
        }

        average += arguments[i]
    }

    return (average / amount) || 0
}

console.log(calculateAverage(5, 9))