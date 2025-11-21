function addTask() {
    let taskText = document.getElementById("taskInput").value;

    if (taskText === "") {
        alert("Enter something!");
        return;
    }

    
    let li = document.createElement("li");
    li.textContent = taskText + " ";

    
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
        let newText = prompt("Edit task:", taskText);
        if (newText !== "") {
            li.firstChild.textContent = newText + " ";
            taskText = newText; 
        }
    };
    li.appendChild(editBtn);

    
    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function () {
        li.remove();
    };
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}