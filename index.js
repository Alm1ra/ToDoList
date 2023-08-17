let todoArr = (localStorage.getItem('todo')) ? (JSON.parse(localStorage.getItem('todo'))) : []
let doneArr = (localStorage.getItem('done')) ? (JSON.parse(localStorage.getItem('done'))) : []

const taskForm = document.getElementById('taskForm');
const sortAllTodo = document.getElementById('todo').querySelector('.sort-btn');
const deleteAllTodo = document.getElementById('todo').querySelector('.del-btn');
const sortAllDone = document.getElementById('done').querySelector('.sort-btn');
const deleteAllDone = document.getElementById('done').querySelector('.del-btn');

const todoTaskBtns = document.querySelector("#todo").querySelector(".container");
const doneTaskBtns = document.querySelector("#done").querySelector(".container");

function makeList() {
    document.getElementById('todo').querySelector('.container').innerHTML = "";
    document.getElementById('done').querySelector('.container').innerHTML = "";

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
        document.getElementById('todo').querySelector('.container').appendChild(div);
      });
    }
    
    if(retDone) {
      retDone.forEach(task => {
        let div = document.createElement("div");
        div.className = 'task-div';  

        let btn_del = document.createElement("button");
        btn_del.className = 'btn-delete';
        btn_del.innerHTML = `<i class="fas fa-trash"></i>`;
        btn_del.title = "Delete task";

        let p = document.createElement("p");
        p.innerHTML = `<i class="fas fa-circle"></i>` + task;

        div.append(p, btn_del);
        document.getElementById('done').querySelector('.container').appendChild(div);
      });
    }    
}

function deleteAll(section, arr) {
  localStorage.removeItem(section);
  arr.length = 0;
  makeList();
}

function sortAll(section, arr) {
  arr.sort();
  localStorage.setItem(section, JSON.stringify(arr));
  makeList();
}

function taskButtons(clickedBtn, section, arr) {
  if(clickedBtn.nodeName !== 'BUTTON') {return;}
    
  let chosenTask = (clickedBtn.parentNode.innerText);
  let index = arr.indexOf(chosenTask);
  arr.splice(index, 1);
  localStorage.setItem(section, JSON.stringify(arr));

  if(clickedBtn.className === 'btn-finished') {
    doneArr.push(chosenTask);
    localStorage.setItem("done", JSON.stringify(doneArr));
  }
  makeList();
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
  deleteAll("todo", todoArr);
})

deleteAllDone.addEventListener("click", (e) => {
  deleteAll("done", doneArr);
})

sortAllTodo.addEventListener("click", (e) => {
  sortAll("todo", todoArr);
})

sortAllDone.addEventListener("click", (e) => {
  sortAll("done", doneArr);
})

todoTaskBtns.addEventListener("click", (e) => { 
  const clickedBtn = e.target.parentNode;
  taskButtons(clickedBtn, "todo", todoArr);
})

doneTaskBtns.addEventListener("click", (e) => {
  const clickedBtn = e.target.parentNode;
  taskButtons(clickedBtn, "done", doneArr);
})

