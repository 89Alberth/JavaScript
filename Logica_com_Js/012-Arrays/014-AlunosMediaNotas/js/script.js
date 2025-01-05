(function(){
    const indice_nota = {}
    const trHeader = document.querySelector("thead tr")
    const ths = trHeader.querySelectorAll("th")
    const alunosNotas = trHeader.querySelectorAll("[aluno-notas]")
    
    Array.from(alunosNotas).forEach(function (th){
        let prop = th.getAttribute("aluno-notas")
        indice_nota[prop] = pegarNotas(prop)
    })

    function pegarNotas (indice) {
        const th = trHeader.querySelector(`[aluno-notas="${indice}"]`)
        const _index = Array.from(ths).indexOf(th)
        return _index
    }

    const trBody = document.querySelectorAll("tbody tr")
    let i = 0
    let media = 0

    while(trBody[i]){
        const tds = trBody[i].querySelectorAll("td")
       
        media = avarege(
            parseFloat(tds[indice_nota.n1].textContent),
            parseFloat(tds[indice_nota.n2].textContent),
            parseFloat(tds[indice_nota.n3].textContent),
            parseFloat(tds[indice_nota.n4].textContent)
        )

        tds[indice_nota.media].textContent = media
        i++
    }

    
})()