const txtName = document.getElementById("txtTitulo")
const form = document.querySelector(".formCadastro")
const feedBackMessage = document.getElementById("feedbackMessage")
const errorMessage = feedBackMessage.getElementsByTagName("p")[0]
const closeMessage = feedBackMessage.getElementsByTagName("button")[0]
const disableForm = document.querySelectorAll("#txtTitulo, #txtDescricao, #chkAceito, #btn")
const  countCharacter = document.getElementById("contador")
const textDescripition = document.getElementById("txtDescricao")
const lengthMax = textDescripition.maxLength
const maxLetter = countCharacter.getElementsByTagName("span")[0]
const submitBtn = document.getElementById("btn")
const checkBox = document.getElementById("chkAceito")

countCharacter.style.display = "block"
submitBtn.disabled = true
lengthCaracter(lengthMax)

checkBox.addEventListener("change", () => submitBtn.disabled = !checkBox.checked)

function countLetter () {
    let typedLetter = this.value.length
    lengthCaracter(parseInt(lengthMax) - parseInt(typedLetter)) 
}

function lengthCaracter(n){
    maxLetter.textContent = n
}



textDescripition.addEventListener("input", countLetter)

function nameValid(e) {
    if (!txtName.value) {
        showErrorMessage("Preencha todos os campos")
        e.preventDefault()
    }
}

function showErrorMessage(msg) { 
    errorMessage.textContent = msg
    feedBackMessage.classList.add("show")
    closeMessage.removeEventListener("click", closeFeedBackMessage)
    closeMessage.removeEventListener("keyup", closeMessageEsc)
    closeMessage.focus()

    disableForm.forEach(function (e) {
        e.disabled = true
    })

    function closeFeedBackMessage(){
        feedBackMessage.classList.remove("show")
        disableForm.forEach(function (e) {
            e.disabled = false
        })
        txtName.focus()
    }

    function closeMessageEsc (e) {
        if(e.keyCode === 27){
            closeFeedBackMessage()
        }
    }
   
    closeMessage.addEventListener("click", closeFeedBackMessage)
    closeMessage.addEventListener("keyup", closeMessageEsc)
}




form.addEventListener("submit", nameValid)