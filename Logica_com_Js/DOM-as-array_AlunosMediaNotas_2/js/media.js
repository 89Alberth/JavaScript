const trHeader = document.querySelector("thead tr")
const thHeader = trHeader.querySelectorAll("th")
const notasAluno = trHeader.querySelectorAll("[aluno-nota]")
const notas = {}

Array.from(notasAluno).forEach(function(th){
    let prop = th.getAttribute("aluno-nota")
    console.log(prop)
    notas[prop] = pegaIndice(prop)
})

function pegaIndice(indice){
    let _indice = trHeader.querySelector(`[aluno-nota = ${indice}]`)
    let i =  Array.from(thHeader).indexOf(_indice)
    return i
}

const trs = document.querySelectorAll("tbody tr")
let x = 0
let media = 0

while(trs[x]){
    let tds = trs[x].querySelectorAll("td")
    media = average(
        parseFloat(tds[notas.n1].textContent),
        parseFloat(tds[notas.n2].textContent),
        parseFloat(tds[notas.n3].textContent),
        parseFloat(tds[notas.n4].textContent),
        
    )

    tds[notas.media].textContent = media.toFixed(1)
    x++
}