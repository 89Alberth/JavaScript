(function () {
    const alunos = [
        { nome: "Daniel", notas: [8, 3, 7.5, 3] },
        { nome: "Maria", notas: [10, 9, 6, 9.5] },
        { nome: "João", notas: [10, 4.5, 5, 3.5] },
        { nome: "Joana", notas: [9, 5, 9, 6] },
        { nome: "José", notas: [10, 4.5, 7, 3] },
        { nome: "Arnaldo", notas: [10, 4.5, 7, 9] },
        { nome: "Lucas", notas: [5, 9, 8, 8] },
        { nome: "Luana", notas: [3, 7, 9, 3] },
        { nome: "Beatriz", notas: [10, 4, 7, 9] },
        { nome: "Sergio", notas: [4.5, 9.5, 10, 2] }
    ];
    
    alunos.forEach((aluno) => {
        aluno.media = avarege(...aluno.notas).toFixed(2) 
    })


    const html = alunos.map((aluno) => `
        <tr class= "${aluno.media >= 7 ? "aprovado" : "reprovado"}">
            <td>${aluno.nome}</td>
            ${aluno.notas.map(n => `<td>${n}</td>`).join("")}
            <td>${aluno.media}</td>
        </tr>
    `
    ).join("")

    document.querySelector("tbody").innerHTML = html

})()