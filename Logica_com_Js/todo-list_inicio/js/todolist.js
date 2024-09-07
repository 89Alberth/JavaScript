; (function () {
    "use strict"
    //armazenar o DOM em variaveis
    const itemInput = document.getElementById("item-input") //campo input 
    const todoAddForma = document.getElementById("todo-add") //formulario
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")

   
    let arrTask = [
        {
            name: "task 1",
            creatAt: Date.now(),
            completed: false
        }
    ]
        

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
        checkButton.innerHTML = '<i class="fas fa-check displayNone"></i>'
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
    }



    function clickedUl(e){
        const dataAction = e.target.getAttribute("data-action")
        console.log(dataAction)
        if(!dataAction) return

        let currentLi = e.target
        console.log(currentLi)

        while(currentLi.nodeName !== "LI"){
            currentLi = currentLi.parentElement
        }
        
        const currentLiIndex = [...lis].indexOf(currentLi)

        const actions = {
            deleteButton: function(){
                arrTask.splice(currentLiIndex, 1)
                renderTask()
                console.log(arrTask)
            }
        }

        if(actions[dataAction]){
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