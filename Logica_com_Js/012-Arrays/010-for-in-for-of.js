const nomes = ["Arthur", "Samira","Franciel","Alberth"]

for (nom of nomes) {
    console.log(nom)
}

const pessoa = {
    nome: "João",
    idade: 56,
    cidade: "Piracicaba",
    ano: 1978
    
}
console.log("")

for (prop in pessoa) {
    console.log(`${prop}: ${pessoa[prop]}`)
    
}