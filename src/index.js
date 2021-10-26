import './style.css'

let toDoListItems = [
  {
    description: 'Finish project',
    completed: false,
    index: 0,
  },
  {
    description: 'Groceries',
    completed: false,
    index: 1,
  },
  {
    description: 'Fix laptop',
    completed: false,
    index: 2,
  },
]

const populateList = function() {
  const todoList = document.getElementById('todo-list');

  toDoListItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item.description;
    todoList.appendChild(listItem);
  });
}

populateList()
