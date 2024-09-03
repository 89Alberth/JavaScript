; (function () {
    "use strict"
    //armazenar o DOM em variaveis
    const itemInput = document.getElementById("item-input") //campo input 
    const todoAddForma = document.getElementById("todo-add") //formulario
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")

    function addTask(task) {
        const li = document.createElement("li")
        li.className = "todo-item"
        const p = document.createElement("p")
        p.className = "task-name"
        p.textContent = task
        li.appendChild(p)
        ul.appendChild(li)

        li.addEventListener("click", function(){
            console.log(this)
        })
    }

    todoAddForma.addEventListener("submit", function (e) {
        e.preventDefault()
        // ul.innerHTML += `
        // <li class="todo-item">
        //     <p class="task-name">${itemInput.value}</p>
        // </li>`
        addTask(itemInput.value)
        itemInput.value = ""
        itemInput.focus()

    });

    [...lis].forEach(element => {
        element.addEventListener("click", function(){
            console.log(this)
        }) 
    })


})();