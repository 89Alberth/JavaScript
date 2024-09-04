; (function () {
    "use strict"
    //armazenar o DOM em variaveis
    const itemInput = document.getElementById("item-input") //campo input 
    const todoAddForma = document.getElementById("todo-add") //formulario
    const ul = document.getElementById("todo-list")
    // const lis = ul.getElementsByTagName("li")

   
    let arrTask = []
        

    function addEventLi(li) {
        li.addEventListener("click", function () {
            console.log(this)
        })
    }



    function generateTaskLi(obj) {
        const li = document.createElement("li")
        li.className = "todo-item"
        const p = document.createElement("p")
        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)
        addEventLi(li)

        return li
    }



    function renderTask() { 
        ul.innerHTML = ""
        arrTask.forEach(task => {
            ul.appendChild(generateTaskLi(task))
        })
    }




    function addTask(task) {
        arrTask.push({
            name: task,
            creatAt: Date.now(),
            completed: false
        })
    }




    todoAddForma.addEventListener("submit", function (e) {
        e.preventDefault()
        addTask(itemInput.value)
        renderTask()
        itemInput.value = ""
        itemInput.focus()
    });

    renderTask()

})();