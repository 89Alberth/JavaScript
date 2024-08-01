const trs = document.querySelectorAll('tbody tr')
console.log(trs)

let media = 0
let x = 0

const indice_nota = {
    n1: 1,
    n2: 2,
    n3: 3,
    n4: 4,
    media: 5
}

while (trs[x]) {
    const tds = trs[x].querySelectorAll('td')

    media = avarege(
        parseFloat(tds[indice_nota.n1].textContent),
        parseFloat(tds[indice_nota.n2].textContent),
        parseFloat(tds[indice_nota.n3].textContent),
        parseFloat(tds[indice_nota.n4].textContent),
    )


    tds[indice_nota.media].textContent = media.toFixed(1)
    x++
}