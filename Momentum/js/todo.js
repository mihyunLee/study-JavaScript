const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//Local Storage에 to do 값 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); // HTML에서의 삭제
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // DB 삭제
  saveToDos(); // Local Storage에 반영
}

// 화면에 ToDo list 출력
function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newTodo.text;
  button.innerText = "❌";

  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

//Submit
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //input 값을 비우기 전 저장해두기
  toDoInput.value = ""; //enter시 input 값을 비우기

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // to do exist
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
