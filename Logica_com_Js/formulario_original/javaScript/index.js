(function () {
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const submitForm = document.querySelector(".formCadastro")

    // const btn = document.getElementById("btn")

    const check = document.getElementById("chkAceito")

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedBackMessageBtn = feedbackMessage.getElementsByTagName("button")[0]


    submitForm.addEventListener("submit", function _submitForm(e) {
        if (!txtTitulo.value) {
            showErrorMessage("Todos os campos devem ser preechidos.", function () {
                txtTitulo.focus()
            })
            e.preventDefault()
        }
    })

    function showErrorMessage(msg, cb) {
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        feedBackMessageBtn.focus()

        function hideErrorMessage() {
            console.log("teste")
            feedbackMessage.classList.remove("show")

            feedBackMessageBtn.removeEventListener("click", hideErrorMessage)
            feedBackMessageBtn.removeEventListener("keyup", pressEsc)
            

            if (typeof cb === "function") {
                cb()
            }
        }

        function pressEsc(e){
           if(e.keyCode === 27){
                hideErrorMessage()
           }
        }

        feedBackMessageBtn.addEventListener("click", hideErrorMessage)
        feedBackMessageBtn.addEventListener("keyup", pressEsc)

        
    }


    

    


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



    check.addEventListener("change", function () {
        btn.disabled = !this.checked
    })


    txtDescription.addEventListener("input", checkLength)

})()