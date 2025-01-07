; (function () {
    const todoAdd = document.getElementById("todo-add")
    const inputAddTask = document.getElementById("item-input")
    const listUl = document.getElementById("todo-list")
    const lis = listUl.getElementsByTagName("li")


    todoAdd.addEventListener("submit", function (e) {
        e.preventDefault()
        let task = inputAddTask.value
        addTask(task)
        renderTask()
        setNewData()
        inputAddTask.focus()
        inputAddTask.value = ""
    })

    function addTask(task) {
        arrTasks.push(
            {
                name: task,
                createAt: Date.now(),
                complete: false
            }

        )
        setNewData()
    }


    let arrTasks = getSaveData()

    function getSaveData() {
        let taskData = localStorage.getItem("tasks")
        taskData = JSON.parse(taskData)

        return taskData && taskData.length ? taskData : [
            {
                name: "Exempla One",
                createAt: Date.now(),
                complete: false
            },

            {
                name: "Exempla Two",
                createAt: Date.now(),
                complete: false
            }
        ]
    }

    function setNewData() {
        localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }

    setNewData()

    function generaterLi(obj) {
        const li = document.createElement("li")
        const p = document.createElement("p")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const deleteButton = document.createElement("i")

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = `<i class="fas fa-check ${obj.complete ? "" : "displayNone"}" data-action="checkbox"></i>`
        checkButton.setAttribute("data-action", "checkbox")
        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.name

        li.appendChild(p)

        editButton.className = "fas fa-edit"
        editButton.setAttribute("data-action", "editButton")
        li.appendChild(editButton)

        const contEdit = document.createElement("div")
        contEdit.className = "editContainer"

        const contEditInput = document.createElement("input")
        contEditInput.className = "editInput"
        contEditInput.setAttribute("type", "text")
        contEditInput.value = obj.name
        contEdit.appendChild(contEditInput)

        const contEditButton = document.createElement("button")
        contEditButton.className = "editButton"
        contEditButton.textContent = "Edit"
        contEditButton.setAttribute("data-action", "contEditiButton")
        contEdit.appendChild(contEditButton)

        const contCancelButton = document.createElement("button")
        contCancelButton.className = "cancelButton"
        contCancelButton.textContent = "Cancel"
        contCancelButton.setAttribute("data-action", "contCancelButton")
        contEdit.appendChild(contCancelButton)

        li.appendChild(contEdit)

        deleteButton.className = "fas fa-trash-alt"
        deleteButton.setAttribute("data-action", "delete")
        li.appendChild(deleteButton)

        return li
    }

    function renderTask() {
        listUl.innerHTML = ""
        arrTasks.forEach(function (task) {
            listUl.appendChild(generaterLi(task))
        })
    }

    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action")

        if (!dataAction) return

        let currentLi = e.target

        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }

        const indexLi = [...lis].indexOf(currentLi)

        const action = {
            delete: function () {
                arrTasks.splice(indexLi, 1)
                renderTask()
                setNewData()
            },

            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");

                [...listUl.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                })

                editContainer.style.display = "flex"
            },

            contEditiButton: function () {
                const vaLue = currentLi.querySelector(".editInput").value
                arrTasks[indexLi].name = vaLue
                renderTask()
                setNewData()
            },

            contCancelButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");
                currentLi.querySelector(".editInput").value = arrTasks[indexLi].name
                editContainer.style.display = "none"
            },

            checkbox: function () {
                arrTasks[indexLi].complete = !arrTasks[indexLi].complete

                if (arrTasks[indexLi].complete) {
                    currentLi.querySelector(".fa-check").classList.remove("displayNone")
                } else {
                    currentLi.querySelector(".fa-check").classList.add("displayNone")
                }
                
                renderTask()
                setNewData()

            }

        }

        if (action[dataAction]) {
            action[dataAction]()
        }
    }

    listUl.addEventListener("click", clickedUl)
    renderTask()

})()