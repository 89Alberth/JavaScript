; (function () {
    "use strict"
    //armazenar o DOM em variaveis
    const itemInput = document.getElementById("item-input") //campo input 
    const todoAddForma = document.getElementById("todo-add") //formulario
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")


    let arrTask = getSaveData()

    function getSaveData(){
        let taskData =  localStorage.getItem("tasks")
        taskData = JSON.parse(taskData)
        return taskData && taskData.length ? taskData : [
            {
                name: "task 1",
                creatAt: Date.now(),
                completed: false
            }
        ]
    
    
    }

    function setnewData(){
        localStorage.setItem("tasks", JSON.stringify(arrTask))
    }

    setnewData()

    // function addEventLi(li) {
    //     li.addEventListener("click", function () {
    //         console.log(this)
    //     })
    // }



    function generateTaskLi(obj) {
        const p = document.createElement("p")
        const li = document.createElement("li")
        const checkButton = document.createElement("button")
        const editButton = document.createElement("i")
        const removeTaskButton = document.createElement("i")

        li.className = "todo-item"

        checkButton.className = "button-check"
        checkButton.innerHTML = `<i class="fas fa-check ${obj.completed ? "" : "displayNone"}" data-action="checkButton"></i>`
        checkButton.setAttribute("data-action", "checkButton")
        li.appendChild(checkButton)

        p.className = "task-name"
        p.textContent = obj.name
        li.appendChild(p)

        editButton.className = "fas fa-edit"
        editButton.setAttribute("data-action", "editButton")
        li.appendChild(editButton)

        const containerEdit = document.createElement("div")
        containerEdit.className = "editContainer"

        const inputEdit = document.createElement("input")
        inputEdit.className = "editInput"
        inputEdit.setAttribute("type", "text")
        inputEdit.value = obj.name
        containerEdit.appendChild(inputEdit)

        const containerEditButton = document.createElement("button")
        containerEditButton.className = "editButton"
        containerEditButton.textContent = "Edit"
        containerEditButton.setAttribute("data-action", "containerEditButton")
        containerEdit.appendChild(containerEditButton)

        const containerCancelButton = document.createElement("button")
        containerCancelButton.className = "cancelButton"
        containerCancelButton.textContent = "Cancel"
        containerCancelButton.setAttribute("data-action", "containerCancelButton")
        containerEdit.appendChild(containerCancelButton)



        li.appendChild(containerEdit)

        removeTaskButton.className = "fas fa-trash-alt"
        removeTaskButton.setAttribute("data-action", "deleteButton")
        li.appendChild(removeTaskButton)


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
        setnewData()
    }



    function clickedUl(e) {
        const dataAction = e.target.getAttribute("data-action")
        console.log(dataAction)
        if (!dataAction) return

        let currentLi = e.target
        console.log(currentLi)

        while (currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }

        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            deleteButton: function () {
                arrTask.splice(currentLiIndex, 1)
                renderTask()
                setnewData()
                console.log(arrTask)
            },

            editButton: function () {
                const editContainer = currentLi.querySelector(".editContainer");
                [...ul.querySelectorAll(".editContainer")].forEach(container => {
                    container.removeAttribute("style")
                })
                editContainer.style.display = "flex"
            },

            containerEditButton: function () {
                const val = document.querySelector(".editInput").value
                arrTask[currentLiIndex].name = val
                renderTask()
                setnewData()
            },

            containerCancelButton: function () {
                currentLi.querySelector(".editContainer").removeAttribute("style")
                currentLi.querySelector(".editInput").value = arrTask[currentLiIndex].name
            },

            checkButton: function () {
                arrTask[currentLiIndex].completed = !arrTask[currentLiIndex].completed

                // if(arrTask[currentLiIndex].completed){
                //     currentLi.querySelector(".fa-check").classList.remove("displayNone")
                // }else{
                //     currentLi.querySelector(".fa-check").classList.add("displayNone")
                // }

                renderTask()
                setnewData()
            }
        }

        if (actions[dataAction]) {
            actions[dataAction]()
        }
    }




    todoAddForma.addEventListener("submit", function (e) {
        e.preventDefault()
        addTask(itemInput.value)
        renderTask()
        itemInput.value = ""
        itemInput.focus()
    });


    ul.addEventListener("click", clickedUl)

    renderTask()

})();