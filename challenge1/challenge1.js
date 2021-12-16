function createTask() {
    const taskInfo = document.getElementById("task").value;
    const task = document.createElement("p")
    const btn = document.createElement("button")
    btn.innerHTML="remove task"
    btn.type="button"
    btn.addEventListener("click", removeTask)
    btn.classList.add('FloatRight')
    task.innerHTML = taskInfo 
    document.body.appendChild(task)
    task.appendChild(btn)
    console.log('task created')
}

function removeTask() {
    console.log('removed task')
    this.parentElement.parentElement.removeChild(this.parentElement)
}
