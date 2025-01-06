; (function () {
    const todoAdd = document.getElementById("todo-add")
    const inputAddTask = document.getElementById("item-input")
    const listUl = document.getElementById("todo-list")
    // let lis = listUl.getElementsByTagName("li")

    todoAdd.addEventListener("submit", function (e) {
        e.preventDefault()
        let task = inputAddTask.value
        addTask(task)
        renderTask()
        inputAddTask.focus()
        inputAddTask.value = ""
    })

    let arrTasks = [
        {
            name: "Exampla One",
            createAt: Date.now(),
            complete: false
        }
    ]

    function addTask(task) {
        arrTasks.push(
            {
                name: task,
                createAt: Date.now(),
                complete: false
            }
        )
    }

    function generaterLi(obj) {
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = `<i class="fas fa-check displayNone"></i>`
        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.name

        li.appendChild(p)

        editButton.className = "fas fa-edit"
        li.appendChild(editButton)

        deleteButton.className = "fas fa-trash-alt"
        li.appendChild(deleteButton)

        eventLi(li)
        return li
    }


    function eventLi(li) {
        li.addEventListener("click", function () {
            console.log(this)
        })
    }


    function renderTask() {
        listUl.innerHTML = ""
        arrTasks.forEach(function (task) {
            listUl.appendChild(generaterLi(task))
        })
    }


    renderTask()
})()