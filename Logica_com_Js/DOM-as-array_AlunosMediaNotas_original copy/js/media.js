function pegaNota(indice) {
    const trHead = document.querySelector("thead tr")
    const thHead = trHead.querySelectorAll("th")
    const indiceNota = trHead.querySelector(`[aluno-nota = ${indice}]`)

   const i = Array.from(thHead).indexOf(indiceNota)
   return i
}




const indiceNotas = {
    n1: pegaNota("n1"),
    n2: pegaNota("n2"),
    n3: pegaNota("n3"),
    n4: pegaNota("n4"),
    media: pegaNota("media")
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