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
        let p = document.createElement("p");
        p.innerHTML = `<i class="fas fa-circle"></i>` + task;
        document.getElementById('todo').querySelector('#container').appendChild(p);
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

  console.log(todoArr);

  document.getElementById("taskForm").reset();
  todoArr.push(userInput);

  console.log(todoArr);

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



