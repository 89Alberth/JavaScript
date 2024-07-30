(function () {
    const name = "alberth"
    if (name) {
        const elemento = document.createElement('div')
        elemento.className = "top-bar"
        elemento.innerHTML = `<p>Seja Bem Vindo, ${name}</p>`
        const elementoPai = document.getElementsByClassName('hero')[0]
        elementoPai.insertBefore(elemento, elementoPai.firstElementChild)

        console.log(elemento)

    }
})()