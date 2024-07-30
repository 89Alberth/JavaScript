function calcularAreaRetangulo(l, a) {
    if (typeof l !== "number" || typeof a !== "number") {
        throw new Error("O programa que calcula área do retângulo aceita somente números")
    }
    return l * a
}


function calcularAreaTriangulo(b, a) {
    if (typeof b !== "number" || typeof a !== "number") {
        throw new Error("O programa que calcula área do triangulo aceita somente números")
    }
    return (b * a) / 2
}



function areaCirculo(raio) {
    if (typeof raio !== "number") {
        throw new Error("O programa que calcula área do circulo aceita somente números")
    }
    const pi = Math.PI
    return pi * (raio * raio)

}