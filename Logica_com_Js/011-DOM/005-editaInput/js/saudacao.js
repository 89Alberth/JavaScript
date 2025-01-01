const email = document.getElementById("txtEmail")

function editar () {
    email.disabled = false
    email.focus()
}

const desabilitar = function () {
    email.disabled = true
}
