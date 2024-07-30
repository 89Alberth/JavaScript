const btn = document.querySelector('form input[type = "submit"]')
btn.disabled = true

function enableOrDisableButton() {
    const contrato = document.getElementById('contrato')
    
    let checked = contrato.checked
    console.log(checked)

    btn.disabled = !checked

}