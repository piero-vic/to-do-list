import './style.css';
import { add, deleteAllCompleted, populateList } from './crud';
import ToDo from './todoList';

// Window load
const list = JSON.parse(localStorage.getItem('todoList'));
if (list) {
  list.forEach((item) => new ToDo(item.description, item.complete));
}

// Add
const addInput = document.getElementById('add-input');
addInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    add(addInput.value);
    addInput.value = '';
    populateList();
  }
});

// Delete all completed
const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', deleteAllCompleted);

// Populate UI
populateList();
