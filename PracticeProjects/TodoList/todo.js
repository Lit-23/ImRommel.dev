const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2023-08-31'
}, {
  name: 'wash dishes',
  dueDate: '2023-09-01'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  todoList.forEach((todoObject, i) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToStorage ();
      ">Delete</button>
    `;

    todoListHTML += html;
  })

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

}

function addTodo() {
  const inputElement = document.querySelector('.js-todo-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //duedate: dueDate
    name, 
    dueDate
  });

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}