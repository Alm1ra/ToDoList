let todoArr = [];
let doneArr = [];

const taskForm = document.getElementById('taskForm');
const deleteAllTodo = document.getElementById('todo').querySelector('#todo-del')

function makeList(arr, id) {
    document.getElementById('todo').querySelector('#container').innerHTML = "";
    arr.forEach(task => {
        let p = document.createElement("p");
        p.innerHTML = `<i class="fas fa-circle"></i>` + task;
        document.getElementById(id).querySelector('#container').appendChild(p);
    });
}

taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.getElementById('task').value;
    document.getElementById("taskForm").reset();
    todoArr.push(userInput);

    console.log(todoArr);
    makeList(todoArr, 'todo');
  });





