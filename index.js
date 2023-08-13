let todoArr = (localStorage.getItem('todo')) ? (JSON.parse(localStorage.getItem('todo'))) : []
let doneArr = (localStorage.getItem('done')) ? (JSON.parse(localStorage.getItem('done'))) : []

const taskForm = document.getElementById('taskForm');
const sortAllTodo = document.getElementById('todo').querySelector('#sort-btn');
const deleteAllTodo = document.getElementById('todo').querySelector('#del-btn');

function makeList() {
    document.getElementById('todo').querySelector('#container').innerHTML = "";
    document.getElementById('done').querySelector('#container').innerHTML = "";

    let retTodo = JSON.parse(localStorage.getItem('todo'));
    let retDone = JSON.parse(localStorage.getItem('done'));

    if(retTodo) {
      retTodo.forEach(task => {
        let div = document.createElement("div");
        div.className = 'task-div';     

        let btn_fin = document.createElement("button");
        btn_fin.className = 'btn-finished';
        btn_fin.innerHTML = `<i class="fas fa-check"></i>`;
        btn_fin.title = "Task completed";

        let btn_del = document.createElement("button");
        btn_del.className = 'btn-delete';
        btn_del.innerHTML = `<i class="fas fa-trash"></i>`;
        btn_del.title = "Delete task";

        let p = document.createElement("p");
        
        p.innerHTML = `<i class="fas fa-circle"></i>` + task;

        div.append(p, btn_fin, btn_del);

        document.getElementById('todo').querySelector('#container').appendChild(div);
      });
    }
    
    if(retDone) {
      retDone.forEach(task => {
        let p = document.createElement("p");
        p.innerHTML = `<i class="fas fa-circle"></i>` + task;
        document.getElementById('done').querySelector('#container').appendChild(p);
      });
    }
    
}

makeList();

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.getElementById('task').value;

  document.getElementById("taskForm").reset();
  todoArr.push(userInput);

  localStorage.setItem("todo", JSON.stringify(todoArr));
  makeList(todoArr, 'todo');
});

deleteAllTodo.addEventListener("click", (e) => {
  localStorage.removeItem("todo");
  todoArr.length = 0;
  makeList();
})

sortAllTodo.addEventListener("click", (e) => {
  todoArr.sort();
  localStorage.setItem("todo", JSON.stringify(todoArr));
  makeList();
})



