import './style.css';
import { add, edit, deleteItem, deleteAllCompleted } from './crud.js';
import ToDo from './todoList';
import DeleteButton from './delete-btn.png';

const defaultList = ['Finish project', 'Groceries', 'Fix laptop'];

// Add items to UI
export function populateList() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = ''

  ToDo.list.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.setAttribute('id', item.index);
    listItem.classList = 'item-container';

    listItem.innerHTML = `
    <input class="checkbox" type="checkbox">
    <span>${item.description}</span>
    <textarea class="text-area" maxlength="30">${item.description}</textarea>
    <img class="cancel-btn" src="${DeleteButton}">
    `;

    todoList.appendChild(listItem);

    const checkbox = listItem.querySelector('input');
    const text = listItem.querySelector('span');
    const textInput = listItem.querySelector('textarea');
    const deleteButton = listItem.querySelector('img');

    // Update
    checkbox.addEventListener('change', () => {
      const index = parseInt(listItem.id, 10);
      ToDo.list[index].update();
      text.classList.toggle('complete');
      textInput.classList.toggle('complete');
      localStorage.setItem('todoList', JSON.stringify(ToDo.list));
    });

    // Edit
    text.addEventListener('click', () => {
      text.style.display = 'none';
      textInput.classList.toggle('edit-item');
    });
    textInput.addEventListener('keydown', edit);

    // Delete
    deleteButton.addEventListener('click', deleteItem);

    if (item.complete) {
      checkbox.checked = true;
      text.classList = 'complete';
    }
  });
}

// Window load
const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new ToDo(item.description, item.complete));
} else {
  defaultList.forEach((item) => new ToDo(item, false));
}

// Add
const addInput = document.getElementById('add-input')
addInput.addEventListener('keydown', add)

// Delete all completed
const clearButton = document.getElementById('clear-btn')
clearButton.addEventListener('click', deleteAllCompleted)

// Populate UI
populateList();
