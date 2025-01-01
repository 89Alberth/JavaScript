(function () {
    const name = "João Paulo"
   
    if (name) {
        const topBar = document.createElement("div")
        topBar.className = "top-bar"
        topBar.innerHTML = `<p>Bem-vindo, <b> ${name} </b> </p>`
        const elementoPai = document.querySelector(".hero")
        elementoPai.insertBefore(topBar, elementoPai.firstElementChild)
    }

})()

// {/* <div class="top-bar">
//                 <p>Bem-vindo(a), </p>
//             </div> */}