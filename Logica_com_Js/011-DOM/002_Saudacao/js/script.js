(function () {
    const name = ""
    const paragraph = document.querySelector(".top-bar p")

    if (name) {
        paragraph.innerHTML += "<b>" + name + "</b>"
    } else {
        const toRemove = document.querySelector(".top-bar")
        toRemove.parentElement.removeChild(toRemove)
    }

})()