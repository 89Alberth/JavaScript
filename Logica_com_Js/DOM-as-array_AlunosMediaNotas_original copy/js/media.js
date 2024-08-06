const trHead = document.querySelector("thead tr")
const thHeader = trHead.querySelectorAll("th")
const alunoNota = trHead.querySelectorAll("[aluno-nota]")
const indice_nota = {}

Array.from(alunoNota).forEach(function(th){
    let prop = th.getAttribute("aluno-nota")
    indice_nota[prop] = pegaNota(prop)
})

function pegaNota(indice){
    const th = trHead.querySelector(`[aluno-nota = ${indice}]`)
    const i = Array.from(thHeader).indexOf(th)
    return i
}

const trs = document.querySelectorAll("tbody tr")

let x = 0
let media = 0
while(trs[x]){

    let tds = trs[x].querySelectorAll("td")

    media = average(
        parseFloat(tds[indice_nota.n1].textContent),
        parseFloat(tds[indice_nota.n2].textContent),
        parseFloat(tds[indice_nota.n3].textContent),
        parseFloat(tds[indice_nota.n4].textContent)
    )

    tds[indice_nota.media].textContent = media.toFixed(2)
    x++
}