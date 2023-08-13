let todoArr = [];
let doneArr = [];

const taskForm = document.getElementById('taskForm');
const sortAllTodo = document.getElementById('todo').querySelector('#sort-btn');
const deleteAllTodo = document.getElementById('todo').querySelector('#del-btn');

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

    //let storedTodo = JSON.string(todoArr);
    //localStorage.setItem("todo", storedTodo);

   // console.log(JSON.parse(localStorage.getItem("todo")));
    makeList(todoArr, 'todo');
  });

  deleteAllTodo.addEventListener("click", (e) => {
    todoArr.length = 0;
    makeList(todoArr, 'todo');
  })

  sortAllTodo.addEventListener("click", (e) => {
    todoArr.sort();
    makeList(todoArr, 'todo');
  })



