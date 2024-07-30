const txtEmail = document.getElementById('txtEmail')

function editar() {
    txtEmail.disabled = false
    txtEmail.focus()
}

function disableEmail() {
    txtEmail.disabled = true
}