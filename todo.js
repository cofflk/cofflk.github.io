const todoForm = document.querySelector("#form-todo");
const todoInput = document.querySelector("#form-todo input");
const todoUl = document.querySelector("#todolist")
const KEY_TODO = "todos";

let todolist = [];

function saveItem() {
    localStorage.setItem(KEY_TODO, JSON.stringify(todolist))
}

function deleteItem(event) {
    const li = event.target.parentElement;
    li.remove();
    todolist = todolist.filter((item) => item.id !== parseInt(li.id));
    console.log(todolist)
    saveItem();
}

function drawTodoItem(item) {
    const li = document.createElement("li");
    li.id = item.id;

    const span = document.createElement("span");
    span.innerText = item.text;

    const btn = document.createElement("button");
    btn.innerText = "❌"

    btn.addEventListener('click', deleteItem);

    li.appendChild(span);
    li.appendChild(btn);
    todoUl.append(li);
}


function addTodoItem(event) {
    console.log(123123)
    event.preventDefault();
    const newItem = todoInput.value;
    todoInput.value = '';

    const obj = {
        id: Date.now(),
        text: newItem
    };
    todolist.push(obj);
    drawTodoItem(obj);
    saveItem();

}

todoForm.addEventListener("submit", addTodoItem);
const todoData = localStorage.getItem(KEY_TODO);


if (todoData !== null) {
    const parsedToDos = JSON.parse(todoData);
    todolist = parsedToDos;
    parsedToDos.forEach(drawTodoItem);
  }