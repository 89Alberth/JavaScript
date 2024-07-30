const email = document.getElementById('txtEmail')
const msgNewsletterFeedback = document.getElementById('newsletterFeedback')

function cadastrarEmail(){
    let emailValue = email.value
    
    msgNewsletterFeedback.innerHTML = `Email <b>${emailValue}</b> cadastrado com sucesso.`
}