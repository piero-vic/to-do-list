import ToDo from './todoList';
import { populateList } from './index.js';

// Add
export function add(e) {
  if (e.code === 'Enter'){
    // Create new item
    new ToDo(this.value, false)

    // Update local storage
    localStorage.setItem('todoList', JSON.stringify(ToDo.list));

    // Update UI
    this.value = ''
    populateList()
  }
}

// Edit
export function edit(e) {
  // Follow value
  this.previousElementSibling.innerHTML = this.value

  // Update list
  const index = parseInt(this.parentNode.id, 10)
  ToDo.list[index].description = this.previousElementSibling.innerHTML

  // Update local storage
  localStorage.setItem('todoList', JSON.stringify(ToDo.list));

  if (e.code === 'Enter'){
    // Set variables
    const index = parseInt(this.parentNode.id, 10)
    const span = this.previousElementSibling
    const textarea = this

    // Update UI
    this.previousElementSibling.style.display = 'block'
    this.classList.toggle('edit-item');
  }
}
