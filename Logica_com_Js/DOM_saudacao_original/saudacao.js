(function () {
    const nomeUsuario = "Alberth"
    const elemento = document.querySelector('.top-bar p')

    if (nomeUsuario) {
        elemento.innerHTML += "<b>" + nomeUsuario + "<b>"
    } else { 
        const elementoParaRemover = elemento.parentElement
        elementoParaRemover.parentElement.removeChild(elementoParaRemover)
    }
})()