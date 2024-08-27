(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const submitForm = document.querySelector(".formCadastro")
    const btn = document.getElementById("btn")
    const check = document.getElementById("chkAceito")
    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedBackMessageBtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg){
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = "É necessário preencher todos os campos"
    }
    
    feedBackMessageBtn.addEventListener("click", function(){
        feedbackMessage.classList.remove("show")
        txtTitulo.focus()
    })

    


    submitForm.addEventListener("submit", function (e) {
        if (!txtTitulo.value) {
            showErrorMessage("Preencha todos os campos.")
            e.preventDefault()
        }
    })

    
    const txtDescription = document.getElementById("txtDescricao")
    const counter = document.getElementById("contador")
    const _maxLength = txtDescription.maxLength
    const counterSpan = counter.getElementsByTagName("span")[0]
    counterSpan.textContent = _maxLength
    counter.style.display = "block"

    function checkLength() {
        let numberLetter = this.value.length
        let characterNumbers = parseInt(_maxLength) - parseInt(numberLetter)
        counterSpan.textContent = characterNumbers
    }

    btn.disabled = true

    

    check.addEventListener("change", function(){
        btn.disabled = !this.checked
    })


    txtDescription.addEventListener("input", checkLength)

})()