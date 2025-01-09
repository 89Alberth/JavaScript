function Task(name) {
    let _name = name
    this.createAt = new Date()
    this.updated = null
    this.changeName = function (newName) {
        if (newName) {
            _name = newName
            this.updated = new Date()
        }
    }
    this.getName = function getName() {
        return _name
    }
}

const task_1 = new Task("Alberth")
task_1.changeName("mudei o nome")

const task_2 = new Task("Segunda tarefa")



console.log(task_1.getName())
console.log(task_1)
console.log(task_2)