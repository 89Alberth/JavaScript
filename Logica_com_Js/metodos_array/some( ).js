//Some() retorna true se caso um dos elemstos do array atender a condição 

const arr = ["Oi", "Sei lá", null, false, "Alberth", 25]

function check(arrs){
    return typeof arrs === "number"
}

console.log("Existe número no array ? ", arr.some(check))