const getNota = (indice) => {
    const trHead = document.querySelector("thead tr")
    const ths = trHead.querySelectorAll("th")
    const th = trHead.querySelector(`[aluno-notas= "${indice}"]`)
    const _index = Array.from(ths).indexOf(th)
    console.log(_index)
    return _index
}


(function () {

    const indice_notas = {
        n1: getNota("n1"),
        n2: getNota("n2"),
        n3: getNota("n3"),
        n4: getNota("n4"),
        media: getNota("media")
    }

    const alunos = document.querySelectorAll("tbody tr")

    let i = 0
    let media = 0

    while (alunos[i]) { 
        let aluno = alunos[i].querySelectorAll("td")

        media = avarege(
            parseFloat(aluno[indice_notas.n1].textContent),
            parseFloat(aluno[indice_notas.n2].textContent),
            parseFloat(aluno[indice_notas.n3].textContent),
            parseFloat(aluno[indice_notas.n4].textContent)
        )

        aluno[indice_notas.media].textContent = media.toFixed(2)
        
        i++
    }

    
})()