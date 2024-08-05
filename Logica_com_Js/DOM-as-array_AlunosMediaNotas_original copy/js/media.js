const trHead = document.querySelector("thead tr")
const thHead = trHead.querySelectorAll("th")
const AlunoNota = trHead.querySelectorAll("[aluno-nota]")
const indiceNotas = {}


Array.from(AlunoNota).forEach(function (th) { 
    let prop = th.getAttribute("aluno-nota")
    indiceNotas[prop] = pegaNota(prop)
})




function pegaNota(indice) {
    const indiceNota = trHead.querySelector(`[aluno-nota = ${indice}]`)
    const i = Array.from(thHead).indexOf(indiceNota)
    return i
}


const trs = document.querySelectorAll("tbody tr")

let media = 0
let x = 0

while (trs[x]) {
    const ths = trs[x].querySelectorAll("td")

    media = average(
        parseFloat(ths[indiceNotas.n1].textContent),
        parseFloat(ths[indiceNotas.n2].textContent),
        parseFloat(ths[indiceNotas.n3].textContent),
        parseFloat(ths[indiceNotas.n4].textContent)
    )

    ths[indiceNotas.media].textContent = media.toFixed(1)
    x++
}