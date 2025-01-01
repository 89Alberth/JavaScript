const email = document.getElementById("txtEmail")
const feedBack = document.getElementById("newsletterFeedback")


function registerEmail () {
    feedBack.innerHTML = `<p> email <b> ${email.value} </b> cadastrado com sucesso </p>`
}