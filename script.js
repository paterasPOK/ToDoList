// selectors

var input = document.getElementById("input");
var addBtn = document.getElementById("addBtn");
var parent = document.getElementById("todos");



//listeners

addBtn.addEventListener("click", addToDo);
parent.addEventListener("click", rmToDo);



//functions

function addToDo(event) {
    event.preventDefault();
    
    if (input.value == "") {
        alert("Please enter task");
    }else {

        var todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        var newToDo = document.createElement("li");
        newToDo.classList.add("todo-item");
        
        var rmBtn = document.createElement("button");
        rmBtn.id = "rmBtn";
        rmBtn.innerText = "X";

        newToDo.innerText = input.value;

        newToDo.appendChild(rmBtn);
        todoDiv.appendChild(newToDo);

        parent.appendChild(newToDo);
        input.value = ""

        
        
    }
}

function rmToDo (event) {
    var item = event.target;

        if(this.childElementCount != 0){
            var todo = item.parentElement;
            todo.remove();
        }
        
   

}